import 'server-only';
import { createSign } from 'node:crypto';
import type { Job } from '@/lib/supabase';

const SHEET_ID = '1ltvLBZ8ynTcJdKZzVXWKksJVFEQgpae0hi-bligidHg';
const RANGE = "'jobs'!A:L";

function base64url(value: string) {
  return Buffer.from(value).toString('base64url');
}

async function accessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!email || !key) throw new Error('Google Sheets service account credentials are not configured');
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(JSON.stringify({
    iss: email, scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
  }));
  const unsigned = `${header}.${claims}`;
  const signer = createSign('RSA-SHA256');
  signer.update(unsigned);
  signer.end();
  const assertion = `${unsigned}.${signer.sign(key).toString('base64url')}`;
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    cache: 'no-store',
  });
  if (!response.ok) throw new Error(`Google OAuth failed: ${response.status}`);
  const json = await response.json();
  return json.access_token;
}

function normalize(value: string) {
  return value.toLowerCase().trim().replace(/[\s-]+/g, '_');
}

function requirements(value: string): string[] {
  return value.split(/\r?\n|\s*;\s*/).map(x => x.trim()).filter(Boolean);
}

export async function getSheetJobs(): Promise<Job[]> {
  const token = await accessToken();
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(RANGE)}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 300 },
  });
  if (!response.ok) throw new Error(`Google Sheets read failed: ${response.status}`);
  const payload = await response.json();
  const rows: string[][] = payload.values || [];
  if (!rows.length) return [];
  const headers = rows[0].map(normalize);
  const read = (row: string[], name: string) => (row[headers.indexOf(name)] || '').trim();
  return rows.slice(1).flatMap((row, index) => {
    const title = read(row, 'title');
    if (!title) return [];
    const status = read(row, 'status').toLowerCase();
    if (status && status !== 'active') return [];
    const featured = read(row, 'is_featured').toLowerCase();
    return [{
      id: read(row, 'job_id') || `sheet-row-${index + 2}`,
      title,
      company: read(row, 'company'),
      location: read(row, 'location'),
      type: read(row, 'type') || 'Not specified',
      salary_range: read(row, 'salary_range') || null,
      description: read(row, 'description'),
      requirements: requirements(read(row, 'requirements')),
      experience_required: read(row, 'experience_required') || null,
      department: read(row, 'industry') || null,
      is_featured: ['yes', 'true', '1', 'featured'].includes(featured),
      is_active: true,
      created_at: new Date(0).toISOString(),
    }];
  });
}

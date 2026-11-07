import 'server-only';
import { getVercelOidcToken } from '@vercel/oidc';
import type { Job } from '@/lib/supabase';

const SHEET_ID = '1ltvLBZ8ynTcJdKZzVXWKksJVFEQgpae0hi-bligidHg';
const RANGE = "'jobs'!A:L";
const PROJECT_NUMBER = '712207849749';
const POOL_ID = 'clarion-vercel-pool';
const PROVIDER_ID = 'clarion-vercel-oidc';
const SERVICE_ACCOUNT = 'clarion-jobs-reader@clarion-514008.iam.gserviceaccount.com';
const AUDIENCE = `//iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/providers/${PROVIDER_ID}`;

async function accessToken(): Promise<string> {
  const oidcToken = await getVercelOidcToken();
  // Log only identity metadata; never log the signed JWT or access tokens.
  const claims = JSON.parse(Buffer.from(oidcToken.split('.')[1], 'base64url').toString('utf8')) as {
    sub?: string;
    iss?: string;
    aud?: string | string[];
  };
  const sts = await fetch('https://sts.googleapis.com/v1/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      audience: AUDIENCE,
      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
      requested_token_type: 'urn:ietf:params:oauth:token-type:access_token',
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      subject_token: oidcToken,
      scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    }),
    cache: 'no-store',
  });
 if (!sts.ok) {
  const details = await sts.text();
  console.error('Vercel OIDC identity rejected by Google', { subject: claims.sub, issuer: claims.iss, audience: claims.aud });
  throw new Error(
    `Google STS token exchange failed: ${sts.status} - ${details.slice(0, 1500)}`
  );
}
  const federated = await sts.json();
  const impersonation = await fetch(`https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${SERVICE_ACCOUNT}:generateAccessToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${federated.access_token}` },
    body: JSON.stringify({ scope: ['https://www.googleapis.com/auth/spreadsheets.readonly'], lifetime: '3600s' }),
    cache: 'no-store',
  });
  if (!impersonation.ok) throw new Error(`Google service account impersonation failed: ${impersonation.status}`);
  const credentials = await impersonation.json();
  return credentials.accessToken;
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

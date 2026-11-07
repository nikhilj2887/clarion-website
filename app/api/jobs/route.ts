import { NextResponse } from 'next/server';
import { getSheetJobs } from '@/lib/google-sheets-jobs';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const jobs = await getSheetJobs();
    return NextResponse.json({ jobs }, { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60' } });
  } catch (error) {
    console.error('Unable to load Clarion jobs from Google Sheets:', error);
    return NextResponse.json({ error: 'Job listings are temporarily unavailable' }, { status: 503 });
  }
}

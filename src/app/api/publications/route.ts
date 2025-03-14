import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      'https://github.com/Bokobelin/mrichelle_pubs/raw/refs/heads/main/articles.json',
      { cache: 'no-store' }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch publications');
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching publications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch publications' },
      { status: 500 }
    );
  }
}
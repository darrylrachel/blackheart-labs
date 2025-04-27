import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const OMNISEND_API_KEY = process.env.OMNISEND_API_KEY;
    const OMNISEND_ENDPOINT = 'https://api.omnisend.com/v3/contacts';

    const response = await fetch(OMNISEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'X-API-KEY': OMNISEND_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifiers: [{ type: 'email', id: email }],
        status: 'subscribed',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

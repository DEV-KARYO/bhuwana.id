import { NextResponse } from 'next/server';
import {
  createSessionToken,
  getCookieName,
  validateCredentials,
} from '@/lib/auth';

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body?.email || !body?.password) {
    return NextResponse.json(
      { message: 'Email dan password wajib diisi.' },
      { status: 400 }
    );
  }

  const valid = validateCredentials(body.email, body.password);

  if (!valid) {
    return NextResponse.json(
      { message: 'Kredensial tidak valid.' },
      { status: 401 }
    );
  }

  const token = createSessionToken(body.email);
  const response = NextResponse.json({ ok: true });

  response.cookies.set({
    name: getCookieName(),
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  });

  return response;
}

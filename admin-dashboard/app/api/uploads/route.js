import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body?.filename || !body?.data) {
    return NextResponse.json({ message: 'filename and data required' }, { status: 400 });
  }

  const match = body.data.match(/^data:(.+);base64,(.*)$/);
  if (!match) {
    return NextResponse.json({ message: 'invalid data' }, { status: 400 });
  }

  const buffer = Buffer.from(match[2], 'base64');
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(uploadsDir, { recursive: true });

  const safeName = body.filename.replace(/[^a-zA-Z0-9.\-_]/g, '_');
  const filePath = path.join(uploadsDir, safeName);

  await fs.writeFile(filePath, buffer);

  const url = `/uploads/${safeName}`;
  return NextResponse.json({ ok: true, url });
}

export async function DELETE(request) {
  const body = await request.json().catch(() => null);
  if (!body?.filename) {
    return NextResponse.json({ message: 'filename required' }, { status: 400 });
  }

  const safeName = body.filename.replace(/[^a-zA-Z0-9.\-_]/g, '_');
  const filePath = path.join(process.cwd(), 'public', 'uploads', safeName);

  try {
    await fs.unlink(filePath);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ message: 'file not found' }, { status: 404 });
  }
}

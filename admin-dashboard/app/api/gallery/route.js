import { NextResponse } from 'next/server';
import { createGallery, getGallery } from '@/lib/store';
import { isAuthorized } from '@/lib/guards';

function validate(body) {
  const required = ['title', 'description', 'image', 'date', 'category'];
  const missing = required.filter((key) => !body?.[key]);
  return { ok: missing.length === 0, missing };
}

export async function GET(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const data = await getGallery();
  return NextResponse.json(data);
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const result = validate(body);

  if (!result.ok) {
    return NextResponse.json(
      { message: `Field wajib: ${result.missing.join(', ')}` },
      { status: 400 }
    );
  }

  const item = await createGallery(body);
  return NextResponse.json(item, { status: 201 });
}

import { NextResponse } from 'next/server';
import { createNews, getNews } from '@/lib/store';
import { isAuthorized } from '@/lib/guards';

function validate(body) {
  const required = ['title', 'excerpt', 'content', 'category', 'author', 'image'];
  const missing = required.filter((key) => !body?.[key]);

  if (!body?.publishedAt && !body?.date) {
    missing.push('publishedAt');
  }

  return { ok: missing.length === 0, missing };
}

export async function GET(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const data = await getNews();
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

  const item = await createNews({
    ...body,
    tags: Array.isArray(body.tags) ? body.tags : [],
  });

  return NextResponse.json(item, { status: 201 });
}

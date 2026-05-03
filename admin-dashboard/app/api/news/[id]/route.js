import { NextResponse } from 'next/server';
import { deleteNews, updateNews } from '@/lib/store';
import { isAuthorized } from '@/lib/guards';

function parseId(params) {
  const id = Number(params.id);
  return Number.isFinite(id) ? id : null;
}

function validate(body) {
  const required = ['title', 'excerpt', 'content', 'category', 'author', 'image'];
  const missing = required.filter((key) => !body?.[key]);

  if (!body?.publishedAt && !body?.date) {
    missing.push('publishedAt');
  }

  return { ok: missing.length === 0, missing };
}

export async function PUT(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const id = parseId(params);
  if (!id) {
    return NextResponse.json({ message: 'ID tidak valid.' }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ message: 'Payload tidak valid.' }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json(
      { message: `Field wajib: ${result.missing.join(', ')}` },
      { status: 400 }
    );
  }

  const item = await updateNews(id, {
    ...body,
    tags: Array.isArray(body.tags) ? body.tags : [],
  });

  if (!item) {
    return NextResponse.json({ message: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json(item);
}

export async function DELETE(_, { params }) {
  if (!isAuthorized(_)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const id = parseId(params);
  if (!id) {
    return NextResponse.json({ message: 'ID tidak valid.' }, { status: 400 });
  }

  const ok = await deleteNews(id);

  if (!ok) {
    return NextResponse.json({ message: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}

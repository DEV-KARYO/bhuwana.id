import { NextResponse } from 'next/server';
import { deleteGallery, updateGallery } from '@/lib/store';
import { isAuthorized } from '@/lib/guards';

function parseId(params) {
  const id = Number(params.id);
  return Number.isFinite(id) ? id : null;
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

  const item = await updateGallery(id, body);

  if (!item) {
    return NextResponse.json({ message: 'Data galeri tidak ditemukan.' }, { status: 404 });
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

  const ok = await deleteGallery(id);

  if (!ok) {
    return NextResponse.json({ message: 'Data galeri tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}

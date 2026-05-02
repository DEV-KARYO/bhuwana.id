# Project Summary

## Status

Repository sudah dipisahkan menjadi dua aplikasi:

- Public site (`bhuwana.id`) untuk konsumsi informasi publik.
- Admin dashboard (`admin.bhuwana.id`) untuk tim pengelola.

## Yang Sudah Selesai

- Split aplikasi public vs admin.
- Implementasi login admin dengan cookie HttpOnly.
- CRUD konten berita dan galeri di admin.
- Konsolidasi data ke `content/` sebagai single source of truth.
- Dokumentasi deployment dual-subdomain.
- Cleanup kode usang (komponen orphan dan modul data lama).

## Struktur Data Konten

- `content/news.json`
- `content/gallery.json`
- `content/leadership.json`

## Script Penting

Root:

- `npm run dev:public`
- `npm run dev:admin`
- `npm run build:public`
- `npm run build:admin`

Admin only:

- `npm --prefix admin-dashboard run dev`
- `npm --prefix admin-dashboard run build`

## Catatan Operasional

- Public tetap read-only.
- Perubahan konten melalui admin akan mengubah file di `content/`.
- Public mode static export memerlukan rebuild/deploy ulang untuk mempublikasikan update terbaru.

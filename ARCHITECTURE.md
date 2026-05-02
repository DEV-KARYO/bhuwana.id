# Architecture Overview

## Tujuan

Memisahkan portal publik dan area pengelolaan agar:

- User umum tidak pernah melihat login.
- Admin tetap memiliki dashboard aman untuk CRUD.

## Aplikasi

### Public Site (`bhuwana.id`)

- Framework: Next.js App Router
- Lokasi: root project (`app/`, `components/`, `lib/`)
- Mode: read-only
- Data source: `content/*.json` via `lib/content.js`

### Admin Dashboard (`admin.bhuwana.id`)

- Framework: Next.js App Router (aplikasi terpisah)
- Lokasi: `admin-dashboard/`
- Fitur: login admin, CRUD berita, CRUD galeri
- Auth: cookie HttpOnly + signed token
- Data store: menulis langsung ke `../content/*.json`

## Data Flow

1. Admin login di `admin-dashboard/app/login/page.jsx`.
2. Admin CRUD lewat API di `admin-dashboard/app/api/*`.
3. API menulis ke `content/news.json` dan `content/gallery.json`.
4. Public site membaca data terbaru dari `lib/content.js`.

## Security Boundary

- Public domain: tanpa endpoint login/admin.
- Admin domain: endpoint login + endpoint CRUD terproteksi.
- Session cookie hanya untuk admin app.

## Dokumen Terkait

- Setup: `SETUP_GUIDE.md`
- Deployment: `DUAL_APP_DEPLOYMENT.md`
- Ringkasan proyek: `PROJECT_SUMMARY.md`

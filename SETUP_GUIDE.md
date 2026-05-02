# Setup Guide

## Prasyarat

- Node.js 18+
- npm

## Instalasi

### Public app

```bash
npm install
```

### Admin app

```bash
npm --prefix admin-dashboard install
cp admin-dashboard/.env.example admin-dashboard/.env.local
```

Isi minimal `admin-dashboard/.env.local`:

```env
ADMIN_EMAIL=admin@bhuwana.id
ADMIN_PASSWORD=ganti-password-kuat
AUTH_SECRET=ganti-auth-secret-random
```

## Menjalankan Lokal

### Public

```bash
npm run dev:public
```

URL: `http://localhost:3000`

### Admin

```bash
npm run dev:admin
```

URL: `http://localhost:3001`

## Verifikasi Cepat

1. Public route bisa dibuka: `/`, `/news`, `/gallery`, `/structure`.
2. Admin meminta login di `/login`.
3. Setelah login admin, menu dashboard/news/gallery dapat diakses.
4. CRUD dari admin mengubah data di folder `content/`.

## Build Test

```bash
npm run build:public
npm run build:admin
```

Jika kedua build sukses, setup dianggap siap.

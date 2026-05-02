# Bhuwana Platform

Platform ini terdiri dari dua aplikasi terpisah dalam satu repository:

- Public Site: `bhuwana.id` (read-only untuk user umum)
- Admin Dashboard: `admin.bhuwana.id` (login + CRUD konten)

## Struktur Singkat

```
bhuwana.id/
├── app/                    # Public app (Next.js App Router)
├── components/             # UI public
├── content/                # Sumber data bersama (news, gallery, leadership)
├── lib/                    # Utility public
├── admin-dashboard/        # Admin app terpisah (Next.js)
├── DUAL_APP_DEPLOYMENT.md
└── package.json
```

## Sumber Data

Satu sumber data dipakai bersama oleh public dan admin:

- `content/news.json`
- `content/gallery.json`
- `content/leadership.json`

Public membaca data dari `lib/content.js`.
Admin menulis perubahan konten ke folder `content/`.

## Menjalankan Lokal

### 1) Public Site

```bash
npm install
npm run dev:public
```

Akses: `http://localhost:3000`

### 2) Admin Dashboard

```bash
npm --prefix admin-dashboard install
cp admin-dashboard/.env.example admin-dashboard/.env.local
npm run dev:admin
```

Akses: `http://localhost:3001`

## Build

```bash
npm run build:public
npm run build:admin
```

## Deploy

Panduan deploy dua subdomain ada di `DUAL_APP_DEPLOYMENT.md`.

## Catatan

- Public site tidak memiliki login route.
- Login hanya ada di admin dashboard.
- Dokumen lama yang merujuk `lib/data.js` atau route `app/api/news` sudah diganti.

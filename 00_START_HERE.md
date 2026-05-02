# 00 START HERE

Dokumen ini adalah pintu masuk cepat untuk developer baru.

## 1) Pahami Struktur

Repo berisi 2 aplikasi:

- Public: `bhuwana.id` (tanpa login)
- Admin: `admin.bhuwana.id` (login + CRUD)

Lihat detail di:

- `README.md`
- `ARCHITECTURE.md`

## 2) Jalankan Lokal

```bash
npm install
npm --prefix admin-dashboard install
cp admin-dashboard/.env.example admin-dashboard/.env.local
npm run dev:public
npm run dev:admin
```

## 3) Data Konten

Semua konten inti ada di folder `content/`:

- `content/news.json`
- `content/gallery.json`
- `content/leadership.json`

## 4) Deployment

Gunakan:

- `DUAL_APP_DEPLOYMENT.md`
- `DEPLOYMENT_CHECKLIST.md`

## 5) Catatan Penting

- Jangan kembalikan referensi ke `lib/data.js` atau route legacy `app/api/news`.
- Login hanya di admin app.
- Public app tetap read-only.

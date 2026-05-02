# Admin Dashboard Bhuwana

Aplikasi admin terpisah untuk domain `admin.bhuwana.id`.

## Fitur

- Login admin (cookie HttpOnly)
- Proteksi route dashboard dan API berbasis sesi cookie HttpOnly
- CRUD berita
- CRUD galeri
- Menulis ke content bersama di `../content` untuk dipakai public site

## Jalankan Lokal

1. Salin env:

```bash
cp .env.example .env.local
```

2. Install dependency:

```bash
npm install
```

3. Jalankan:

```bash
npm run dev
```

Akses di `http://localhost:3001`.

## Catatan Keamanan

- Selalu ubah `ADMIN_PASSWORD` dan `AUTH_SECRET` di produksi.
- Gunakan HTTPS saat deploy agar cookie aman (`secure`).

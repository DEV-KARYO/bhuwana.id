# File Reference (Current)

## Root Public App

- `app/layout.jsx`: layout global public.
- `app/page.jsx`: beranda public.
- `app/news/page.jsx`: daftar berita.
- `app/news/[id]/page.jsx`: detail berita.
- `app/gallery/page.jsx`: halaman galeri.
- `app/structure/page.jsx`: halaman pimpinan.

## Shared Content

- `content/news.json`: data berita.
- `content/gallery.json`: data galeri.
- `content/leadership.json`: data pimpinan.
- `lib/content.js`: adapter data konten untuk public app.

## Public Components

- `components/Navbar.jsx`
- `components/Footer.jsx`
- `components/HeroSection.jsx`
- `components/ServicesSection.jsx`
- `components/NewsHighlight.jsx`
- `components/NewsCard.jsx`
- `components/NewsDetailClient.jsx`
- `components/SearchModal.jsx`
- `components/Toast.jsx`

## Admin App (`admin-dashboard/`)

- `admin-dashboard/app/login/page.jsx`: login admin.
- `admin-dashboard/app/dashboard/page.jsx`: ringkasan dashboard.
- `admin-dashboard/app/dashboard/news/page.jsx`: CRUD berita.
- `admin-dashboard/app/dashboard/gallery/page.jsx`: CRUD galeri.

## Admin API

- `admin-dashboard/app/api/auth/login/route.js`
- `admin-dashboard/app/api/auth/logout/route.js`
- `admin-dashboard/app/api/news/route.js`
- `admin-dashboard/app/api/news/[id]/route.js`
- `admin-dashboard/app/api/gallery/route.js`
- `admin-dashboard/app/api/gallery/[id]/route.js`

## Admin Lib

- `admin-dashboard/lib/auth.js`: helper session token.
- `admin-dashboard/lib/guards.js`: guard otorisasi endpoint.
- `admin-dashboard/lib/store.js`: baca/tulis file konten shared.

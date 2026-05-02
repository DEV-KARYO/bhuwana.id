# Deployment Checklist (Dual App)

## A. Public Site (`bhuwana.id`)

- [ ] Domain `bhuwana.id` mengarah ke service public.
- [ ] Build command: `npm run build:public`
- [ ] Start command: `npm run start:public`
- [ ] Semua route public dapat diakses tanpa login.

## B. Admin Dashboard (`admin.bhuwana.id`)

- [ ] Domain `admin.bhuwana.id` mengarah ke service admin.
- [ ] Build command: `npm --prefix admin-dashboard run build`
- [ ] Start command: `npm --prefix admin-dashboard run start`
- [ ] HTTPS aktif untuk domain admin.

## C. Environment Admin (Wajib)

- [ ] `ADMIN_EMAIL` sudah di-set.
- [ ] `ADMIN_PASSWORD` kuat dan tidak default.
- [ ] `AUTH_SECRET` panjang dan random.

## D. Functional Check

- [ ] Login admin berhasil.
- [ ] CRUD berita berhasil.
- [ ] CRUD galeri berhasil.
- [ ] Perubahan konten tersimpan di `content/`.
- [ ] Public menampilkan data konten terbaru setelah rebuild/deploy.

## E. Security Check

- [ ] Tidak ada route login pada public domain.
- [ ] Cookie login admin memakai `HttpOnly`.
- [ ] Tidak ada secret di repository.

# Deploy 2 Subdomain (Public + Admin)

Dokumen ini untuk target:

- `bhuwana.id` -> public site (read-only)
- `admin.bhuwana.id` -> admin dashboard (login + CRUD)

## 1) Deploy Public Site

Source: root project.

Build command:

```bash
npm install
npm run build:public
```

Run command:

```bash
npm run start:public
```

## 2) Deploy Admin Dashboard

Source: folder `admin-dashboard`.

Build command:

```bash
npm --prefix admin-dashboard install
npm --prefix admin-dashboard run build
```

Run command:

```bash
npm --prefix admin-dashboard run start
```

## 3) Environment Admin (Wajib)

Set environment variable pada layanan deploy admin:

```env
ADMIN_EMAIL=admin@bhuwana.id
ADMIN_PASSWORD=password-kuat-anda
AUTH_SECRET=random-string-panjang-dan-unik
```

## 4) DNS Mapping

- A/ALIAS `bhuwana.id` -> service public
- A/ALIAS `admin.bhuwana.id` -> service admin

## 5) Reverse Proxy (Opsional)

Jika menggunakan Nginx:

- host `bhuwana.id` arahkan ke app public (port 3000)
- host `admin.bhuwana.id` arahkan ke app admin (port 3001)

Pastikan HTTPS aktif di kedua subdomain.

## 6) Catatan Keamanan

- Jangan expose route admin pada domain public.
- Gunakan password admin kuat dan rotasi berkala.
- Simpan `AUTH_SECRET` hanya di secret manager.

import './globals.css';

export const metadata = {
  title: 'Admin Dashboard Bhuwana',
  description: 'Dashboard admin untuk kelola berita dan galeri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

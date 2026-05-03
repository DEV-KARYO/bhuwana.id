import { Inter } from 'next/font/google';
import { ToastContainer } from '@/components/Toast';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Lang Lang Bhuwana - Portal Informasi Resmi',
  description:
    'Portal resmi Batalion Lang Lang Bhuwana. Berkomitmen pada profesionalisme, transparansi publik, dan kemajuan bangsa melalui integritas tinggi.',
  keywords: [
    'Batalion Lang Lang Bhuwana',
    'Institusi Militer',
    'Portal Resmi',
    'Warta Batalion',
    'Transparansi Publik',
  ],
  authors: [{ name: 'Tim Penerangan Satuan' }],
  openGraph: {
    title: 'Lang Lang Bhuwana - Portal Informasi Resmi',
    description:
      'Portal resmi Batalion Lang Lang Bhuwana. Berkomitmen pada profesionalisme, transparansi publik, dan kemajuan bangsa melalui integritas tinggi.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className="min-h-screen bg-white font-sans">
        <a href="#konten-utama" className="skip-link">
          Lewati ke konten utama
        </a>
        <ToastContainer />
        <div id="konten-utama">{children}</div>
      </body>
    </html>
  );
}

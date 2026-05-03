import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Sitemap - Lang Lang Bhuwana',
  description: 'Peta situs portal Batalyon Zeni Tempur 9 / Lang Lang Bhuwana. Navigasi lengkap untuk mengakses semua halaman dan fitur.',
};

export default function SitemapPage() {
  const sections = [
    {
      title: 'Informasi Utama',
      links: [
        { label: 'Beranda', href: '/' },
        { label: 'Warta & Pengumuman', href: '/news' },
        { label: 'Struktur Pimpinan', href: '/structure' },
        { label: 'Galeri Dokumentasi', href: '/gallery' },
      ],
    },
    {
      title: 'Informasi Hukum & Kebijakan',
      links: [
        { label: 'Kebijakan Privasi', href: '/privacy' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'Transparansi', href: '/transparency' },
        { label: 'Sitemap', href: '/sitemap' },
      ],
    },
    {
      title: 'Karir & Pengembangan',
      links: [
        { label: 'Karir & Penerimaan', href: '/career' },
        { label: 'Laporan Publik', href: '/public-report' },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-slate-600 hover:text-indigo-950 transition-colors">
                Beranda
              </Link>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="text-slate-900 font-semibold">Sitemap</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-b from-indigo-950 to-indigo-900 text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Peta Situs
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-2xl">
              Navigasi lengkap semua halaman dan fitur yang tersedia di portal Batalyon Zeni Tempur 9 / Lang Lang Bhuwana
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600 mb-1">6</p>
                <p className="text-slate-700 text-sm">Halaman Utama</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600 mb-1">4</p>
                <p className="text-slate-700 text-sm">Halaman Legal</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600 mb-1">2</p>
                <p className="text-slate-700 text-sm">Halaman Karir</p>
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-8">
              {sections.map((section, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-indigo-50 p-4 border-b border-slate-200">
                    <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                      <MapPin className="text-indigo-600" size={20} />
                      {section.title}
                    </h2>
                  </div>
                  <ul className="divide-y divide-slate-200">
                    {section.links.map((link, i) => (
                      <li key={i} className="hover:bg-slate-50 transition-colors">
                        <Link 
                          href={link.href}
                          className="block p-4 text-indigo-600 hover:text-indigo-700 font-medium flex items-center justify-between group"
                        >
                          <span>{link.label}</span>
                          <ChevronRight 
                            className="text-slate-400 group-hover:text-indigo-600 transition-colors" 
                            size={18} 
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="mt-12 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Fitur Tambahan</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Pencarian Global</p>
                    <p className="text-slate-700 text-sm">Gunakan kotak pencarian di navbar untuk menemukan halaman atau berita spesifik</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Menu Navigasi</p>
                    <p className="text-slate-700 text-sm">Gunakan menu di navbar untuk akses cepat ke halaman-halaman utama</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Footer Links</p>
                    <p className="text-slate-700 text-sm">Footer berisi tautan ke halaman informasi penting dan hubungi kami</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta Info */}
            <div className="mt-8 p-4 bg-slate-100 border border-slate-300 rounded-lg text-center">
              <p className="text-sm text-slate-700">
                <strong>Sitemap Terakhir Diperbarui:</strong> 3 Mei 2026
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Untuk melaporkan tautan yang rusak atau masalah navigasi, silakan <Link href="/" className="text-indigo-600 hover:text-indigo-700 underline">hubungi kami</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Related Help */}
        <div className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Butuh Bantuan?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/privacy" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
                <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Kebijakan Privasi</h4>
                <p className="text-sm text-slate-600">Pelajari cara kami melindungi data Anda</p>
              </Link>
              <Link href="/transparency" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
                <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Transparansi</h4>
                <p className="text-sm text-slate-600">Komitmen kami pada akuntabilitas publik</p>
              </Link>
              <Link href="/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
                <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Hubungi Kami</h4>
                <p className="text-sm text-slate-600">Hubungi customer service kami</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

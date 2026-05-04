import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import NewsHighlight from '@/components/NewsHighlight';
import Link from 'next/link';

const quickLinks = [
  {
    href: '/news',
    title: 'Warta & Berita',
    description: 'Baca ringkasan publikasi, siaran, dan berita terbaru satuan.',
  },
  {
    href: '/kegiatan',
    title: 'Kegiatan & Acara',
    description: 'Lihat agenda latihan, event, dan aktivitas yang sedang berlangsung.',
  },
  {
    href: '/gallery',
    title: 'Galeri Dokumentasi',
    description: 'Jelajahi dokumentasi visual agar cepat memahami momen penting.',
  },
  {
    href: '/structure',
    title: 'Struktur Pimpinan',
    description: 'Kenali susunan pimpinan supaya pengunjung tahu alur komando.',
  },
];

export const metadata = {
  title: 'Beranda - Batalyon Zeni Tempur 9 / Lang Lang Bhuwana',
  description:
    'Halaman utama portal informasi Batalyon Zeni Tempur 9 / Lang Lang Bhuwana. Akses berita, struktur pimpinan, dan galeri dokumentasi resmi.',
};

export default function Home() {
  return (
    <div className="page-content">
      <Navbar />
      <main>
        <HeroSection />

        <section className="bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto section-spacing py-10 md:py-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-700">
                  Mulai dari sini
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Jalur cepat untuk menemukan informasi yang dibutuhkan
                </h2>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  Pengunjung sering datang dengan tujuan yang berbeda. Tiga sampai empat pintu masuk utama ini membantu mereka langsung ke halaman yang tepat tanpa harus menebak.
                </p>
              </div>
              <Link
                href="/sitemap"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-950"
              >
                Lihat peta situs
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white transition group-hover:bg-indigo-950">
                    <span className="text-sm font-black">0{quickLinks.indexOf(item) + 1}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServicesSection />
        <NewsHighlight />
      </main>
      <Footer />
    </div>
  );
}

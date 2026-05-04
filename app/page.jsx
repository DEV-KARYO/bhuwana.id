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

        <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
          <div aria-hidden className="absolute -top-16 right-0 h-44 w-44 rounded-full bg-indigo-400/10 blur-3xl animate-float-gentle" />
          <div aria-hidden className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl animate-float-gentle [animation-delay:1.2s]" />

          <div className="container mx-auto section-spacing py-8 md:py-10 relative z-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-700">
                  Mulai dari sini
                </p>
                <h2 className="mt-2 text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Pintu utama untuk menemukan informasi
                </h2>
              </div>
              <Link
                href="/sitemap"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-950 hover:shadow-md whitespace-nowrap"
              >
                Peta situs →
              </Link>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 stagger-children">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group card-elevated hover-lift overflow-hidden rounded-2xl bg-white p-4"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white transition-all duration-300 group-hover:bg-indigo-950 group-hover:scale-105">
                    <span className="text-xs font-black">0{quickLinks.indexOf(item) + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-slate-500 line-clamp-2">
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

import Link from 'next/link';
import { ArrowLeft, BookOpen, CalendarDays, Download, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import PrintButton from '@/components/PrintButton';
import { magazineIssues } from '@/components/EMagazineSection';
import { newsData } from '@/lib/content';

export const metadata = {
  title: 'E-Magazine - Kabar Lang Lang Bhuwana',
  description:
    'Arsip E-Magazine digital yang merangkum sejarah singkat, komando aktif, dan sorotan kegiatan Batalyon Zeni Tempur 9 / Lang Lang Bhuwana.',
};

export default function MagazineArchivePage() {
  const featuredStories = newsData.slice(0, 6);

  return (
    <div className="page-content magazine-print-shell">
      <Navbar />

      <main>
        <section className="page-header bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 magazine-print-summary">
          <div className="container mx-auto section-spacing py-16 md:py-20">
            <div className="max-w-3xl">
              <Link href="/news" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-indigo-950 transition-colors mb-5 no-print">
                <ArrowLeft size={16} /> Kembali ke Warta
              </Link>
              <Badge variant="primary">Publikasi Digital</Badge>
              <h1 className="section-title editorial-title mt-4 mb-4">
                Arsip E-Magazine
              </h1>
              <p className="section-subtitle max-w-2xl">
                Kumpulan edisi digital yang menampilkan sejarah satuan, komando aktif, dan dokumentasi kegiatan utama dalam format yang lebih kuratorial.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section bg-slate-50">
          <div className="container mx-auto section-spacing">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-8 items-stretch mb-8">
              <div className="card-elevated p-6 md:p-8 lg:p-10 overflow-hidden relative magazine-print-cover">
                <div className="absolute -top-24 -right-16 w-64 h-64 rounded-full bg-indigo-50 blur-3xl opacity-80" aria-hidden />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-4">
                    <Sparkles size={14} /> Edisi Terbaru
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight max-w-2xl">
                    Jejak Pengabdian dan Pembinaan Satuan
                  </h2>
                  <p className="text-slate-500 mt-4 leading-relaxed max-w-2xl">
                    Edisi pembuka merangkum sejarah pembentukan, kepemimpinan aktif, dan sorotan kegiatan yang membentuk identitas publik satuan.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3 mt-8">
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Dibentuk</p>
                      <p className="font-black text-slate-900 mt-1">1 Maret 1962</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Komandan Aktif</p>
                      <p className="font-black text-slate-900 mt-1">Letkol Czi Martin Novence</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Format</p>
                      <p className="font-black text-slate-900 mt-1">Digital Interaktif</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6 md:p-8 lg:p-10 bg-indigo-950 text-white overflow-hidden relative magazine-print-dark">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.35),transparent_45%)]" aria-hidden />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-200 mb-4">
                    <BookOpen size={14} /> Sorotan Isi
                  </div>
                  <h2 className="text-2xl font-black">Isi yang Dapat Dibaca</h2>
                  <div className="space-y-4 mt-6">
                    {featuredStories.map((story) => (
                      <div key={story.id} className="rounded-2xl bg-white/10 border border-white/10 p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-200 mb-2">
                          {story.category}
                        </p>
                        <h3 className="font-bold leading-snug">{story.title}</h3>
                        <p className="text-sm text-slate-200 mt-1 line-clamp-2">{story.excerpt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

                <div className="mb-8 magazine-print-summary">
              <div className="flex items-center gap-2 mb-4 text-slate-500 font-bold uppercase tracking-[0.25em] text-xs">
                <CalendarDays size={14} className="text-indigo-600" /> Daftar Edisi
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {magazineIssues.map((issue) => (
                  <Link key={issue.edition} href={`/news/magazine/${issue.slug}`} className="block group">
                    <article className={`h-full rounded-3xl bg-gradient-to-br ${issue.accent} text-white p-6 shadow-lg magazine-print-issue magazine-print-gradient transition-transform duration-300 group-hover:-translate-y-1`}>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">{issue.edition}</p>
                          <h3 className="text-xl font-black mt-2 leading-snug">{issue.title}</h3>
                        </div>
                        <div className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-bold whitespace-nowrap">
                          {issue.period}
                        </div>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">{issue.summary}</p>
                      <div className="mt-5 flex items-center justify-between gap-4 text-sm font-bold text-white/90">
                        <span className="inline-flex items-center gap-2">
                          <Download size={14} /> Buka edisi
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.25em] text-white/60">{issue.releaseDate}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            <div className="card-base p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 magazine-print-summary">
              <div className="max-w-2xl">
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  Ingin E-Magazine versi penuh dengan sampul dan arsip unduhan?
                </h2>
                <p className="text-slate-500 mt-2 leading-relaxed">
                  Kita bisa lanjutkan ke versi berikutnya dengan halaman arsip per edisi, pratinjau sampul, dan tombol unduh PDF saat file siap.
                </p>
              </div>
              <div className="flex gap-3 no-print">
                <Link href="/news" className="inline-flex">
                  <Button variant="secondary">Kembali ke Warta</Button>
                </Link>
                <Link href="/gallery" className="inline-flex">
                  <Button>Lihat Dokumentasi</Button>
                </Link>
                <PrintButton />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
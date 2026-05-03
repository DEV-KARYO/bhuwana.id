import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpenText, CalendarDays, Download, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import PrintButton from '@/components/PrintButton';
import { magazineIssues } from '@/components/EMagazineSection';
import { newsData } from '@/lib/content';

export function generateStaticParams() {
  return magazineIssues.map((issue) => ({
    slug: issue.slug,
  }));
}

export function generateMetadata({ params }) {
  const issue = magazineIssues.find((item) => item.slug === params.slug);

  return {
    title: issue ? `${issue.title} - E-Magazine` : 'E-Magazine - Kabar Lang Lang Bhuwana',
    description: issue
      ? issue.summary
      : 'Detail E-Magazine digital Batalyon Zeni Tempur 9 / Lang Lang Bhuwana.',
  };
}

export default function MagazineIssuePage({ params }) {
  const issue = magazineIssues.find((item) => item.slug === params.slug);

  if (!issue) {
    notFound();
  }

  const featuredStories = newsData.slice(0, 4);

  return (
    <div className="page-content magazine-print-shell">
      <Navbar />

      <main>
        <section className="page-header bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 magazine-print-summary">
          <div className="container mx-auto section-spacing py-16 md:py-20">
            <div className="max-w-3xl">
              <Link href="/news/magazine" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-indigo-950 transition-colors mb-5 no-print">
                <ArrowLeft size={16} /> Kembali ke Arsip
              </Link>
              <Badge variant="primary">{issue.edition}</Badge>
              <h1 className="section-title editorial-title mt-4 mb-4">
                {issue.title}
              </h1>
              <p className="section-subtitle max-w-2xl">
                {issue.summary}
              </p>
            </div>
          </div>
        </section>

        <section className="page-section bg-slate-50">
          <div className="container mx-auto section-spacing">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 items-stretch mb-8">
              <article className="card-elevated p-6 md:p-8 lg:p-10 overflow-hidden relative magazine-print-cover">
                <div className="absolute -top-24 -right-16 w-64 h-64 rounded-full bg-indigo-50 blur-3xl opacity-80" aria-hidden />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-4">
                    <BookOpenText size={14} /> Edisi Lengkap
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight max-w-2xl">
                    Jejak Pengabdian dan Pembinaan Satuan
                  </h2>
                  <p className="text-slate-500 mt-4 leading-relaxed max-w-2xl">
                    Edisi ini dirancang sebagai tabloid digital singkat: sejarah, komando aktif, dan sorotan kegiatan utama ditata dalam satu narasi editorial yang siap dicetak.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3 mt-8">
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Periode</p>
                      <p className="font-black text-slate-900 mt-1">{issue.period}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Tanggal Rilis</p>
                      <p className="font-black text-slate-900 mt-1">{issue.releaseDate}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Format</p>
                      <p className="font-black text-slate-900 mt-1">PDF / Print</p>
                    </div>
                  </div>
                </div>
              </article>

              <aside className="card-elevated p-6 md:p-8 lg:p-10 bg-indigo-950 text-white overflow-hidden relative magazine-print-dark">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.35),transparent_45%)]" aria-hidden />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-200 mb-4">
                    <ShieldCheck size={14} /> Inti Edisi
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-slate-200">{issue.leadStory}</p>
                    {issue.editorNote && (
                      <div className="rounded-2xl bg-white/10 border border-white/10 p-4 mt-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-200 mb-2">Catatan Redaktur</p>
                        <p className="text-sm text-slate-200 leading-relaxed">{issue.editorNote}</p>
                      </div>
                    )}
                    <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-200 mb-2">Komandan Aktif</p>
                      <p className="font-bold">Letkol Czi Martin Novence, S.H., M.IP.</p>
                      <p className="text-sm text-slate-200 mt-1">Komandan Batalyon Zeni Tempur 9 / Lang Lang Bhuwana sejak Juli 2025.</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-200 mb-2">Rekomendasi Baca</p>
                      <p className="text-sm text-slate-200">Gunakan mode print browser untuk menyimpan layout ini sebagai PDF dengan proporsi yang menyerupai tabloid majalah digital.</p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="mb-8 magazine-print-summary">
              <div className="flex items-center gap-2 mb-4 text-slate-500 font-bold uppercase tracking-[0.25em] text-xs">
                <CalendarDays size={14} className="text-indigo-600" /> Poin Utama Edisi Ini
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {issue.keyHighlights?.map((highlight, idx) => (
                  <div key={idx} className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 magazine-print-issue">
                    <p className="text-sm font-bold text-indigo-950">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-slate-500 font-bold uppercase tracking-[0.25em] text-xs">
                <CalendarDays size={14} className="text-indigo-600" /> Sorotan Warta Dalam Edisi Ini
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {featuredStories.map((story) => (
                  <article key={story.id} className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 magazine-print-issue">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-500 mb-2">{story.category}</p>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{story.title}</h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">{story.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="card-base p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 magazine-print-summary">
              <div className="max-w-2xl">
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  Simpan edisi ini sebagai PDF.
                </h2>
                <p className="text-slate-500 mt-2 leading-relaxed">
                  Gunakan tombol cetak di browser untuk menyimpan tampilan edisi ini ke PDF dengan format yang lebih menyerupai majalah digital.
                </p>
              </div>
              <div className="flex gap-3 no-print">
                <Link href="/news/magazine" className="inline-flex">
                  <Button variant="secondary">Kembali ke Arsip</Button>
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
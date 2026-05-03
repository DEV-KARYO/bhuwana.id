import Link from 'next/link';
import { BookOpenText, CalendarDays, Download, Sparkles } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';
import { newsData } from '@/lib/content';

export const magazineIssues = [
  {
    slug: 'edisi-01-jejak-pengabdian',
    edition: 'Edisi 01',
    period: 'Mei 2026',
    title: 'Jejak Pengabdian dan Pembinaan Satuan',
    summary:
      'Ringkasan sejarah singkat, komando aktif, dan kegiatan pembinaan yang menegaskan identitas satuan.',
    releaseDate: '3 Mei 2026',
    leadStory:
      'Batalyon Zeni Tempur 9 / Lang Lang Bhuwana menegaskan identitas satuan melalui sejarah, komando aktif, dan dokumentasi kegiatan utama.',
    editorNote:
      'Edisi ini menghadirkan narasi pelembagaan nilai-nilai pengabdian melalui sejarah 64 tahun, kepemimpinan yang bernilai, dan dokumentasi kegiatan yang terukur. Dibaca sebagai profil identitas satuan yang responsif terhadap kebutuhan institusional dan masyarakat.',
    keyHighlights: [
      '64 Tahun Pengabdian (1962-2026)',
      'Komando Aktif Letkol Czi Martin Novence',
      'Struktur Organisasi dan Tim Kepemimpinan',
      'Kegiatan Pembinaan Internal',
    ],
    accent: 'from-indigo-950 via-indigo-900 to-slate-900',
  },
  {
    slug: 'edisi-02-kolaborasi-publik',
    edition: 'Edisi 02',
    period: 'April 2026',
    title: 'Laporan Kegiatan dan Kolaborasi Publik',
    summary:
      'Sorotan kegiatan sosial, latihan, dan kolaborasi publik yang memperluas jangkauan informasi satuan.',
    releaseDate: '18 April 2026',
    leadStory:
      'Laporan kurasi kegiatan sosial dan latihan memperlihatkan peran satuan dalam kolaborasi publik yang konsisten.',
    editorNote:
      'Edisi ini menampilkan resonansi nilai-nilai profesionalisme melalui kegiatan sosial, latihan operasional, dan kolaborasi dengan berbagai institusi. Menunjukkan komitmen satuan dalam memberikan dampak positif bagi masyarakat dan institusi yang lebih luas.',
    keyHighlights: [
      'Program Tanggungjawab Sosial Perusahaan (TSRP)',
      'Latihan Taktis dan Operasional',
      'Kemitraan Strategis dengan Institusi Lain',
      'Keterlibatan Komunitas',
    ],
    accent: 'from-slate-900 via-slate-800 to-indigo-950',
  },
  {
    slug: 'edisi-khusus-tonggak-kepemimpinan',
    edition: 'Edisi Khusus',
    period: 'Arsip 2025',
    title: 'Tonggak Kepemimpinan dan Dokumentasi Utama',
    summary:
      'Pilihan dokumentasi utama dari pergantian komando, latihan, dan momen institusional paling penting.',
    releaseDate: 'Dokumen arsip 2025',
    leadStory:
      'Edisi khusus menyoroti pergantian komando, latihan utama, dan momen dokumenter yang membentuk arsip digital satuan.',
    editorNote:
      'Edisi khusus ini menjadi rekam jejak institusional penting dari tahun 2025, mencakup transisi kepemimpinan, pencapaian operasional signifikan, dan momen-momen yang menandai perkembangan satuan menuju masa depan yang lebih kuat dan responsif.',
    keyHighlights: [
      'Serah Terima Komando Juli 2025',
      'Sosialisasi P4GN dan Program Kesehatan',
      'Latihan Taktis Tingkat Kompi - Palintang',
      'Dokumentasi Arsip Digital',
    ],
    accent: 'from-indigo-800 via-indigo-700 to-amber-500',
  },
];

export default function EMagazineSection() {
  const featuredStories = newsData.slice(0, 3);

  return (
    <section className="page-section bg-white">
      <div className="container mx-auto section-spacing">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8 items-stretch">
          <div className="card-elevated p-6 md:p-8 lg:p-10 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-50 blur-3xl opacity-80" aria-hidden />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <Badge variant="primary">Publikasi Digital</Badge>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
                    E-Magazine Bhuwana
                  </h2>
                  <p className="text-slate-500 mt-3 max-w-xl leading-relaxed">
                    Kumpulan edisi digital yang merangkum sejarah singkat, komando aktif, dan sorotan kegiatan satuan dalam format yang lebih kurasi.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600">
                  <Sparkles size={16} className="text-indigo-600" />
                  Edisi Terbaru
                </div>
              </div>

              <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
                <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 text-white p-6 md:p-8 shadow-xl relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.35),transparent_45%)]" aria-hidden />
                  <div className="relative z-10 flex h-full flex-col justify-between min-h-[22rem]">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-indigo-100 mb-6">
                        <BookOpenText size={14} /> Issue 01
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black leading-tight max-w-sm">
                        Jejak Pengabdian dan Pembinaan Satuan
                      </h3>
                      <p className="mt-4 text-slate-200 leading-relaxed max-w-sm">
                        Edisi digital yang menyajikan sejarah singkat, profil komandan aktif, dan dokumentasi kegiatan utama dalam narasi yang lebih elegan.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-200">Periode</p>
                        <p className="font-bold mt-1">Mei 2026</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-200">Format</p>
                        <p className="font-bold mt-1">Digital Interactive</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <h3 className="font-black text-slate-900 text-lg">Sorotan Isi Edisi Ini</h3>
                      <CalendarDays size={18} className="text-indigo-600" />
                    </div>
                    <div className="space-y-3">
                      {featuredStories.map((story) => (
                        <div key={story.id} className="rounded-2xl bg-white border border-slate-200 p-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-500 mb-2">
                            {story.category}
                          </p>
                          <h4 className="font-bold text-slate-900 leading-snug">{story.title}</h4>
                          <p className="text-slate-500 text-sm mt-1 line-clamp-2">{story.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl bg-indigo-950 text-white p-5 md:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-200 mb-3">Arah Isi</p>
                    <p className="text-sm leading-relaxed text-slate-200">
                      Format ini disiapkan untuk memudahkan pembaca menjelajahi sejarah, komando aktif, dan kegiatan utama satuan dalam satu tampilan kurasi.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link href="/structure" className="inline-flex">
                        <Button size="sm" className="!bg-white !text-indigo-950 hover:!bg-slate-100">
                          Profil Komandan
                        </Button>
                      </Link>
                      <Link href="/gallery" className="inline-flex">
                        <Button size="sm" variant="secondary" className="!bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
                          Lihat Dokumentasi
                        </Button>
                      </Link>
                      <Link href="/news/magazine" className="inline-flex">
                        <Button size="sm" variant="secondary" className="!bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
                          Arsip E-Magazine
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            {magazineIssues.map((issue) => (
              <Link key={issue.edition} href={`/news/magazine/${issue.slug}`} className="block group">
                <div className={`rounded-3xl bg-gradient-to-br ${issue.accent} text-white p-5 md:p-6 shadow-lg transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">{issue.edition}</p>
                      <h3 className="text-xl font-black mt-2 leading-snug group-hover:text-slate-100 transition-colors">{issue.title}</h3>
                    </div>
                    <div className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-bold whitespace-nowrap">
                      {issue.period}
                    </div>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{issue.summary}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                    <Download size={14} /> Buka edisi
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
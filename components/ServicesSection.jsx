import Link from 'next/link';
import { Users, Zap, Heart } from 'lucide-react';
import Badge from './Badge';
import { leadershipData } from '@/lib/content';

const profileHighlights = [
  {
    icon: Users,
    title: 'Kepemimpinan Terukur',
    description:
      'Struktur komando yang transparan dengan akuntabilitas tinggi di setiap level kepemimpinan.',
  },
  {
    icon: Zap,
    title: 'Operasional Profesional',
    description:
      'Kegiatan dan latihan berkelanjutan untuk menjaga kesiapan dan standar profesionalisme satuan.',
  },
  {
    icon: Heart,
    title: 'Komitmen Pengabdian',
    description:
      'Dedikasi terhadap tugas dan masyarakat dengan integritas sebagai fondasi utama.',
  },
];

const coreValues = [
  {
    year: '1962',
    title: 'Didirikan',
    description: 'Fondasi satuan dibangun atas nilai profesionalisme dan dedikasi pengabdian.',
  },
  {
    year: 'Komando',
    title: 'Transparansi',
    description: 'Komitmen terbuka dalam informasi dan akuntabilitas kepemimpinan kepada publik.',
  },
  {
    year: 'Hari Ini',
    title: 'Berkembang',
    description: 'Terus berinovasi dalam komunikasi, kegiatan, dan dokumentasi satuan.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="page-section bg-white relative">
      <div className="container mx-auto section-spacing">
        {/* Profile Highlights - compact layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 relative z-20 reveal-up">
          {profileHighlights.map((highlight, i) => {
            const Icon = highlight.icon;
            return (
              <div
                key={i}
                className="card-elevated p-4 md:p-6 hover-lift flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-slate-50 text-indigo-950 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-950 group-hover:text-white transition-colors duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-500 text-sm leading-snug">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Short Profile Section - compact spacing */}
        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-8 md:gap-12 items-start reveal-up-delayed">
          {/* Left Column - Text */}
          <div>
            <Badge variant="primary">Tentang Satuan</Badge>
            <h2 className="section-title mt-4 md:mt-6 mb-6 md:mb-8">
              Nilai dan Komitmen Organisasi
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-xl">
              Sebagai bagian dari Divisi Infanteri 1 / Kostrad, satuan kami berfokus pada pengembangan kapabilitas, transparansi publik, dan implementasi nilai-nilai kepemimpinan yang kokoh. Melalui portal ini, kami membagikan perjalanan, pencapaian, dan komitmen kami kepada masyarakat.
            </p>
            <div className="space-y-4">
              {coreValues.map((event, i) => (
                <div key={i} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="min-w-16 rounded-xl bg-indigo-950 px-3 py-2 text-center text-white">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-200">
                      Tahun
                    </div>
                    <div className="text-lg font-black leading-none mt-1">
                      {event.year}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{event.title}</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Portal Features */}
          <div className="relative">
            <div className="card-elevated p-6 md:p-8 lg:p-10 overflow-hidden relative">
              <div aria-hidden className="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-indigo-50 blur-3xl opacity-80" />
              <div className="relative z-10">
                <Badge variant="primary">Jelajahi Portal</Badge>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-4">
                  Akses Informasi Lengkap
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                  Platform kami menyediakan berbagai informasi untuk transparansi dan engagement dengan publik.
                </p>

                <div className="mt-6 space-y-3">
                  <Link href="/news" className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-all group">
                    <p className="text-xs font-bold uppercase text-slate-500 group-hover:text-indigo-700 mb-1">📰 Berita & Warta</p>
                    <p className="text-sm font-semibold text-slate-900">Kegiatan Terkini</p>
                  </Link>

                  <Link href="/structure" className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-all group">
                    <p className="text-xs font-bold uppercase text-slate-500 group-hover:text-indigo-700 mb-1">👥 Struktur Pimpinan</p>
                    <p className="text-sm font-semibold text-slate-900">Profil Komandan</p>
                  </Link>

                  <Link href="/gallery" className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-all group">
                    <p className="text-xs font-bold uppercase text-slate-500 group-hover:text-indigo-700 mb-1">📸 Galeri & Dokumentasi</p>
                    <p className="text-sm font-semibold text-slate-900">Visual Kegiatan</p>
                  </Link>

                  <Link href="/kegiatan" className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-all group">
                    <p className="text-xs font-bold uppercase text-slate-500 group-hover:text-indigo-700 mb-1">🎯 Kegiatan & Acara</p>
                    <p className="text-sm font-semibold text-slate-900">Jadwal Terkini</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

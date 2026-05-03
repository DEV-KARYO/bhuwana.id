import { CalendarDays, ShieldCheck, BadgeCheck } from 'lucide-react';
import Badge from './Badge';
import { leadershipData } from '@/lib/content';

const profileHighlights = [
  {
    icon: CalendarDays,
    title: 'Dibentuk 1962',
    description:
      'Batalyon Zeni Tempur 9 / Lang Lang Bhuwana berdiri pada 1 Maret 1962.',
  },
  {
    icon: ShieldCheck,
    title: 'Di Bawah Kostrad',
    description:
      'Satuan berada di bawah Divisi Infanteri 1 / Kostrad dengan tugas bantuan tempur zeni.',
  },
  {
    icon: BadgeCheck,
    title: 'Komandan Aktif',
    description:
      'Dipimpin oleh Letkol Czi Martin Novence, S.H., M.IP. sejak Juli 2025.',
  },
];

const timelineEvents = [
  {
    year: '1962',
    title: 'Pembentukan Satuan',
    description: 'Batalyon Zeni Tempur 9 / Lang Lang Bhuwana dibentuk pada 1 Maret 1962.',
  },
  {
    year: '1987',
    title: 'Reorganisasi Nama',
    description: 'Satuan menetapkan penamaan Batalyon Zeni Tempur 9 Divisi Infanteri 1 Kostrad.',
  },
  {
    year: '2025',
    title: 'Kepemimpinan Aktif',
    description: 'Letkol Czi Martin Novence, S.H., M.IP. menjabat sebagai komandan aktif.',
  },
];

export default function ServicesSection() {
  const currentCommander = leadershipData.find((leader) => leader.status === 'Current' && leader.position.includes('Komandan Batalyon'));

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
            <Badge variant="primary">Profil Singkat</Badge>
            <h2 className="section-title mt-4 md:mt-6 mb-6 md:mb-8">
              Sejarah Singkat dan Komandan Aktif
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-xl">
              Batalyon Zeni Tempur 9 / Lang Lang Bhuwana dibentuk pada 1 Maret 1962 dan berada di bawah Divisi Infanteri 1 / Kostrad. Satuan ini terus menjalankan tugas bantuan tempur zeni dengan dukungan kepemimpinan aktif yang menjaga kesinambungan organisasi.
            </p>
            <div className="space-y-4">
              {timelineEvents.map((event, i) => (
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

          {/* Right Column - Commander Profile */}
          <div className="relative">
            <div className="card-elevated p-6 md:p-8 lg:p-10 overflow-hidden relative">
              <div aria-hidden className="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-indigo-50 blur-3xl opacity-80" />
              <div className="relative z-10">
                <Badge variant="success">Komandan Aktif</Badge>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-4">
                  {currentCommander?.name || 'Letkol Czi Martin Novence, S.H., M.IP.'}
                </h3>
                <p className="text-indigo-700 font-bold uppercase tracking-[0.2em] text-xs mt-2">
                  {currentCommander?.position || 'Komandan Batalyon (Danyonzipur 9)'}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-1">Sejak</p>
                    <p className="font-bold text-slate-900">Juli 2025</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-1">Status</p>
                    <p className="font-bold text-slate-900">Aktif</p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-200 mb-2">Ringkasan Sejarah</p>
                  <p className="text-sm leading-relaxed text-slate-200">
                    Dari pembentukan pada 1962 hingga kepemimpinan aktif saat ini, satuan ini tetap menjaga profesionalisme, kesiapsiagaan, dan kesinambungan tradisi pengabdian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

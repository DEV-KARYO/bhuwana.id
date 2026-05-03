import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ShieldCheck, CalendarDays, BadgeCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Badge from '@/components/Badge';
import ContactForm from '@/components/ContactForm';
import { leadershipData } from '@/lib/content';

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

function LeaderMark({ leader }) {
  const initials = getInitials(leader.name);

  return (
    <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] bg-gradient-to-br from-indigo-100 via-white to-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shadow-lg shadow-indigo-950/5">
      <span className="text-2xl md:text-4xl font-black text-slate-400 tracking-tight">
        {initials}
      </span>
    </div>
  );
}

export function generateStaticParams() {
  return leadershipData.map((leader) => ({
    id: String(leader.id),
  }));
}

export function generateMetadata({ params }) {
  const leader = leadershipData.find((item) => String(item.id) === String(params.id));

  return {
    title: leader ? `${leader.name} - Pimpinan` : 'Pimpinan - Batalyon Zeni Tempur 9 / Lang Lang Bhuwana',
    description: leader
      ? `Profil pimpinan ${leader.name}, ${leader.position}.`
      : 'Profil pimpinan Batalyon Zeni Tempur 9 / Lang Lang Bhuwana.',
  };
}

export default function LeaderDetailPage({ params }) {
  const leader = leadershipData.find((item) => String(item.id) === String(params.id));

  if (!leader) {
    notFound();
  }

  const relatedLeaders = leadershipData.filter((item) => item.id !== leader.id && item.status === leader.status).slice(0, 3);

  return (
    <div className="page-content">
      <Navbar />

      <Breadcrumb
        items={[
          { label: 'Pimpinan', href: '/structure' },
          { label: leader.name },
        ]}
      />

      <div className="page-header bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto section-spacing py-16 md:py-20 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-indigo-50 blur-3xl opacity-80"></div>
            <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full bg-slate-100 blur-3xl opacity-80"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <Link href="/structure" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-indigo-900 transition-colors mb-6">
              <ArrowLeft size={16} /> Kembali ke struktur pimpinan
            </Link>

            <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-10 items-center">
              <LeaderMark leader={leader} />

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant={leader.status === 'Current' ? 'success' : 'warning'}>
                    {leader.status === 'Current' ? 'Aktif' : 'Riwayat'}
                  </Badge>
                  <Badge variant="primary">{leader.rank}</Badge>
                </div>
                <h1 className="section-title mb-4">
                  {leader.name}
                </h1>
                <p className="section-subtitle max-w-3xl">
                  {leader.position}
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">
                      Pangkat
                    </p>
                    <p className="font-bold text-slate-900">{leader.rank}</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">
                      Mulai Tugas
                    </p>
                    <p className="font-bold text-slate-900">{leader.tenure_start}</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">
                      Status
                    </p>
                    <p className="font-bold text-slate-900">{leader.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="page-section">
        <div className="container mx-auto section-spacing">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-start">
            <div className="card-elevated p-6 md:p-8 lg:p-10">
              <Badge variant="primary">Profil Singkat</Badge>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
                Ringkasan Peran
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {leader.bio}
                </p>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  Struktur kepemimpinan satuan menempatkan peran ini sebagai bagian penting dari kesinambungan komando, pembinaan personel, dan pelaksanaan tugas operasional.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-2">
                    <CalendarDays size={14} /> Masa Jabatan
                  </div>
                  <p className="font-bold text-slate-900">{leader.tenure_start}{leader.tenure_end ? ` - ${leader.tenure_end}` : ''}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-2">
                    <BadgeCheck size={14} /> Status
                  </div>
                  <p className="font-bold text-slate-900">{leader.status === 'Current' ? 'Sedang menjabat' : 'Masa sebelumnya'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ContactForm 
                recipientName={leader.name}
                recipientRole={leader.position}
              />

              <div className="card-elevated p-6 md:p-8">
                <h3 className="font-black text-slate-900 text-xl mb-4">Pimpinan Terkait</h3>
                <div className="space-y-3">
                  {relatedLeaders.map((item) => (
                    <Link key={item.id} href={`/structure/${item.id}`} className="block rounded-2xl border border-slate-200 p-4 hover:border-indigo-300 hover:bg-slate-50 transition-all">
                      <p className="font-bold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500 mt-1">{item.position}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
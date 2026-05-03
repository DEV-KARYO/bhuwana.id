import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  ExternalLink,
  Phone,
  ShieldCheck,
  ChevronRight,
  Users,
  Award,
  Search,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/Badge';
import { leadershipData } from '@/lib/content';

const currentLeadership = leadershipData.filter((leader) => leader.status === 'Current');
const previousLeadership = leadershipData.filter((leader) => leader.status === 'Previous');
const commander = leadershipData.find((leader) => leader.position.includes('Komandan Batalyon'));
const availableRanks = [...new Set(leadershipData.map((leader) => leader.rank).filter(Boolean))];

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

function LeaderAvatar({ leader, large = false }) {
  const initials = getInitials(leader.name);

  return (
    <div
      className={`${large ? 'w-32 h-32 md:w-40 md:h-40' : 'w-24 h-24 md:w-28 md:h-28'} rounded-full mx-auto flex items-center justify-center border-4 border-white shadow-inner overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-slate-100`}
    >
      {leader.image ? (
        <Image
          src={leader.image}
          alt={leader.name}
          width={large ? 160 : 112}
          height={large ? 160 : 112}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-300">
          <span className={`${large ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-black text-slate-400 tracking-tight`}>
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}

function buildFilterHref(searchParams, updates) {
  const nextParams = new URLSearchParams();
  const currentQuery = typeof searchParams.q === 'string' ? searchParams.q : '';
  const currentStatus = typeof searchParams.status === 'string' ? searchParams.status : 'all';
  const currentRank = typeof searchParams.rank === 'string' ? searchParams.rank : 'all';

  const merged = {
    q: currentQuery,
    status: currentStatus,
    rank: currentRank,
    ...updates,
  };

  Object.entries(merged).forEach(([key, value]) => {
    if (value && value !== 'all') {
      nextParams.set(key, value);
    }
  });

  const query = nextParams.toString();
  return query ? `/structure?${query}` : '/structure';
}

function filterLeadership(items, query, status, rank) {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((leader) => {
    const matchesQuery =
      !normalizedQuery ||
      [leader.name, leader.position, leader.rank, leader.bio]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(normalizedQuery));

    const matchesStatus = status === 'all' || leader.status === status;
    const matchesRank = rank === 'all' || leader.rank === rank;

    return matchesQuery && matchesStatus && matchesRank;
  });
}

export const metadata = {
  title: 'Pimpinan - Lang Lang Bhuwana Portal',
  description: 'Struktur kepemimpinan dan jajaran pimpinan Batalion Lang Lang Bhuwana.',
};

export default function StructurePage({ searchParams = {} }) {
  const query = typeof searchParams.q === 'string' ? searchParams.q : '';
  const status = typeof searchParams.status === 'string' ? searchParams.status : 'all';
  const rank = typeof searchParams.rank === 'string' ? searchParams.rank : 'all';

  const filteredLeadership = filterLeadership(leadershipData, query, status, rank);
  const filteredCurrentLeadership = filteredLeadership.filter((leader) => leader.status === 'Current');
  const filteredPreviousLeadership = filteredLeadership.filter((leader) => leader.status === 'Previous');
  const filteredCommander = filteredLeadership.find((leader) => leader.position.includes('Komandan Batalyon')) || commander;

  const stats = {
    total: leadershipData.length,
    active: currentLeadership.length,
    history: previousLeadership.length,
    filtered: filteredLeadership.length,
  };

  return (
    <div className="page-content">
      <Navbar />

      <div className="page-header bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto section-spacing py-16 md:py-20 lg:py-24 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-50 blur-3xl opacity-80"></div>
            <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-slate-100 blur-3xl opacity-70"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
            <div className="max-w-2xl">
              <Badge variant="primary">Kepemimpinan Satuan</Badge>
              <h1 className="section-title mt-4 mb-5">
                Pimpinan Batalion
              </h1>
              <p className="section-subtitle max-w-xl">
                Mengenal struktur pimpinan Lang Lang Bhuwana, mulai dari komandan batalion hingga jajaran komandan kompi yang menggerakkan operasi harian satuan.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-1">
                    Total Pimpinan
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    {stats.total}
                  </div>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-indigo-950 text-white shadow-lg shadow-indigo-950/10">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-200 mb-1">
                    Aktif
                  </div>
                  <div className="text-2xl font-black">
                    {stats.active}
                  </div>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300 mb-1">
                    Riwayat Komando
                  </div>
                  <div className="text-2xl font-black">
                    {stats.history}
                  </div>
                </div>
              </div>
            </div>

            {filteredCommander && (
              <div className="card-elevated p-6 md:p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-indigo-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <Badge variant="success">Komandan Saat Ini</Badge>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      <ShieldCheck size={14} /> Danyonzipur 9
                    </div>
                  </div>

                  <LeaderAvatar leader={filteredCommander} large />

                  <div className="text-center mt-6">
                    <h2 className="text-xl md:text-2xl font-black text-slate-900">
                      {filteredCommander.name}
                    </h2>
                    <p className="mt-2 text-indigo-700 font-bold text-sm uppercase tracking-[0.2em]">
                      {filteredCommander.position}
                    </p>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {filteredCommander.bio}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">
                        Pangkat
                      </p>
                      <p className="font-bold text-slate-900">{filteredCommander.rank}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">
                        Masa Jabatan
                      </p>
                      <p className="font-bold text-slate-900">{filteredCommander.tenure_start}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-6">
                    {filteredCommander.email && (
                      <a
                        href={`mailto:${filteredCommander.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-950 text-white font-bold text-sm hover:bg-indigo-900 transition-colors"
                      >
                        <Mail size={16} /> Email
                      </a>
                    )}
                    {filteredCommander.phone && (
                      <a
                        href={`tel:${filteredCommander.phone}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-700 border border-slate-200 font-bold text-sm hover:bg-slate-50 transition-colors"
                      >
                        <Phone size={16} /> Telepon
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="page-section">
        <div className="container mx-auto section-spacing">
          <div className="card-elevated p-6 md:p-8 mb-8 md:mb-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <Badge variant="primary">Pencarian Pimpinan</Badge>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 tracking-tight">
                  Cari dan saring jajaran pimpinan
                </h2>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  Gunakan pencarian berdasarkan nama, jabatan, atau pangkat untuk melihat struktur pimpinan yang relevan.
                </p>
              </div>

              <form className="w-full lg:max-w-xl" action="/structure" method="get">
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    name="q"
                    defaultValue={query}
                    placeholder="Cari nama, jabatan, atau pangkat..."
                    className="input-base pl-11 bg-white"
                    aria-label="Cari pimpinan"
                  />
                </div>
                <input type="hidden" name="status" value={status} />
                <input type="hidden" name="rank" value={rank} />
              </form>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { label: 'Semua', key: 'all' },
                { label: 'Aktif', key: 'Current' },
                { label: 'Riwayat', key: 'Previous' },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={buildFilterHref(searchParams, { status: item.key })}
                  className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                    status === item.key
                      ? 'bg-indigo-950 text-white border-indigo-950'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {['all', ...availableRanks].map((itemRank) => (
                <Link
                  key={itemRank}
                  href={buildFilterHref(searchParams, { rank: itemRank })}
                  className={`px-3 py-2 rounded-xl text-xs md:text-sm font-bold border transition-all ${
                    rank === itemRank
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {itemRank === 'all' ? 'Semua Pangkat' : itemRank}
                </Link>
              ))}
            </div>

            {(query || status !== 'all' || rank !== 'all') && (
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="text-sm text-slate-500">
                  Menampilkan <span className="font-bold text-slate-700">{stats.filtered}</span> pimpinan sesuai filter.
                </div>
                    <div
                  href="/structure"
                      className="card-elevated p-6 md:p-10 flex flex-col h-full hover:border-indigo-600 transition-all"
                >
                  Reset filter
                </Link>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-12 items-start mb-16 md:mb-20">
            <div className="card-elevated p-6 md:p-8 lg:p-10">
              <Badge variant="primary">Struktur Organisasi</Badge>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
                Kepemimpinan Bertingkat
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Struktur pimpinan dirancang berlapis agar komando, koordinasi, dan pengambilan keputusan berlangsung cepat serta tetap akuntabel di setiap unsur satuan.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950 text-white flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Komandan Batalion</h4>
                    <p className="text-slate-500 text-sm mt-1">Pemimpin utama yang mengarahkan kebijakan, kesiapan, dan operasi satuan.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Komandan Kompi</h4>
                    <p className="text-slate-500 text-sm mt-1">Memimpin unsur pelaksana di tingkat kompi untuk menjaga kedisiplinan dan efektivitas kerja.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Pembinaan dan Tradisi</h4>
                    <p className="text-slate-500 text-sm mt-1">Membangun karakter, soliditas, dan kesinambungan kepemimpinan melalui keteladanan.</p>
                  </div>
                </div>
                      <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                          Profil Lengkap
                        </p>
                        <Link
                          href={`/structure/${leader.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-indigo-950 transition-colors"
                        >
                          Lihat Profil
                          <ExternalLink size={16} />
                        </Link>
                      </div>
            <div className="card-elevated p-6 md:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
                <div>
                  <Badge variant="primary">Jejaring Pimpinan</Badge>
                  <h3 className="font-black text-slate-900 mt-4 text-xl md:text-2xl">
                    Jajaran Pimpinan Aktif
                  </h3>
                </div>
                <p className="text-sm text-slate-500 max-w-xs">
                  Kartu berikut menampilkan pimpinan yang sedang aktif beserta pangkat dan masa jabatan singkat.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {filteredCurrentLeadership.map((leader) => (
                  <Link
                    key={leader.id}
                    href={`/structure/${leader.id}`}
                    className="group rounded-3xl border border-slate-200 bg-white p-5 md:p-6 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-950/5 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-slate-100 flex items-center justify-center shrink-0 border border-slate-100">
                        <span className="text-sm font-black text-slate-500 tracking-tight">
                          {getInitials(leader.name)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <Badge variant="success">Aktif</Badge>
                        <h4 className="font-black text-slate-900 mt-2 leading-tight">
                          {leader.name}
                        </h4>
                        <p className="text-sm text-indigo-700 font-bold mt-1 uppercase tracking-wide">
                          {leader.position}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed mt-4">
                      {leader.bio}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                      <div className="rounded-2xl bg-slate-50 p-3">
                        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">Pangkat</p>
                        <p className="font-bold text-slate-900">{leader.rank}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-3">
                        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">Sejak</p>
                        <p className="font-bold text-slate-900">{leader.tenure_start}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                        {leader.status === 'Current' ? 'Sedang menjabat' : 'Masa lalu'}
                      </p>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-indigo-700 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16 md:mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <Badge variant="primary">Riwayat Komando</Badge>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 tracking-tight">
                  Pergantian Kepemimpinan
                </h2>
              </div>
              <p className="text-slate-500 max-w-2xl">
                Garis waktu berikut memperlihatkan kesinambungan komando dan transisi kepemimpinan pada level batalion.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredPreviousLeadership
                .filter((leader) => leader.position.includes('Komandan Batalion'))
                .map((leader, index) => (
                  <Link key={leader.id} href={`/structure/${leader.id}`} className="card-elevated p-6 md:p-8 relative overflow-hidden block hover:border-indigo-300 transition-all">
                    <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-600 via-indigo-300 to-transparent"></div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex-center ${index === 0 ? 'bg-indigo-950 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <span className="font-black">{index + 1}</span>
                      </div>
                      <div>
                        <Badge variant={leader.status === 'Current' ? 'success' : 'warning'}>
                          {leader.status === 'Current' ? 'Saat Ini' : 'Sebelumnya'}
                        </Badge>
                        <h3 className="font-black text-slate-900 mt-2 text-lg md:text-xl">
                          {leader.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-indigo-700 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                      {leader.position}
                    </p>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-2 rounded-full bg-slate-50 border border-slate-200 font-bold text-slate-700">
                        Mulai: {leader.tenure_start}
                      </span>
                      {leader.tenure_end && (
                        <span className="px-3 py-2 rounded-full bg-slate-50 border border-slate-200 font-bold text-slate-700">
                          Selesai: {leader.tenure_end}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <div className="news-grid mb-16 md:mb-20">
            {filteredLeadership.map((leader) => (
              <Link
                key={leader.id}
                href={`/structure/${leader.id}`}
                className="card-elevated p-6 md:p-10 flex flex-col h-full hover:border-indigo-600 transition-all"
              >
                <LeaderAvatar leader={leader} />

                {/* Name */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 text-center">
                  {leader.name}
                </h3>

                {/* Position */}
                <p className="text-indigo-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-6 text-center">
                  {leader.position}
                </p>

                <div className="flex items-center justify-center gap-2 flex-wrap mb-5">
                  <Badge variant={leader.status === 'Current' ? 'success' : 'warning'}>
                    {leader.status === 'Current' ? 'Aktif' : 'Sebelumnya'}
                  </Badge>
                  {leader.rank && <Badge variant="default">{leader.rank}</Badge>}
                </div>

                {/* Bio */}
                <p className="text-slate-500 text-sm leading-relaxed mb-auto pb-6 flex-grow">
                  {leader.bio}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Mulai</p>
                    <p className="font-bold text-slate-900">{leader.tenure_start}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Akhir</p>
                    <p className="font-bold text-slate-900">{leader.tenure_end || 'Berlanjut'}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100"></div>

                {/* Contact Links */}
                <div className="flex justify-center gap-3 mt-6">
                  {leader.email ? (
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-10 h-10 bg-slate-50 rounded-xl flex-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                  ) : null}
                  {leader.phone ? (
                    <a
                      href={`tel:${leader.phone}`}
                      className="w-10 h-10 bg-slate-50 rounded-xl flex-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                      title="Telepon"
                    >
                      <Phone size={18} />
                    </a>
                  ) : null}
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300" title="Informasi Lanjut">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredLeadership.length === 0 && (
            <div className="card-base text-center py-16">
              <div className="text-6xl mb-4">🔎</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Tidak ada pimpinan yang cocok
              </h3>
              <p className="text-slate-500">
                Coba ubah kata kunci, status, atau pangkat untuk melihat hasil lain.
              </p>
            </div>
          )}

          {/* Organization Info */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left */}
            <div>
              <Badge variant="primary">Struktur Organisasi</Badge>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
                Kepemimpinan Bertingkat
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Batalion Lang Lang Bhuwana memiliki struktur kepemimpinan yang
                jelas dan profesional, dengan divisi tugas yang efisien untuk
                memastikan operasional yang optimal.
              </p>
              <div className="list-spaced">
                {[
                  {
                    title: 'Komandan Batalion',
                    desc: 'Pemimpin utama bertanggung jawab atas seluruh operasional',
                  },
                  {
                    title: 'Wakil Komandan',
                    desc: 'Membantu dan menggantikan komandan dalam tugas-tugas strategis',
                  },
                  {
                    title: 'Kepala Staf Operasional',
                    desc: 'Mengelola perencanaan dan koordinasi antar unit kerja',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Organizational Chart Visualization */}
            <div className="card-elevated p-6 md:p-10">
              <h3 className="font-bold text-slate-900 mb-8 text-lg">
                Hierarki Struktural
              </h3>

              <div className="space-y-6">
                {/* Top Level */}
                <div className="flex justify-center">
                  <div className="bg-indigo-950 text-white px-4 md:px-6 py-3 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap">
                    Komandan Batalion
                  </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-slate-300"></div>
                </div>

                {/* Second Level */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                  <div className="bg-indigo-100 text-indigo-950 px-4 py-2 rounded-xl font-bold text-xs border border-indigo-200 whitespace-nowrap">
                    Wakil Komandan
                  </div>
                  <div className="bg-indigo-100 text-indigo-950 px-4 py-2 rounded-xl font-bold text-xs border border-indigo-200 whitespace-nowrap">
                    Kepala Staf
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {currentLeadership
                    .filter((leader) => leader.position !== 'Komandan Batalyon (Danyonzipur 9)')
                    .slice(0, 4)
                    .map((leader) => (
                      <div key={leader.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-2">
                          {leader.rank}
                        </p>
                        <h4 className="font-bold text-slate-900 leading-snug">
                          {leader.name}
                        </h4>
                        <p className="text-sm text-slate-500 mt-1">
                          {leader.position}
                        </p>
                      </div>
                    ))}
                </div>

                {/* Message */}
                <div className="text-center text-slate-500 text-xs italic mt-8 pt-8 border-t border-slate-200">
                  Struktur lengkap tersedia di laporan organisasi resmi dan pembaruan internal satuan
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

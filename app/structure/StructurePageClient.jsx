'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Award, ChevronRight, Search, ShieldCheck, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Badge from '@/components/Badge';
import LeaderAvatar from '@/components/LeaderAvatar';
import { leadershipData } from '@/lib/content';

const currentLeadership = leadershipData.filter((leader) => leader.status === 'Current');
const previousLeadership = leadershipData.filter((leader) => leader.status === 'Previous');
const commander = leadershipData.find((leader) => leader.position.includes('Komandan Batalyon'));
const availableRanks = [...new Set(leadershipData.map((leader) => leader.rank).filter(Boolean))];

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

function LeaderCard({ leader }) {
  return (
    <Link
      href={`/structure/${leader.id}`}
      className="group rounded-3xl border border-slate-200 bg-white p-5 md:p-6 transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5"
    >
      <div className="flex items-start gap-4">
        <LeaderAvatar leader={leader} size="sm" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <Badge variant={leader.status === 'Current' ? 'success' : 'warning'}>
              {leader.status === 'Current' ? 'Aktif' : 'Riwayat'}
            </Badge>
            <ChevronRight size={16} className="text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-indigo-700" />
          </div>
          <h3 className="mt-3 font-black text-slate-900 leading-tight">
            {leader.name}
          </h3>
          <p className="mt-1 text-sm font-bold uppercase tracking-wide text-indigo-700">
            {leader.position}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            {leader.bio}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Pangkat</p>
          <p className="font-bold text-slate-900">{leader.rank}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Sejak</p>
          <p className="font-bold text-slate-900">{leader.tenure_start}</p>
        </div>
      </div>
    </Link>
  );
}

export default function StructurePageClient() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [rank, setRank] = useState('all');

  const filteredLeadership = useMemo(
    () => filterLeadership(leadershipData, query, status, rank),
    [query, status, rank]
  );

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
      <Breadcrumb items={[{ label: 'Struktur Pimpinan', href: '/structure' }]} />

      <div className="page-header bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto section-spacing py-14 md:py-20 lg:py-24 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-50 blur-3xl opacity-80" />
            <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-slate-100 blur-3xl opacity-70" />
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 items-start">
            <div className="max-w-2xl">
              <Badge variant="primary">Kepemimpinan Satuan</Badge>
              <h1 className="section-title mt-4 mb-5">
                Struktur Pimpinan yang Lebih Jelas
              </h1>
              <p className="section-subtitle max-w-xl">
                Halaman ini dirapikan agar pengunjung bisa langsung memahami siapa yang memimpin, siapa yang aktif, dan bagaimana susunan komando satuan tersusun tanpa pengulangan yang membingungkan.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Total</div>
                  <div className="mt-1 text-2xl font-black text-slate-900">{stats.total}</div>
                </div>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-950 px-4 py-3 text-white shadow-lg shadow-indigo-950/10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-200">Aktif</div>
                  <div className="mt-1 text-2xl font-black">{stats.active}</div>
                </div>
                <div className="rounded-2xl border border-slate-900 bg-slate-900 px-4 py-3 text-white shadow-lg shadow-slate-900/10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-300">Riwayat</div>
                  <div className="mt-1 text-2xl font-black">{stats.history}</div>
                </div>
              </div>
            </div>

            {filteredCommander && (
              <div className="card-elevated p-6 md:p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-indigo-50" />
                <div className="relative z-10 text-center">
                  <Badge variant="success">Komandan Saat Ini</Badge>
                  <div className="mt-5 flex justify-center">
                    <LeaderAvatar leader={filteredCommander} size="lg" />
                  </div>
                  <h2 className="mt-6 text-xl md:text-2xl font-black text-slate-900">
                    {filteredCommander.name}
                  </h2>
                  <p className="mt-2 text-indigo-700 font-bold text-sm uppercase tracking-[0.2em]">
                    {filteredCommander.position}
                  </p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    {filteredCommander.bio}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">Pangkat</p>
                      <p className="font-bold text-slate-900">{filteredCommander.rank}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-1">Masa Jabatan</p>
                      <p className="font-bold text-slate-900">{filteredCommander.tenure_start}</p>
                    </div>
                  </div>

                  <Link
                    href={`/structure/${filteredCommander.id}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-900"
                  >
                    <ShieldCheck size={16} /> Lihat Profil Lengkap
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="page-section">
        <div className="container mx-auto section-spacing">
          <div className="card-elevated p-6 md:p-8 mb-8 md:mb-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <Badge variant="primary">Pencarian Pimpinan</Badge>
                <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Cari, saring, lalu fokus ke tokoh yang dibutuhkan
                </h2>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  Pencarian nama, jabatan, dan pangkat disusun di satu tempat supaya pengunjung tidak perlu membuka blok yang sama berulang kali.
                </p>
              </div>

              <div className="w-full lg:max-w-xl">
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Cari nama, jabatan, atau pangkat..."
                    className="input-base pl-11 bg-white"
                    aria-label="Cari pimpinan"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: 'Semua', key: 'all' },
                { label: 'Aktif', key: 'Current' },
                { label: 'Riwayat', key: 'Previous' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => setStatus(item.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                    status === item.key
                      ? 'border-indigo-950 bg-indigo-950 text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['all', ...availableRanks].map((itemRank) => (
                <button
                  type="button"
                  key={itemRank}
                  onClick={() => setRank(itemRank)}
                  className={`rounded-xl border px-3 py-2 text-xs md:text-sm font-bold transition-all ${
                    rank === itemRank
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {itemRank === 'all' ? 'Semua Pangkat' : itemRank}
                </button>
              ))}
            </div>

            {(query || status !== 'all' || rank !== 'all') && (
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-slate-500">
                  Menampilkan <span className="font-bold text-slate-700">{stats.filtered}</span> pimpinan sesuai filter.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setStatus('all');
                    setRank('all');
                  }}
                  className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition-colors"
                >
                  Reset filter
                </button>
              </div>
            )}
          </div>

          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start mb-12 md:mb-16">
            <div className="card-elevated p-6 md:p-8 lg:p-10">
              <Badge variant="primary">Struktur Organisasi</Badge>
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Susunan komando dalam tiga lapis yang mudah dipahami
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Bagian ini merangkum fungsi utama komando agar pembaca langsung menangkap konteks organisasi tanpa membaca pengulangan pada beberapa blok yang berbeda.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-950 text-white">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Komandan Batalyon</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">Pemimpin utama yang mengarahkan kebijakan, kesiapan, dan arah operasi satuan.</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Komandan Kompi</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">Memimpin unsur pelaksana agar koordinasi, disiplin, dan efektivitas tetap terjaga.</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Pembinaan dan Tradisi</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">Membangun karakter, soliditas, dan kesinambungan kepemimpinan melalui keteladanan.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6 md:p-8 lg:p-10">
              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  <Badge variant="primary">Jajaran Aktif</Badge>
                  <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Pimpinan yang sedang menjabat
                  </h2>
                </div>
                <p className="max-w-xs text-sm text-slate-500">
                  Kartu pimpinan aktif disajikan satu per satu agar tidak bercampur dengan riwayat komando.
                </p>
              </div>

              {filteredCurrentLeadership.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2">
                  {filteredCurrentLeadership.map((leader) => (
                    <LeaderCard key={leader.id} leader={leader} />
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-500">
                  Tidak ada pimpinan aktif yang cocok dengan filter saat ini.
                </div>
              )}
            </div>
          </section>

          <section className="card-elevated p-6 md:p-8 lg:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-6 md:mb-8">
              <div>
                <Badge variant="primary">Riwayat Komando</Badge>
                <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Jejak pimpinan sebelumnya
                </h2>
              </div>
              <p className="max-w-xl text-sm text-slate-500 leading-relaxed">
                Riwayat komando ditampilkan terpisah dari pimpinan aktif sehingga pengunjung bisa membedakan masa jabatan dengan cepat.
              </p>
            </div>

            {filteredPreviousLeadership.length > 0 ? (
              <div className="grid gap-4">
                {filteredPreviousLeadership.map((leader) => (
                  <Link
                    key={leader.id}
                    href={`/structure/${leader.id}`}
                    className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 md:p-6 transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-950/5 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <LeaderAvatar leader={leader} size="sm" />
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="warning">Riwayat</Badge>
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            {leader.tenure_start}{leader.tenure_end ? ` - ${leader.tenure_end}` : ''}
                          </span>
                        </div>
                        <h3 className="mt-3 font-black text-slate-900 leading-tight">{leader.name}</h3>
                        <p className="mt-1 text-sm font-bold uppercase tracking-wide text-indigo-700">{leader.position}</p>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">{leader.bio}</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="hidden text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-indigo-700 md:block" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-500">
                Tidak ada riwayat komando yang cocok dengan filter saat ini.
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Users,
  Award,
  Search,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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

export default function StructurePageClient() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [rank, setRank] = useState('all');

  const filteredLeadership = useMemo(
    () => filterLeadership(leadershipData, query, status, rank),
    [query, status, rank]
  );
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
      <Breadcrumb
        items={[
          { label: 'Struktur Pimpinan', href: '/structure' },
        ]}
      />

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
                Pimpinan Batalyon
              </h1>
              <p className="section-subtitle max-w-xl">
                Mengenal struktur pimpinan Batalyon Zeni Tempur 9 / Lang Lang Bhuwana, mulai dari komandan batalyon hingga jajaran komandan kompi yang menggerakkan operasi harian satuan.
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
                      <ShieldCheck size={14} /> Danyonzipur 9 / LLB
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
                    <Link
                      href={`/structure/${filteredCommander.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-950 text-white font-bold text-sm hover:bg-indigo-900 transition-colors"
                    >
                      <ExternalLink size={16} /> Hubungi
                    </Link>
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

              <div className="w-full lg:max-w-xl">
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Cari nama, jabatan, atau pangkat..."
                    className="input-base pl-11 bg-white"
                    aria-label="Cari pimpinan"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { label: 'Semua', key: 'all' },
                { label: 'Aktif', key: 'Current' },
                { label: 'Riwayat', key: 'Previous' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => setStatus(item.key)}
                  className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                    status === item.key
                      ? 'bg-indigo-950 text-white border-indigo-950'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {['all', ...availableRanks].map((itemRank) => (
                <button
                  type="button"
                  key={itemRank}
                  onClick={() => setRank(itemRank)}
                  className={`px-3 py-2 rounded-xl text-xs md:text-sm font-bold border transition-all ${
                    rank === itemRank
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {itemRank === 'all' ? 'Semua Pangkat' : itemRank}
                </button>
              ))}
            </div>

            {(query || status !== 'all' || rank !== 'all') && (
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="text-sm text-slate-500">
                  Menampilkan <span className="font-bold text-slate-700">{stats.filtered}</span> pimpinan sesuai filter.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setStatus('all');
                    setRank('all');
                  }}
                  className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition-colors"
                >
                  Reset filter
                </button>
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
                    <h4 className="font-bold text-slate-900">Komandan Batalyon</h4>
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
              </div>
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
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

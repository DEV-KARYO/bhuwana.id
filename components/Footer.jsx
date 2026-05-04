import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const social = [
    { href: 'https://twitter.com/langlangbhuwana', label: 'Twitter', target: '_blank' },
    { href: 'https://facebook.com/langlangbhuwana', label: 'Facebook', target: '_blank' },
    { href: 'https://instagram.com/langlangbhuwana', label: 'Instagram', target: '_blank' },
  ];

  const infoLinks = [
    { label: 'Laporan Publik', href: '/public-report' },
    { label: 'Kebijakan Privasi', href: '/privacy' },
    { label: 'Transparansi', href: '/transparency' },
    { label: 'Karir & Penerimaan', href: '/career' },
  ];

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Warta & Pengumuman', href: '/news' },
    { label: 'Struktur Pimpinan', href: '/structure' },
    { label: 'Galeri Dokumentasi', href: '/gallery' },
  ];

  return (
    <footer className="footer-compact relative overflow-hidden" role="contentinfo">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
      <div aria-hidden className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="footer-container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr_0.95fr] mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="footer-brand items-start sm:items-center">
              <div className="w-11 h-11 shrink-0 bg-gradient-to-br from-white to-slate-200 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-950/20 ring-1 ring-white/10">
                <ShieldCheck className="text-indigo-950" size={22} />
              </div>
              <div className="space-y-1">
                <span className="block text-base sm:text-lg font-black tracking-tight leading-tight">BATALYON ZENI TEMPUR 9</span>
                <div className="text-[11px] sm:text-xs font-bold tracking-[0.3em] text-indigo-300 uppercase">Lang Lang Bhuwana</div>
              </div>
            </div>

            <p className="footer-muted max-w-md">Portal resmi Batalyon Zeni Tempur 9 / Lang Lang Bhuwana untuk berita, layanan publik, dan informasi kelembagaan yang ringkas serta mudah diakses.</p>

            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Resmi</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Ringkas</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Terhubung</span>
            </div>

            <div className="flex flex-wrap gap-3" role="list">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.target}
                  rel="noopener noreferrer"
                  role="listitem"
                  aria-label={`Tautan sosial ${s.label}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-indigo-500/15 hover:text-white focus-ring-sm"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] font-black uppercase text-white/90" aria-hidden>
                    {s.label.slice(0, 1)}
                  </span>
                  <span>{s.label}</span>
                  <ArrowUpRight size={12} className="opacity-70" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation" className="space-y-4">
            <h4 className="font-bold text-base">Navigasi</h4>
            <ul className="grid gap-2 text-sm font-medium text-slate-300 sm:grid-cols-2 lg:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href} className="group flex items-center rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 transition-colors hover:border-white/10 hover:bg-white/[0.05]">
                  <ChevronRight size={14} className="mr-2 shrink-0 text-indigo-300 transition-transform group-hover:translate-x-0.5" />
                  <Link href={link.href} className="footer-link flex-1 rounded px-1 py-0.5 hover:text-white focus-ring-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Informasi */}
          <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 md:p-5">
            <h4 className="font-bold text-base">Informasi & Kontak</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-300">
              {infoLinks.map((link) => (
                <li key={link.label} className="group flex items-center rounded-xl px-0 py-1 transition-colors hover:text-white">
                  <ChevronRight size={14} className="mr-2 shrink-0 text-indigo-300 transition-transform group-hover:translate-x-0.5" />
                  <Link href={link.href} className="footer-link text-slate-300 hover:text-white focus-ring-sm rounded px-1 py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/8 pt-4">
              <address className="not-italic space-y-3 text-sm text-slate-300">
                <div className="flex gap-3 items-start">
                  <MapPin className="mt-0.5 shrink-0 text-indigo-300" size={17} />
                  <p className="leading-relaxed">Ksatrian Lang Lang Bhuwana, Jakarta, Indonesia</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="shrink-0 text-indigo-300" size={17} />
                  <a href="tel:+622112345678" className="footer-link hover:text-white">+62 21 1234 5678</a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="shrink-0 text-indigo-300" size={17} />
                  <a href="mailto:hubmas@langlangbhuwana.go.id" className="footer-link hover:text-white break-all">hubmas@langlangbhuwana.go.id</a>
                </div>
              </address>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/5 pt-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">© {currentYear} BATALYON ZENI TEMPUR 9. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:justify-end">
            <Link href="/disclaimer" className="hover:text-indigo-200 transition-colors focus-ring-sm rounded px-1 py-0.5">Disclaimer</Link>
            <Link href="/sitemap" className="hover:text-indigo-200 transition-colors focus-ring-sm rounded px-1 py-0.5">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';

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
    <footer className="footer-compact" role="contentinfo">
      <div aria-hidden className="absolute top-0 right-0 w-1/3 h-1/2 bg-indigo-500/5 blur-[100px] rounded-full" />

      <div className="footer-container relative z-10">
        <div className="footer-grid mb-10 md:mb-16">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                <ShieldCheck className="text-indigo-950" size={22} />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight leading-none">BATALYON ZENI TEMPUR 9</span>
                <div className="text-xs font-bold tracking-[0.25em] text-indigo-400 mt-0.5 uppercase">Lang Lang Bhuwana</div>
              </div>
            </div>

            <p className="footer-muted mb-6">Portal resmi Batalyon Zeni Tempur 9 / Lang Lang Bhuwana. Menjaga kedaulatan, integritas, dan pengabdian melalui profesionalisme tinggi.</p>

            <div className="flex gap-3" role="list">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.target}
                  rel="noopener noreferrer"
                  role="listitem"
                  aria-label={`Tautan sosial ${s.label}`}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all group focus-ring-sm"
                >
                  <span className="w-4 h-4 bg-white/20 rounded-sm group-hover:bg-white transition-colors" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <h4 className="font-bold text-base mb-4">Navigasi</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <li key={link.href} className="text-slate-400 transition-colors flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <Link href={link.href} className="footer-link link-hover hover:text-white focus-ring-sm rounded px-1 py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Informasi */}
          <div>
            <h4 className="font-bold text-base mb-4">Informasi</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-300">
              {infoLinks.map((link) => (
                <li key={link.label} className="transition-colors flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <Link href={link.href} className="footer-link text-slate-300 hover:text-white focus-ring-sm rounded px-1 py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-4">Hubungi Kami</h4>
            <address className="not-italic space-y-4 text-sm text-slate-300">
              <div className="flex gap-3 items-start">
                <MapPin className="text-indigo-400 shrink-0 mt-1" size={18} />
                <p className="leading-relaxed">Ksatrian Lang Lang Bhuwana, Jakarta, Indonesia</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-indigo-400 shrink-0" size={18} />
                <a href="tel:+622112345678" className="footer-link hover:text-white">+62 21 1234 5678</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="text-indigo-400 shrink-0" size={18} />
                <a href="mailto:hubmas@langlangbhuwana.go.id" className="footer-link hover:text-white">hubmas@langlangbhuwana.go.id</a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-600 uppercase tracking-[0.08em] md:tracking-widest text-center md:text-left">
          <p className="max-w-md text-sm">© {currentYear} BATALYON ZENI TEMPUR 9. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/disclaimer" className="hover:text-indigo-200 transition-colors focus-ring-sm rounded px-1 py-0.5">Disclaimer</Link>
            <Link href="/sitemap" className="hover:text-indigo-200 transition-colors focus-ring-sm rounded px-1 py-0.5">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

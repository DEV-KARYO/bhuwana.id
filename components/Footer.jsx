import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-indigo-500/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <ShieldCheck className="text-indigo-950" size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none">
                  LANG LANG BHUWANA
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] leading-none text-indigo-400 mt-1 uppercase">
                  Republik Indonesia
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-10 text-sm">
              Portal resmi Batalion Lang Lang Bhuwana. Menjaga kedaulatan,
              integritas, dan pengabdian melalui profesionalisme tinggi.
            </p>
            <div className="flex gap-3">
              {[1, 2, 3].map((x) => (
                <div
                  key={x}
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer group"
                >
                  <div className="w-5 h-5 bg-white/20 rounded-lg group-hover:bg-white transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-8">Navigasi</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Warta & Pengumuman', href: '/news' },
                { label: 'Struktur Pimpinan', href: '/structure' },
                { label: 'Galeri Dokumentasi', href: '/gallery' },
              ].map((link) => (
                <li key={link.href} className="hover:text-white transition-colors cursor-pointer flex items-center group">
                  <ChevronRight
                    size={14}
                    className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-8">Informasi</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              {[
                'Laporan Publik',
                'Kebijakan Privasi',
                'Transparansi',
                'Karir & Penerimaan',
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-white transition-colors cursor-pointer flex items-center group"
                >
                  <ChevronRight
                    size={14}
                    className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-8">Hubungi Kami</h4>
            <div className="space-y-6 text-sm text-slate-400">
              <div className="flex gap-4">
                <MapPin className="text-indigo-400 shrink-0" size={20} />
                <p className="leading-relaxed">
                  Ksatrian Lang Lang Bhuwana, Jakarta, Indonesia
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-indigo-400 shrink-0" size={20} />
                <p>+62 21 1234 5678</p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-indigo-400 shrink-0" size={20} />
                <p>hubmas@langlangbhuwana.go.id</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} BATALION LANG LANG BHUWANA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <span className="hover:text-indigo-400 cursor-pointer transition-colors">
              Disclaimer
            </span>
            <span className="hover:text-indigo-400 cursor-pointer transition-colors">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  ShieldCheck,
} from 'lucide-react';
import Button from './Button';
import SearchModal from './SearchModal';

const navItems = [
  { id: 'home', label: 'Beranda', href: '/' },
  { id: 'news', label: 'Warta', href: '/news' },
  { id: 'structure', label: 'Pimpinan', href: '/structure' },
  { id: 'gallery', label: 'Galeri', href: '/gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
  }, [isMenuOpen]);

  const isHome = pathname === '/';
  const isAtTop = !isScrolled && isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isAtTop
            ? 'bg-transparent py-6'
            : 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm'
        }`}
      >
        <div className="container mx-auto section-spacing flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${
                isAtTop
                  ? 'bg-white/20 rotate-[-5deg] group-hover:rotate-0'
                  : 'bg-indigo-950'
              }`}
            >
              <ShieldCheck
                className={isAtTop ? 'text-white' : 'text-white'}
                size={24}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base md:text-lg font-black tracking-tight leading-none ${
                  isAtTop ? 'text-white' : 'text-slate-900'
                }`}
              >
                LANG LANG BHUWANA
              </span>
              <span
                className={`hidden sm:block text-[9px] font-bold tracking-[0.3em] leading-none mt-1 ${
                  isAtTop ? 'text-indigo-300' : 'text-indigo-600'
                }`}
              >
                PORTAL INFORMASI RESMI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-sm font-bold transition-all relative py-1 ${
                    isActive
                      ? isAtTop
                        ? 'text-white'
                        : 'text-indigo-950'
                      : isAtTop
                        ? 'text-white/70 hover:text-white'
                        : 'text-slate-500 hover:text-indigo-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${
                        isAtTop ? 'bg-white' : 'bg-indigo-950'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2.5 rounded-xl transition-colors focus-ring-sm ${
                isAtTop
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              aria-label="Cari"
              aria-expanded={isSearchOpen}
              aria-controls="search-modal"
            >
              <Search size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-indigo-950 text-white focus-ring-sm"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Buka menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={20} />
            </button>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Button variant={isAtTop ? 'white' : 'primary'} size="sm">
                Layanan Informasi
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-indigo-950 pt-24" role="dialog" aria-modal="true" aria-label="Navigasi mobile">
          <div id="mobile-navigation" className="container mx-auto section-spacing">
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2.5 bg-white/10 rounded-xl text-white focus-ring-sm"
                aria-label="Tutup menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-2xl font-black text-white hover:text-indigo-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} modalId="search-modal" />
      )}
    </>
  );
}

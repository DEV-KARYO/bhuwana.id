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
  { id: 'kegiatan', label: 'Kegiatan', href: '/kegiatan' },
  { id: 'structure', label: 'Pimpinan', href: '/structure' },
  { id: 'gallery', label: 'Galeri', href: '/gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setIsMenuClosing(true);
    // Wait for animation to complete before removing from DOM
    const timer = setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 300); // Matches fade-out and slide-out-right duration
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && !isMenuClosing) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
  }, [isMenuOpen, isMenuClosing]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleCloseMenu();
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    handleCloseMenu();
    setIsSearchOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const isAtTop = !isScrolled && isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth duration-500 ${
          isAtTop
            ? 'bg-transparent py-6'
            : 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm'
        }`}
      >
        <div className="container mx-auto section-spacing flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 group min-w-0">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-smooth duration-500 shadow-lg ${
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
            <div className="flex flex-col min-w-0">
              <span
                className={`text-sm sm:text-base md:text-lg font-black tracking-tight leading-none truncate max-w-[12rem] sm:max-w-none ${
                  isAtTop ? 'text-white' : 'text-slate-900'
                }`}
              >
                BATALYON ZENI TEMPUR 9
              </span>
              <span
                className={`hidden sm:block text-xs font-bold tracking-[0.3em] leading-none mt-1 ${
                  isAtTop ? 'text-indigo-200' : 'text-indigo-600'
                }`}
              >
                LANG LANG BHUWANA
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
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-bold transition-smooth relative py-1 ${
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
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2.5 rounded-xl transition-smooth focus-ring-sm ${
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
              onClick={() => {
                setIsMenuClosing(false);
                setIsMenuOpen(true);
              }}
              aria-label="Buka menu"
              aria-expanded={isMenuOpen && !isMenuClosing}
              aria-controls="mobile-navigation"
            >
              <Menu size={20} />
            </button>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Link href="/#services">
                <Button variant={isAtTop ? 'white' : 'primary'} size="sm">
                  Layanan Informasi
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 -bottom-px h-[2px] bg-slate-200/40">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {(isMenuOpen || isMenuClosing) && (
        <div 
          className={`fixed inset-0 z-40 pt-24 backdrop-blur-sm ${
            isMenuClosing
              ? 'bg-indigo-950/0 animate-fade-out'
              : 'bg-indigo-950/80 animate-fade-in'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigasi mobile"
          onClick={() => handleCloseMenu()}
        >
          <div 
            id="mobile-navigation"
            className={`container mx-auto section-spacing ${
              isMenuClosing
                ? 'animate-slide-out-right'
                : 'animate-slide-in-right'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => handleCloseMenu()}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white focus-ring-sm transition-colors"
                aria-label="Tutup menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8 mt-12 stagger-children">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleCloseMenu()}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={`block text-2xl font-black transition-colors ${
                    pathname === item.href ? 'text-indigo-200' : 'text-white hover:text-indigo-100'
                  }`}
                  style={{
                    animation: !isMenuClosing ? `fade-in 0.4s ease-out forwards ${0.1 * (index + 1)}s` : 'none',
                  }}
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

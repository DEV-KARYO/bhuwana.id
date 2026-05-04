'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function LegalPageTemplate({ 
  title, 
  subtitle, 
  breadcrumb = 'Informasi',
  children 
}) {
  return (
    <div className="page-content">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto section-spacing py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-600 hover:text-indigo-950 transition-colors">
              Beranda
            </Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-slate-900 font-semibold">{breadcrumb}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-indigo-950 to-indigo-900 text-white py-12 md:py-20">
        <div aria-hidden className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-float-gentle" />
        <div className="container mx-auto section-spacing relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-balance animate-slide-in-from-bottom">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-indigo-100 max-w-2xl animate-slide-in-from-bottom [animation-delay:120ms]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto section-spacing py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-slate prose-focus-indigo">
          {children}
        </div>
      </div>

      {/* Related Links */}
      <div className="bg-slate-50 border-t border-slate-200 py-12 md:py-16 relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-indigo-400/8 blur-3xl animate-float-gentle" />
        <div className="container mx-auto section-spacing relative z-10">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Informasi Terkait</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            <Link href="/privacy" className="card-elevated p-4 transition-all duration-300 hover-lift group">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Kebijakan Privasi</h4>
              <p className="text-sm text-slate-600">Cara kami melindungi data Anda</p>
            </Link>
            <Link href="/disclaimer" className="card-elevated p-4 transition-all duration-300 hover-lift group">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Disclaimer</h4>
              <p className="text-sm text-slate-600">Penafian dan batasan tanggung jawab</p>
            </Link>
            <Link href="/transparency" className="card-elevated p-4 transition-all duration-300 hover-lift group">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Transparansi</h4>
              <p className="text-sm text-slate-600">Komitmen kami pada transparansi</p>
            </Link>
            <Link href="/sitemap" className="card-elevated p-4 transition-all duration-300 hover-lift group">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Sitemap</h4>
              <p className="text-sm text-slate-600">Peta situs portal kami</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

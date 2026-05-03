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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
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
      <div className="bg-gradient-to-b from-indigo-950 to-indigo-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-indigo-100 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-slate">
          {children}
        </div>
      </div>

      {/* Related Links */}
      <div className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Informasi Terkait</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/privacy" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Kebijakan Privasi</h4>
              <p className="text-sm text-slate-600">Cara kami melindungi data Anda</p>
            </Link>
            <Link href="/disclaimer" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Disclaimer</h4>
              <p className="text-sm text-slate-600">Penafian dan batasan tanggung jawab</p>
            </Link>
            <Link href="/transparency" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Transparansi</h4>
              <p className="text-sm text-slate-600">Komitmen kami pada transparansi</p>
            </Link>
            <Link href="/sitemap" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-950 mb-1">Sitemap</h4>
              <p className="text-sm text-slate-600">Peta situs portal kami</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

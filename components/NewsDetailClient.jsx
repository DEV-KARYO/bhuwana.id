'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, User, Copy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { copyToClipboard, getShareUrl } from '@/lib/utils';

export default function NewsDetailClient({ news, relatedNews }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = getShareUrl(
      typeof window !== 'undefined' ? window.location.origin : '',
      news.id
    );
    const success = await copyToClipboard(shareUrl);

    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="page-content">
      <Navbar />

      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="img-responsive"
          priority
          sizes="100vw"
        />
        <div className="overlay-light"></div>

        <div className="absolute bottom-6 md:bottom-10 left-0 right-0">
          <div className="container mx-auto section-spacing">
            <Link href="/news">
              <button className="inline-flex items-center text-indigo-950 font-bold text-sm mb-4 md:mb-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white transition-all">
                <ChevronLeft size={16} className="mr-2" /> Kembali
              </button>
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 max-w-4xl tracking-tight leading-[1.1]">
              {news.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto section-spacing mt-8 md:mt-12 pb-16 md:pb-24">
        <div className="max-w-3xl prose-focus-indigo">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-6 md:py-10 border-b border-slate-100 mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                <User size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Penulis
                </p>
                <p className="font-bold text-slate-900">{news.author}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Kategori
              </p>
              <p className="font-bold text-slate-900">{news.category}</p>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Tanggal Terbit
              </p>
              <p className="font-bold text-slate-900">{news.date}</p>
            </div>
          </div>

          <article className="prose prose-slate max-w-none">
            <div className="text-lg md:text-xl font-medium text-slate-900 mb-6 md:mb-8 leading-relaxed">
              {news.excerpt}
            </div>

            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
              Bagikan Warta
            </span>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-all"
            >
              <Copy size={14} />
              {isCopied ? 'Tersalin!' : 'Salin Tautan'}
            </button>
          </div>
        </div>

        {relatedNews.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 md:mb-8 tracking-tight">
              Warta Terkait
            </h3>
            <div className="news-grid">
              {relatedNews.map((item) => (
                <NewsCard key={item.id} news={item} layout="grid" />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, User, Share2, Copy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import Button from '@/components/Button';
import { newsData } from '@/lib/data';
import { copyToClipboard, getShareUrl } from '@/lib/utils';

export default function NewsDetail({ params }) {
  const [isCopied, setIsCopied] = useState(false);
  const news = newsData.find((item) => item.id === parseInt(params.id));

  if (!news) {
    return (
      <div className="min-h-screen bg-white font-sans flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-40">
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            Warta Tidak Ditemukan
          </h1>
          <p className="text-slate-500 mb-8">
            Maaf, warta yang Anda cari tidak tersedia.
          </p>
          <Link href="/news">
            <Button>Kembali ke Daftar Warta</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedNews = newsData
    .filter((item) => item.id !== news.id && item.category === news.category)
    .slice(0, 3);

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
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>

        {/* Back Button & Title */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-6">
            <Link href="/news">
              <button className="inline-flex items-center text-indigo-950 font-bold text-sm mb-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white transition-all">
                <ChevronLeft size={16} className="mr-2" /> Kembali
              </button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 max-w-4xl tracking-tight leading-[1.1]">
              {news.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 mt-12 pb-24">
        <div className="max-w-3xl">
          {/* Meta Information */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 pb-10 border-b border-slate-100 mb-10">
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

          {/* Article Body */}
          <article className="prose prose-slate prose-lg text-slate-700 leading-relaxed max-w-none">
            <p className="text-xl font-medium text-slate-900 mb-8 leading-relaxed">
              {news.excerpt}
            </p>

            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Share Section */}
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

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mt-24">
            <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">
              Warta Terkait
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

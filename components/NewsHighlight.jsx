import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Badge from './Badge';
import Button from './Button';
import NewsCard from './NewsCard';
import { newsData } from '@/lib/content';

export default function NewsHighlight() {
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="page-section bg-slate-50 relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl animate-float-gentle" />
      <div aria-hidden className="absolute bottom-0 left-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl animate-float-gentle [animation-delay:1.3s]" />
      <div className="container mx-auto section-spacing">
        {/* Header - compact */}
        <div className="flex-between flex-col sm:flex-row gap-4 mb-6 reveal-up">
          <div>
            <Badge variant="primary">Jejak Kegiatan</Badge>
            <h2 className="text-2xl md:text-3xl editorial-title mt-3 text-balance">
              Kegiatan Terkini Satuan
            </h2>
          </div>
          <Link href="/news">
            <Button variant="ghost" className="hover-lift">
              Lihat Semua Berita <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* News Grid - compact */}
        <div className="news-grid-compact stagger-children">
          {latestNews.map((item) => (
            <NewsCard key={item.id} news={item} layout="grid" compact />
          ))}
        </div>
      </div>
    </section>
  );
}

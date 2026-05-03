import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Badge from './Badge';
import Button from './Button';
import NewsCard from './NewsCard';
import { newsData } from '@/lib/content';

export default function NewsHighlight() {
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="page-section bg-slate-50">
      <div className="container mx-auto section-spacing">
        {/* Header - compact */}
        <div className="flex-between flex-col sm:flex-row gap-4 mb-6 reveal-up">
          <div>
            <Badge variant="primary">Update Terkini</Badge>
            <h2 className="text-2xl md:text-3xl editorial-title mt-3">
              Lensa Lang Lang Bhuwana
            </h2>
          </div>
          <Link href="/news">
            <Button variant="ghost">
              Lihat Semua Warta <ArrowRight size={16} className="ml-2" />
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

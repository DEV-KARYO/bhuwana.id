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
        {/* Header */}
        <div className="flex-between flex-col md:flex-row gap-6 mb-12 md:mb-16">
          <div>
            <Badge variant="primary">Update Terkini</Badge>
            <h2 className="text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Lensa Lang Lang Bhuwana
            </h2>
          </div>
          <Link href="/news">
            <Button variant="ghost">
              Lihat Semua Warta <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {latestNews.map((item) => (
            <NewsCard key={item.id} news={item} layout="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Badge from './Badge';
import Button from './Button';
import NewsCard from './NewsCard';
import { newsData } from '@/lib/data';

export default function NewsHighlight() {
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 flex-col md:flex-row gap-6">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((item) => (
            <NewsCard key={item.id} news={item} layout="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}

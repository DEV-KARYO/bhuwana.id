'use client';

import Link from 'next/link';
import { TrendingUp, Calendar, Tag } from 'lucide-react';

export default function PopularCategoriesWidget({
  categories = [],
  newsData = [],
  onCategorySelect = () => {},
}) {
  // Calculate category counts
  const categoryCounts = categories.map((category) => ({
    category,
    count: newsData.filter((item) => item.category === category).length,
  }));

  // Sort by count descending and take top 4
  const topCategories = categoryCounts
    .sort((a, b) => b.count - a.count)
    .slice(0, 4);

  // Get latest 3 news
  const latestNews = newsData
    .sort((a, b) => new Date(b.publishedAt || b.dateObj) - new Date(a.publishedAt || a.dateObj))
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Popular Categories */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} className="text-indigo-600" />
          <h3 className="font-black text-slate-900 text-lg">Kategori Populer</h3>
        </div>

        <div className="space-y-2">
          {topCategories.length > 0 ? (
            topCategories.map(({ category, count }, index) => (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 transition-colors group"
              >
                <div className="flex items-center gap-3 text-left min-w-0">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xs shrink-0">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors truncate">
                    {category}
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full shrink-0 ml-2">
                  {count}
                </span>
              </button>
            ))
          ) : (
            <p className="text-sm text-slate-500 py-8 text-center">Belum ada kategori</p>
          )}
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-5 md:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={20} className="text-indigo-600" />
          <h3 className="font-black text-slate-900 text-lg">Berita Terbaru</h3>
        </div>

        <div className="space-y-3">
          {latestNews.length > 0 ? (
            latestNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`}>
                <div className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow group cursor-pointer">
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    {news.category}
                  </p>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors line-clamp-2 mb-2">
                    {news.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {new Date(news.publishedAt || news.dateObj).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-slate-500 py-8 text-center">Belum ada berita</p>
          )}
        </div>
      </div>

      {/* Unique Tags Preview */}
      {newsData.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Tag size={20} className="text-indigo-600" />
            <h3 className="font-black text-slate-900 text-lg">Tag Umum</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[...new Set(newsData.flatMap((item) => item.tags || []))]
              .slice(0, 6)
              .map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                >
                  #{tag}
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Download, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import EMagazineSection from '@/components/EMagazineSection';
import NewsCard from '@/components/NewsCard';
import NewsFilterPanel from '@/components/NewsFilterPanel';
import QuickCategoryFilter from '@/components/QuickCategoryFilter';
import PopularCategoriesWidget from '@/components/PopularCategoriesWidget';
import { useToast } from '@/components/Toast';
import { newsData, categories } from '@/lib/content';
import {
  filterNewsByCategory,
  formatNewsMonth,
  sortNewsByDate,
  paginateArray,
} from '@/lib/utils';

export default function NewsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedTag, setSelectedTag] = useState('Semua');
  const [selectedMonth, setSelectedMonth] = useState('Semua');
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc');
  const toast = useToast();
  const itemsPerPage = 6;

  const availableTags = useMemo(() => {
    const tags = newsData.flatMap((item) => item.tags || []);
    return [...new Set(tags)].slice(0, 12);
  }, []);

  const availableMonths = useMemo(() => {
    const months = newsData
      .map((item) => (item.publishedAt || item.dateObj || item.date || '').slice(0, 7))
      .filter(Boolean);

    return [...new Set(months)].sort((a, b) => b.localeCompare(a));
  }, []);

  const availableYears = useMemo(() => {
    const years = newsData
      .map((item) => (item.publishedAt || item.dateObj || item.date || '').slice(0, 4))
      .filter(Boolean);

    return [...new Set(years)].sort((a, b) => b.localeCompare(a));
  }, []);

  // Filter and sort
  const filteredNews = useMemo(() => {
    let result = newsData;

    if (selectedCategory !== 'Semua') {
      result = filterNewsByCategory(result, selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.excerpt.toLowerCase().includes(query) ||
          item.content.toLowerCase().includes(query)
      );
    }

    if (selectedTag !== 'Semua') {
      result = result.filter((item) => (item.tags || []).includes(selectedTag));
    }

    if (selectedMonth !== 'Semua') {
      result = result.filter((item) =>
        (item.publishedAt || item.dateObj || item.date || '').startsWith(selectedMonth)
      );
    }

    if (selectedYear !== 'Semua') {
      result = result.filter((item) =>
        (item.publishedAt || item.dateObj || item.date || '').startsWith(selectedYear)
      );
    }

    return sortNewsByDate(result, sortOrder);
  }, [selectedCategory, selectedMonth, selectedTag, selectedYear, sortOrder, searchQuery]);

  // Paginate
  const { items, totalPages } = useMemo(() => {
    return paginateArray(filteredNews, currentPage, itemsPerPage);
  }, [filteredNews, currentPage, itemsPerPage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setCurrentPage(1);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = 'Kabar Lang Lang Bhuwana';

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // noop
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      toast.success('Tautan halaman warta berhasil disalin.');
    } catch {
      toast.error('Gagal menyalin tautan. Silakan coba lagi.');
    }
  };

  const handleDownload = () => {
    toast.info('Fitur unduh buletin segera tersedia.');
  };

  return (
    <div className="page-content">
      <Navbar />
      <Breadcrumb
        items={[
          { label: 'Warta & Berita', href: '/news' },
        ]}
      />

      {/* Header */}
      <div className="page-header relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 border-b border-slate-200">
        <div aria-hidden className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl animate-float-gentle" />
        <div aria-hidden className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl animate-float-gentle [animation-delay:1.2s]" />
        <div className="container mx-auto section-spacing relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-up">
            <div className="max-w-2xl">
              <Badge variant="primary">Pusat Warta</Badge>
              <h1 className="section-title editorial-title mt-4 mb-4 text-balance">
                Kabar Lang Lang Bhuwana
              </h1>
              <p className="section-subtitle">
                Informasi aktual mengenai operasional, kegiatan sosial, dokumentasi, dan publikasi digital Batalyon Zeni Tempur 9 / Lang Lang Bhuwana.
              </p>
            </div>
            <div className="btn-group">
              <Button variant="secondary" className="!rounded-full" onClick={handleDownload}>
                <Download size={18} className="mr-2" /> Buletin
              </Button>
              <Button variant="primary" className="!rounded-full" onClick={handleShare}>
                <Share2 size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="page-section bg-slate-50 relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-indigo-400/8 blur-3xl animate-float-gentle" />
        <div aria-hidden className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-blue-400/8 blur-3xl animate-float-gentle [animation-delay:1.4s]" />
        <div className="container mx-auto section-spacing relative z-10">
          <EMagazineSection />

          {/* Featured News Highlight */}
          {filteredNews.length > 0 && (
            <div className="mb-10 md:mb-12">
              <div className="mb-4">
                <Badge variant="primary">Sorotan Warta</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children">
                {filteredNews.slice(0, 2).map((news) => (
                  <Link key={news.id} href={`/news/${news.id}`} className="group block rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover-lift">
                    {news.image && (
                      <div className="relative h-40 md:h-48 overflow-hidden bg-slate-200">
                        <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    )}
                    <div className="p-5 md:p-6 bg-white">
                      <Badge variant="secondary" className="mb-3">{news.category}</Badge>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors line-clamp-2">{news.title}</h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{news.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{new Date(news.publishedAt || news.dateObj).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span className="text-indigo-700 font-semibold">Baca sekarang →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quick Category Filter for Mobile */}
          <QuickCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Consolidated Filter Panel */}
          <NewsFilterPanel
            searchQuery={searchQuery}
            onSearchChange={(value) => {
              setSearchQuery(value);
              setCurrentPage(1);
            }}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            selectedTag={selectedTag}
            onTagChange={handleTagChange}
            selectedMonth={selectedMonth}
            onMonthChange={handleMonthChange}
            selectedYear={selectedYear}
            onYearChange={handleYearChange}
            sortOrder={sortOrder}
            onSortChange={(order) => {
              setSortOrder(order);
              setCurrentPage(1);
            }}
            categories={categories}
            availableTags={availableTags}
            availableMonths={availableMonths}
            availableYears={availableYears}
            onReset={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
              setSelectedTag('Semua');
              setSelectedMonth('Semua');
              setSelectedYear('Semua');
              setSortOrder('desc');
              setCurrentPage(1);
            }}
            hasActiveFilters={
              searchQuery.trim() ||
              selectedCategory !== 'Semua' ||
              selectedTag !== 'Semua' ||
              selectedMonth !== 'Semua' ||
              selectedYear !== 'Semua' ||
              sortOrder !== 'desc'
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* News Feed */}
            <div className="lg:col-span-2 list-spaced stagger-children">
              <div className="card-base text-sm text-slate-500 px-4 py-3">
                Menampilkan <span className="font-bold text-slate-700">{filteredNews.length}</span> warta dalam kategori <span className="font-bold text-slate-700">{selectedCategory}</span>
                {selectedTag !== 'Semua' && (
                  <>
                    {' '}
                    dengan tag <span className="font-bold text-slate-700">{selectedTag}</span>
                  </>
                )}
                {selectedMonth !== 'Semua' && (
                  <>
                    {' '}
                    pada arsip <span className="font-bold text-slate-700">{formatNewsMonth(`${selectedMonth}-01`)}</span>
                  </>
                )}
                {selectedYear !== 'Semua' && (
                  <>
                    {' '}
                    di tahun <span className="font-bold text-slate-700">{selectedYear}</span>
                  </>
                )}
              </div>

              {items.length > 0 ? (
                <>
                  {items.map((item) => (
                    <NewsCard key={item.id} news={item} layout="list" compact />
                  ))}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-12">
                      <button
                        onClick={() =>
                          handlePageChange(Math.max(1, currentPage - 1))
                        }
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-100 disabled-style transition-all hover-lift"
                      >
                        ← Sebelumnya
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-lg font-bold transition-all hover-lift ${
                              currentPage === page
                                ? 'bg-indigo-950 text-white'
                                : 'border border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {page}
                          </button>
                        )
                      )}
                      <button
                        onClick={() =>
                          handlePageChange(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-100 disabled-style transition-all hover-lift"
                      >
                        Berikutnya →
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 card-base">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-2xl editorial-title mb-2">
                    Tidak Ada Warta
                  </h3>
                  <p className="text-slate-500">
                    Coba ubah filter atau kategori untuk melihat warta lainnya.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 md:space-y-8 lg:sticky lg:top-28 h-fit">
              <PopularCategoriesWidget
                categories={categories}
                newsData={newsData}
                onCategorySelect={(category) => {
                  handleCategoryChange(category);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

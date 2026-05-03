'use client';

import { useState, useMemo } from 'react';
import { Download, Share2, SlidersHorizontal, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import NewsCard from '@/components/NewsCard';
import { useToast } from '@/components/Toast';
import { newsData, categories } from '@/lib/content';
import {
  filterNewsByCategory,
  formatNewsMonth,
  sortNewsByDate,
  paginateArray,
} from '@/lib/utils';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedTag, setSelectedTag] = useState('Semua');
  const [selectedMonth, setSelectedMonth] = useState('Semua');
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc');
  const toast = useToast();
  const itemsPerPage = 6;

  const latestNews = useMemo(() => {
    return sortNewsByDate(newsData, 'desc')[0] || null;
  }, []);

  const newsStats = useMemo(() => {
    const totalItems = newsData.length;
    const totalCategories = new Set(newsData.map((item) => item.category)).size;
    const totalTags = new Set(newsData.flatMap((item) => item.tags || [])).size;

    return {
      totalItems,
      totalCategories,
      totalTags,
    };
  }, []);

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

  const activeFilterCount = [
    selectedCategory !== 'Semua',
    selectedTag !== 'Semua',
    selectedMonth !== 'Semua',
    selectedYear !== 'Semua',
    sortOrder !== 'desc',
  ].filter(Boolean).length;

  return (
    <div className="page-content">
      <Navbar />

      {/* Header */}
      <div className="page-header bg-white border-b border-slate-200">
        <div className="container mx-auto section-spacing">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Badge variant="primary">Pusat Warta</Badge>
              <h1 className="section-title editorial-title mt-4 mb-4">
                Kabar Lang Lang Bhuwana
              </h1>
              <p className="section-subtitle">
                Informasi aktual mengenai operasional, kegiatan sosial, dan
                pencapaian resmi Batalion.
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

          <div className="mt-6 max-w-xl">
            <input
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari judul atau isi warta..."
              className="input-base bg-white"
              aria-label="Cari warta"
            />

            {(searchQuery.trim() || selectedCategory !== 'Semua' || selectedTag !== 'Semua' || selectedMonth !== 'Semua' || selectedYear !== 'Semua' || sortOrder !== 'desc') && (
              <div className="mt-3">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Semua');
                    setSelectedTag('Semua');
                    setSelectedMonth('Semua');
                    setSelectedYear('Semua');
                    setSortOrder('desc');
                    setCurrentPage(1);
                  }}
                  className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition-colors"
                >
                  Reset pencarian dan filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="page-section bg-slate-50">
        <div className="container mx-auto section-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10">
            {/* News Feed */}
            <div className="lg:col-span-3 list-spaced stagger-children">
              <div className="text-sm text-slate-500 bg-white border border-slate-100 rounded-xl px-4 py-3">
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
                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-100 disabled-style transition-all"
                      >
                        ← Sebelumnya
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-lg font-bold transition-all ${
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
                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-100 disabled-style transition-all"
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
              <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-950 text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-indigo-950/10">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.35),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.35),_transparent_45%)]"></div>
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-200 mb-3">
                    Statistik Warta
                  </p>
                  <h4 className="text-xl font-black leading-tight mb-4">
                    Ringkasan publikasi terkini
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/10">
                      <p className="text-xs uppercase tracking-widest text-indigo-200 mb-1">Total</p>
                      <p className="text-2xl font-black">{newsStats.totalItems}</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/10">
                      <p className="text-xs uppercase tracking-widest text-indigo-200 mb-1">Kategori</p>
                      <p className="text-2xl font-black">{newsStats.totalCategories}</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/10">
                      <p className="text-xs uppercase tracking-widest text-indigo-200 mb-1">Tag</p>
                      <p className="text-2xl font-black">{newsStats.totalTags}</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/10">
                      <p className="text-xs uppercase tracking-widest text-indigo-200 mb-1">Terbaru</p>
                      <p className="text-sm font-bold leading-tight">{latestNews ? formatNewsMonth(latestNews.publishedAt || latestNews.dateObj || latestNews.date) : '-'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-5 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-black text-slate-900 text-lg">Filter Warta</h4>
                  <button
                    onClick={() => setIsFilterOpen((prev) => !prev)}
                    className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold"
                    aria-expanded={isFilterOpen}
                  >
                    <SlidersHorizontal size={14} />
                    {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
                    <ChevronDown size={14} className={`${isFilterOpen ? 'rotate-180' : ''} transition-transform`} />
                  </button>
                </div>

                <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block mt-4`}>
                  <div className="flex items-center justify-end mb-3">
                    {(selectedCategory !== 'Semua' || selectedTag !== 'Semua' || selectedMonth !== 'Semua' || selectedYear !== 'Semua' || sortOrder !== 'desc') && (
                      <button
                        onClick={() => {
                          setSelectedCategory('Semua');
                          setSelectedTag('Semua');
                          setSelectedMonth('Semua');
                          setSelectedYear('Semua');
                          setSortOrder('desc');
                          setCurrentPage(1);
                        }}
                        className="text-xs font-bold text-indigo-700 hover:text-indigo-900 transition-colors"
                      >
                        Reset filter sidebar
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Kategori
                    <select
                      value={selectedCategory}
                      onChange={(event) => handleCategoryChange(event.target.value)}
                      className="mt-1 w-full input-base bg-white"
                    >
                      {['Semua', ...categories].map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </label>

                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Tag
                    <select
                      value={selectedTag}
                      onChange={(event) => handleTagChange(event.target.value)}
                      className="mt-1 w-full input-base bg-white"
                    >
                      {['Semua', ...availableTags].map((tag) => (
                        <option key={tag} value={tag}>{tag}</option>
                      ))}
                    </select>
                  </label>

                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Bulan
                    <select
                      value={selectedMonth}
                      onChange={(event) => handleMonthChange(event.target.value)}
                      className="mt-1 w-full input-base bg-white"
                    >
                      <option value="Semua">Semua Bulan</option>
                      {availableMonths.map((month) => (
                        <option key={month} value={month}>{formatNewsMonth(`${month}-01`)}</option>
                      ))}
                    </select>
                  </label>

                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Tahun
                    <select
                      value={selectedYear}
                      onChange={(event) => handleYearChange(event.target.value)}
                      className="mt-1 w-full input-base bg-white"
                    >
                      <option value="Semua">Semua Tahun</option>
                      {availableYears.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </label>
                  </div>

                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mt-3">
                    Urutan
                    <select
                      value={sortOrder}
                      onChange={(event) => {
                        setSortOrder(event.target.value);
                        setCurrentPage(1);
                      }}
                      className="mt-1 w-full input-base bg-white"
                    >
                      <option value="desc">Terbaru</option>
                      <option value="asc">Terlama</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Email Subscription */}
              <div className="bg-gradient-primary p-6 md:p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute -bottom-4 -right-4 p-4 opacity-10 text-4xl">
                  📰
                </div>
                <h4 className="font-bold text-lg mb-4 relative z-10">
                  E-Magazine
                </h4>
                <p className="text-indigo-200 text-xs leading-relaxed mb-6 relative z-10">
                  Unduh majalah digital bulanan kami untuk ulasan kegiatan
                  mendalam.
                </p>
                <Button variant="white" size="sm" className="w-full">
                  Unduh Edisi Mei
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

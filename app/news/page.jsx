'use client';

import { useState, useMemo } from 'react';
import { Download, Share2, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import NewsCard from '@/components/NewsCard';
import { newsData, categories } from '@/lib/content';
import {
  filterNewsByCategory,
  sortNewsByDate,
  paginateArray,
} from '@/lib/utils';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc');
  const itemsPerPage = 6;

  // Filter and sort
  const filteredNews = useMemo(() => {
    let result = newsData;

    if (selectedCategory !== 'Semua') {
      result = filterNewsByCategory(result, selectedCategory);
    }

    return sortNewsByDate(result, sortOrder);
  }, [selectedCategory, sortOrder]);

  // Paginate
  const { items, totalPages } = useMemo(() => {
    return paginateArray(filteredNews, currentPage, itemsPerPage);
  }, [filteredNews, currentPage, itemsPerPage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-20 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Badge variant="primary">Pusat Warta</Badge>
              <h1 className="text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
                Kabar Lang Lang Bhuwana
              </h1>
              <p className="text-slate-500 leading-relaxed">
                Informasi aktual mengenai operasional, kegiatan sosial, dan
                pencapaian resmi Batalion.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" className="!rounded-full">
                <Download size={18} className="mr-2" /> Buletin
              </Button>
              <Button variant="primary" className="!rounded-full">
                <Share2 size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-slate-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* News Feed */}
            <div className="lg:col-span-3 space-y-8">
              {items.length > 0 ? (
                <>
                  {items.map((item) => (
                    <NewsCard key={item.id} news={item} layout="list" />
                  ))}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-12">
                      <button
                        onClick={() =>
                          setCurrentPage(Math.max(1, currentPage - 1))
                        }
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        ← Sebelumnya
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
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
                          setCurrentPage(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Berikutnya →
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 bg-white rounded-[32px] border border-slate-100">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Tidak Ada Warta
                  </h3>
                  <p className="text-slate-500">
                    Coba ubah filter atau kategori untuk melihat warta lainnya.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Category Filter */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-6">
                  Kategori Warta
                </h4>
                <div className="space-y-2">
                  {['Semua', ...categories].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all group text-left font-bold text-sm ${
                        selectedCategory === cat
                          ? 'bg-indigo-950 text-white'
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {cat}
                      <ChevronRight
                        size={14}
                        className={`group-hover:translate-x-1 transition-transform shrink-0 ${
                          selectedCategory === cat ? 'opacity-100' : ''
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-6">Urutan</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Terbaru', value: 'desc' },
                    { label: 'Terlama', value: 'asc' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortOrder(option.value);
                        setCurrentPage(1);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all group text-left font-bold text-sm ${
                        sortOrder === option.value
                          ? 'bg-indigo-950 text-white'
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {option.label}
                      <ChevronRight
                        size={14}
                        className={`group-hover:translate-x-1 transition-transform shrink-0 ${
                          sortOrder === option.value ? 'opacity-100' : ''
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Subscription */}
              <div className="bg-indigo-950 p-8 rounded-3xl text-white relative overflow-hidden">
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

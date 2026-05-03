'use client';

import { useState, useEffect } from 'react';
import { SlidersHorizontal, X, Search, RotateCcw } from 'lucide-react';

export default function NewsFilterPanel({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTag,
  onTagChange,
  selectedMonth,
  onMonthChange,
  selectedYear,
  onYearChange,
  sortOrder,
  onSortChange,
  categories = [],
  availableTags = [],
  availableMonths = [],
  availableYears = [],
  onReset,
  hasActiveFilters = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleReset = () => {
    onReset();
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Filter Panel */}
      <div className="hidden lg:block mb-6 bg-white border border-slate-200 rounded-2xl p-5 md:p-6 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <h3 className="font-black text-slate-900 text-lg">Filter & Pencarian</h3>
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              title="Kembalikan semua filter dan pencarian ke default"
            >
              <RotateCcw size={14} />
              Reset Semua
            </button>
          )}
        </div>

        {/* Search Input */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Pencarian
          </label>
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari judul atau isi warta..."
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              aria-label="Cari warta"
            />
          </div>
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Category */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Kategori
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
              aria-label="Filter kategori"
            >
              {['Semua', ...categories].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Tag */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Tag
            </label>
            <select
              value={selectedTag}
              onChange={(e) => onTagChange(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
              aria-label="Filter tag"
            >
              {['Semua', ...availableTags].map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Month */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Bulan
            </label>
            <select
              value={selectedMonth}
              onChange={(e) => onMonthChange(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
              aria-label="Filter bulan"
            >
              <option value="Semua">Semua Bulan</option>
              {availableMonths.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Tahun
            </label>
            <select
              value={selectedYear}
              onChange={(e) => onYearChange(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
              aria-label="Filter tahun"
            >
              <option value="Semua">Semua Tahun</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort Order */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Urutan
          </label>
          <select
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
            aria-label="Urutan hasil"
          >
            <option value="desc">Terbaru</option>
            <option value="asc">Terlama</option>
          </select>
        </div>
      </div>

      {/* Mobile Sticky Filter Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 ${
            hasActiveFilters
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-white text-indigo-950 hover:bg-slate-50 border-2 border-indigo-600'
          } font-semibold`}
          aria-label="Buka filter"
          title={hasActiveFilters ? 'Filter aktif - Klik untuk ubah' : 'Klik untuk filter'}
        >
          <SlidersHorizontal size={20} />
          {hasActiveFilters && (
            <span className="inline-block px-2 py-1 bg-white text-indigo-600 text-xs font-black rounded-full ml-1">
              {Math.min(5, Object.values([
                selectedCategory !== 'Semua',
                selectedTag !== 'Semua',
                selectedMonth !== 'Semua',
                selectedYear !== 'Semua',
                sortOrder !== 'desc',
              ]).filter(Boolean).length)}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Modal Backdrop */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Modal Filter Panel */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl transition-all duration-300 max-h-[90vh] overflow-y-auto ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Drag Handle */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-4 py-3 flex justify-center rounded-t-3xl">
          <div className="w-12 h-1 bg-slate-300 rounded-full" aria-hidden="true" />
        </div>

        <div className="p-5 md:p-6 space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <h3 className="font-black text-slate-900 text-lg">Filter & Pencarian</h3>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                title="Kembalikan semua filter dan pencarian ke default"
              >
                <RotateCcw size={14} />
                Reset
              </button>
            )}
          </div>

          {/* Search Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Pencarian
            </label>
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari judul atau isi warta..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                aria-label="Cari warta"
              />
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="space-y-4">
            {/* Category */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                aria-label="Filter kategori"
              >
                {['Semua', ...categories].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Tag
              </label>
              <select
                value={selectedTag}
                onChange={(e) => onTagChange(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                aria-label="Filter tag"
              >
                {['Semua', ...availableTags].map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Month */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Bulan
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => onMonthChange(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                aria-label="Filter bulan"
              >
                <option value="Semua">Semua Bulan</option>
                {availableMonths.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Tahun
              </label>
              <select
                value={selectedYear}
                onChange={(e) => onYearChange(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                aria-label="Filter tahun"
              >
                <option value="Semua">Semua Tahun</option>
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Urutan
              </label>
              <select
                value={sortOrder}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                aria-label="Urutan hasil"
              >
                <option value="desc">Terbaru</option>
                <option value="asc">Terlama</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Reset
              </button>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl bg-indigo-950 hover:bg-indigo-900 text-white font-semibold text-sm transition-colors ${
                hasActiveFilters ? '' : 'col-span-2'
              }`}
            >
              Selesai
            </button>
          </div>

          {/* Safe Area for Mobile */}
          <div className="h-6" />
        </div>
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { newsData } from '@/lib/content';
import { searchNews } from '@/lib/utils';

export default function SearchModal({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setResults(searchNews(newsData, query));
    } else {
      setResults([]);
    }
  };

  const popularSearches = [
    'Kegiatan Mei',
    'Struktur Pimpinan',
    'Inovasi Digital',
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-indigo-950/40 backdrop-blur-md flex items-start justify-center pt-32 px-6 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Search Input */}
        <div className="p-4 flex items-center gap-4 border-b border-slate-100">
          <Search className="text-slate-400 ml-4" size={20} />
          <input
            autoFocus
            type="text"
            placeholder="Cari warta atau pengumuman..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full py-4 text-lg font-medium outline-none text-slate-900 placeholder:text-slate-300"
          />
          <button
            onClick={onClose}
            className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all text-slate-500"
            aria-label="Tutup pencarian"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {searchQuery.trim() === '' ? (
            // Popular Searches
            <>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                Pencarian Populer
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleSearch(tag)}
                    className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold border border-slate-100 cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </>
          ) : results.length > 0 ? (
            // Search Results
            <>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                {results.length} Hasil Ditemukan
              </p>
              <div className="space-y-4">
                {results.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.id}`}
                    onClick={onClose}
                    className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group"
                  >
                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.date} • {item.category}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            // No Results
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-slate-300" size={32} />
              </div>
              <p className="text-slate-500 font-medium">Tidak ada hasil ditemukan</p>
              <p className="text-slate-400 text-sm mt-2">
                Coba kata kunci atau kategori yang berbeda
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Clock, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Badge from '@/components/Badge';
import PopularCategoriesWidget from '@/components/PopularCategoriesWidget';
import { eventsData } from '@/lib/content';

function EventCard({ event, featured = false }) {
  const registrationPercentage = Math.round((event.registered / event.capacity) * 100);
  
  return (
    <Link href={`/kegiatan/${event.id}`} className="group">
      <div className={`${featured ? 'card-featured' : 'card-elevated'} hover:border-indigo-300 transition-all h-full flex flex-col overflow-hidden`}>
        {/* Image Container */}
        <div className="relative h-40 md:h-48 bg-slate-200 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <Badge variant={event.status === 'Mendatang' ? 'primary' : event.status === 'Sedang berlangsung' ? 'success' : 'warning'}>
              {event.status}
            </Badge>
          </div>
          
          {/* Featured Badge */}
          {event.isFeatured && (
            <div className="absolute top-3 left-3">
              <Badge variant="primary">Unggulan</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col p-5 md:p-6">
          {/* Title */}
          <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-2 line-clamp-2 group-hover:text-indigo-700 transition-colors">
            {event.title}
          </h3>

          {/* Category */}
          <Badge variant="default" className="inline-block w-fit mb-3">
            {event.category}
          </Badge>

          {/* Excerpt */}
          <p className="text-slate-600 text-sm md:text-base mb-4 flex-grow line-clamp-2">
            {event.excerpt}
          </p>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
            {/* Date */}
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar size={16} className="text-indigo-600 shrink-0" />
              <span className="truncate">
                {new Date(event.startDate).toLocaleDateString('id-ID', {
                  month: 'short',
                  day: 'numeric'
                })}
                {event.endDate !== event.startDate && ` - ${new Date(event.endDate).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}`}
              </span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2 text-slate-600">
              <Clock size={16} className="text-indigo-600 shrink-0" />
              <span className="truncate">{event.time}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-600 sm:col-span-2">
              <MapPin size={16} className="text-indigo-600 shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>

          {/* Registration Progress */}
          <div className="border-t border-slate-100 pt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Pendaftar</span>
              <span className="text-xs font-bold text-slate-700">
                {event.registered}/{event.capacity}
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-600 to-indigo-400 h-2 rounded-full transition-all"
                style={{ width: `${Math.min(registrationPercentage, 100)}%` }}
              ></div>
            </div>
            <span className="text-xs text-slate-500 mt-1 inline-block">{registrationPercentage}% terisi</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function KegiatanPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOngoing, setShowOngoing] = useState(true);
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [showPast, setShowPast] = useState(true);

  const categories = ['Semua', ...new Set(eventsData.map((e) => e.category))];

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      // Category filter
      if (selectedCategory !== 'Semua' && event.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query)
        );
      }

      // Status filter
      if (event.status === 'Selesai' && !showPast) return false;
      if (event.status === 'Sedang berlangsung' && !showOngoing) return false;
      if (event.status === 'Mendatang' && !showUpcoming) return false;

      return true;
    });
  }, [selectedCategory, searchQuery, showPast, showOngoing, showUpcoming]);

  const featuredEvents = filteredEvents.filter((e) => e.isFeatured).slice(0, 2);
  const regularEvents = filteredEvents.filter((e) => !e.isFeatured);

  return (
    <div className="page-content">
      <Navbar />
      <Breadcrumb
        items={[
          { label: 'Kegiatan & Acara', href: '/kegiatan' },
        ]}
      />

      {/* Header */}
      <div className="page-header bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto section-spacing">
          <div className="section-header max-w-2xl mx-auto">
            <Badge variant="primary">Jadwal Lengkap</Badge>
            <h1 className="section-title mt-4 mb-6">
              Kegiatan & Acara Satuan
            </h1>
            <p className="section-subtitle">
              Informasi lengkap tentang kegiatan, latihan, webinar, dan acara-acara penting Batalyon Zeni Tempur 9 / Lang Lang Bhuwana.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <div className="page-section bg-white border-b border-slate-100">
          <div className="container mx-auto section-spacing">
            <div className="mb-8">
              <Badge variant="primary">Unggulan</Badge>
              <h2 className="section-title mt-3">Kegiatan Unggulan</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} featured />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filter Section */}
      <div className="page-section bg-slate-50">
        <div className="container mx-auto section-spacing">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kegiatan, lokasi, atau kategori..."
                className="input-base"
                aria-label="Cari kegiatan"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter size={18} className="text-slate-600" />
              <h3 className="font-bold text-slate-900">Kategori</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                    selectedCategory === cat
                      ? 'bg-indigo-950 text-white border-indigo-950'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Clock size={18} className="text-slate-600" />
              <h3 className="font-bold text-slate-900">Status</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showUpcoming}
                  onChange={(e) => setShowUpcoming(e.target.checked)}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Mendatang</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOngoing}
                  onChange={(e) => setShowOngoing(e.target.checked)}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Sedang Berlangsung</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPast}
                  onChange={(e) => setShowPast(e.target.checked)}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Selesai</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="page-section">
        <div className="container mx-auto section-spacing">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-slate-600">
              Menampilkan <span className="font-bold text-slate-900">{filteredEvents.length}</span> dari{' '}
              <span className="font-bold text-slate-900">{eventsData.length}</span> kegiatan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Events Grid */}
              {regularEvents.length > 0 ? (
                <div className="news-grid">
                  {regularEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 card-elevated rounded-2xl">
                  <div className="text-6xl mb-4">📅</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Tidak Ada Kegiatan</h3>
                  <p className="text-slate-500">
                    Tidak ada kegiatan yang sesuai dengan filter Anda. Coba ubah filter atau kategori.
                  </p>
                </div>
              )}
            </div>

            <aside className="space-y-6 md:space-y-8 lg:sticky lg:top-28 h-fit">
              <PopularCategoriesWidget
                categories={categories}
                newsData={eventsData}
                onCategorySelect={(category) => {
                  setSelectedCategory(category);
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

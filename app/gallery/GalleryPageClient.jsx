'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Badge from '@/components/Badge';
import PopularCategoriesWidget from '@/components/PopularCategoriesWidget';
import { galleryData } from '@/lib/content';

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const uniqueCategories = [...new Set(galleryData.map((item) => item.category))];

  const categories = ['Semua', ...uniqueCategories];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredGallery = useMemo(() => {
    const categoryFiltered =
      activeCategory === 'Semua'
        ? galleryData
        : galleryData.filter((item) => item.category === activeCategory);

    if (!searchQuery.trim()) {
      return categoryFiltered;
    }

    const query = searchQuery.toLowerCase();
    return categoryFiltered.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [activeCategory, searchQuery]);

  const currentIndex = selectedImage
    ? filteredGallery.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const showPrevImage = useCallback(() => {
    if (!filteredGallery.length || currentIndex < 0) {
      return;
    }

    const prevIndex =
      currentIndex === 0 ? filteredGallery.length - 1 : currentIndex - 1;
    setSelectedImage(filteredGallery[prevIndex]);
  }, [currentIndex, filteredGallery]);

  const showNextImage = useCallback(() => {
    if (!filteredGallery.length || currentIndex < 0) {
      return;
    }

    const nextIndex =
      currentIndex === filteredGallery.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredGallery[nextIndex]);
  }, [currentIndex, filteredGallery]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }

      if (event.key === 'ArrowLeft') {
        showPrevImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage, showNextImage, showPrevImage]);

  return (
    <div className="page-content">
      <Navbar />
      <Breadcrumb
        items={[
          { label: 'Galeri Dokumentasi', href: '/gallery' },
        ]}
      />

      {/* Header */}
      <div className="page-header bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto section-spacing">
          <div className="section-header max-w-2xl mx-auto">
            <Badge variant="primary">Dokumentasi Visual</Badge>
            <h1 className="section-title mt-4 mb-6">
              Galeri Dokumentasi Satuan
            </h1>
            <p className="section-subtitle">
              Koleksi dokumentasi visual kegiatan, acara, dan momen bersejarah Batalyon Zeni Tempur 9 / Lang Lang Bhuwana yang mencerminkan dedikasi dan profesionalisme.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? 'filter-btn-active' : 'filter-btn-inactive'}
              >
                {cat}
              </button>
            ))}

            {(activeCategory !== 'Semua' || searchQuery.trim()) && (
              <button
                onClick={() => {
                  setActiveCategory('Semua');
                  setSearchQuery('');
                }}
                className="filter-btn-inactive"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="max-w-xl mx-auto mb-8 md:mb-10">
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Cari foto, kategori, atau deskripsi..."
              className="input-base"
              aria-label="Cari galeri"
            />
          </div>

          <p className="text-center text-sm text-slate-500 mb-6">
            Menampilkan <span className="font-bold text-slate-700">{filteredGallery.length}</span> dari <span className="font-bold text-slate-700">{galleryData.length}</span> dokumentasi
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Gallery Grid */}
              <div className="news-grid stagger-children">
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    className="card-interactive group"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="gallery-item">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="gallery-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="gallery-overlay"></div>

                      {/* Overlay Content */}
                      <div className="overlay-dark flex flex-col justify-end p-6">
                        <h3 className="text-white font-bold text-lg truncate">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm mt-1">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6 md:space-y-8 lg:sticky lg:top-28 h-fit">
              <PopularCategoriesWidget
                categories={categories}
                newsData={galleryData}
                onCategorySelect={(category) => {
                  setActiveCategory(category);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </aside>
          </div>

          {/* Empty State */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Kategori Kosong
              </h3>
              <p className="text-slate-500">
                Tidak ada galeri untuk kategori yang dipilih.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau galeri"
        >
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            {filteredGallery.length > 1 && (
              <>
                <button
                  onClick={showPrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full flex-center hover:bg-white transition-all shadow-lg"
                  aria-label="Gambar sebelumnya"
                >
                  <ChevronLeft size={20} className="text-slate-900" />
                </button>

                <button
                  onClick={showNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full flex-center hover:bg-white transition-all shadow-lg"
                  aria-label="Gambar berikutnya"
                >
                  <ChevronRight size={20} className="text-slate-900" />
                </button>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex-center hover:bg-slate-100 transition-all shadow-lg"
              aria-label="Tutup pratinjau"
            >
              <X size={20} className="text-slate-900" />
            </button>

            {/* Image */}
            <div className="relative h-[400px] md:h-[600px] bg-slate-100">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="img-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 bg-white">
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                {selectedImage.title}
              </h3>
              <p className="text-slate-500 mb-4">
                {selectedImage.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  {selectedImage.category}
                </span>
                <span>{selectedImage.date}</span>
                {currentIndex >= 0 && (
                  <span className="font-semibold text-slate-700">
                    {currentIndex + 1}/{filteredGallery.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/Badge';
import { galleryData } from '@/lib/content';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const uniqueCategories = [...new Set(galleryData.map((item) => item.category))];

  const categories = ['Semua', ...uniqueCategories];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredGallery =
    activeCategory === 'Semua'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="page-content">
      <Navbar />

      {/* Header */}
      <div className="page-header bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto section-spacing">
          <div className="section-header max-w-2xl mx-auto">
            <Badge variant="primary">Dokumentasi Visual</Badge>
            <h1 className="section-title mt-4 mb-6">
              Galeri Lang Lang Bhuwana
            </h1>
            <p className="section-subtitle">
              Koleksi dokumentasi kegiatan, acara, dan momen bersejarah Batalion
              Lang Lang Bhuwana yang mencerminkan dedikasi dan profesionalisme.
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
          </div>

          {/* Gallery Grid */}
          <div className="news-grid">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="card-interactive"
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
        >
          <div className="modal-content">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex-center hover:bg-slate-100 transition-all shadow-lg"
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
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

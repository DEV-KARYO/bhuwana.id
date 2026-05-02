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
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="primary">Dokumentasi Visual</Badge>
            <h1 className="text-4xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
              Galeri Lang Lang Bhuwana
            </h1>
            <p className="text-slate-500 leading-relaxed">
              Koleksi dokumentasi kegiatan, acara, dan momen bersejarah Batalion
              Lang Lang Bhuwana yang mencerminkan dedikasi dan profesionalisme.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 flex-wrap mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-950 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <h3 className="text-white font-bold text-lg">
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
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-slate-100 transition-all shadow-lg"
            >
              <X size={20} className="text-slate-900" />
            </button>

            {/* Image */}
            <div className="relative h-[600px] bg-slate-100">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>

            {/* Info */}
            <div className="p-8 bg-white">
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

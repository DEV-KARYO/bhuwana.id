import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import NewsHighlight from '@/components/NewsHighlight';

export const metadata = {
  title: 'Beranda - Batalyon Zeni Tempur 9 / Lang Lang Bhuwana',
  description:
    'Halaman utama portal informasi Batalyon Zeni Tempur 9 / Lang Lang Bhuwana. Akses berita, struktur pimpinan, dan galeri dokumentasi resmi.',
};

export default function Home() {
  return (
    <div className="page-content">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <NewsHighlight />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import NewsHighlight from '@/components/NewsHighlight';

export const metadata = {
  title: 'Beranda - Lang Lang Bhuwana Portal',
  description:
    'Halaman utama portal informasi Batalion Lang Lang Bhuwana. Akses berita, struktur pimpinan, dan galeri dokumentasi resmi.',
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

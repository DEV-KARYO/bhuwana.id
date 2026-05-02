import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import NewsHighlight from '@/components/NewsHighlight';

export const metadata = {
  title: 'Beranda - Lang Lang Bhuwana Portal',
  description:
    'Halaman utama portalinformasi Batalion Lang Lang Bhuwana. Akses berita, struktur pimpinan, dan galeri dokumentasi resmi.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="mt-20">
        <HeroSection />
        <ServicesSection />
        <NewsHighlight />
      </main>
      <Footer />
    </div>
  );
}

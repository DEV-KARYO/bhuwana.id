```react
import React, { useState, useEffect } from 'react';
import { 
  Search, Menu, X, ChevronRight, Calendar, MapPin, 
  User, Newspaper, Image as ImageIcon, Users, 
  ArrowRight, Filter, Clock, ExternalLink, ChevronLeft,
  ShieldCheck, FileText, Globe, Info, Phone, Mail,
  ArrowUpRight, Share2, Printer, Download, Trophy, Heart
} from 'lucide-react';

// --- UI Components ---

const Badge = ({ children, variant = 'default' }) => {
  const styles = {
    default: 'bg-slate-100 text-slate-700',
    primary: 'bg-indigo-50 text-indigo-700',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const base = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl active:scale-95";
  const variants = {
    primary: "bg-indigo-950 text-white hover:bg-indigo-900 shadow-lg shadow-indigo-900/10",
    secondary: "bg-white text-indigo-950 border border-slate-200 hover:border-indigo-950/20 hover:bg-slate-50",
    ghost: "text-slate-600 hover:text-indigo-950 hover:bg-slate-100",
    white: "bg-white text-indigo-950 hover:shadow-xl"
  };
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };
  
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- Application Core ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedNews, setSelectedNews] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page, data = null) => {
    setCurrentPage(page);
    setSelectedNews(data);
    setIsMenuOpen(false);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mock Data Specific to Batalion Lang Lang Bhuwana
  const news = [
    {
      id: 1,
      title: "Bakti Sosial Lang Lang Bhuwana: Pengabdian untuk Masyarakat Desa",
      excerpt: "Program rutin bantuan kesehatan dan renovasi fasilitas umum di wilayah binaan sebagai wujud nyata kemanunggalan institusi.",
      date: "14 Mei 2024",
      category: "Sosial",
      image: "https://images.unsplash.com/photo-1469571483357-598e0445e54c?q=80&w=1200"
    },
    {
      id: 2,
      title: "Prestasi Olahraga: Tim Atletik Batalion Raih Juara Umum Nasional",
      excerpt: "Konsistensi dalam pembinaan fisik membuahkan hasil gemilang pada kompetisi olahraga antar instansi tingkat nasional.",
      date: "12 Mei 2024",
      category: "Prestasi",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1200"
    },
    {
      id: 3,
      title: "Inovasi Digital: Peluncuran Sistem Administrasi Terpadu",
      excerpt: "Modernisasi proses internal untuk mempercepat alur informasi dan koordinasi antar unit di lingkungan Lang Lang Bhuwana.",
      date: "10 Mei 2024",
      category: "Inovasi",
      image: "https://images.unsplash.com/photo-1454165833767-027ffec95c18?q=80&w=1200"
    }
  ];

  // --- Sub-sections ---

  const Navbar = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || currentPage !== 'home' 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => navigateTo('home')}
        >
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${
            scrolled || currentPage !== 'home' ? 'bg-indigo-950 rotate-0' : 'bg-white rotate-[-5deg] group-hover:rotate-0'
          }`}>
            <ShieldCheck className={scrolled || currentPage !== 'home' ? 'text-white' : 'text-indigo-950'} size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-black tracking-tight leading-none ${
              scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'
            }`}>LANG LANG BHUWANA</span>
            <span className={`text-[9px] font-bold tracking-[0.3em] leading-none mt-1 ${
              scrolled || currentPage !== 'home' ? 'text-indigo-600' : 'text-indigo-300'
            }`}>PORTAL INFORMASI RESMI</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {[
            { id: 'home', label: 'Beranda' },
            { id: 'news', label: 'Warta' },
            { id: 'events', label: 'Kegiatan' },
            { id: 'structure', label: 'Pimpinan' },
            { id: 'gallery', label: 'Galeri' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`text-sm font-bold transition-all relative py-1 ${
                currentPage === item.id 
                  ? (scrolled || currentPage !== 'home' ? 'text-indigo-950' : 'text-white') 
                  : (scrolled || currentPage !== 'home' ? 'text-slate-500 hover:text-indigo-950' : 'text-white/70 hover:text-white')
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full animate-in zoom-in duration-300 ${
                  scrolled || currentPage !== 'home' ? 'bg-indigo-950' : 'bg-white'
                }`}></span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSearchOpen(true)}
            className={`p-2.5 rounded-xl transition-colors ${
              scrolled || currentPage !== 'home' ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Search size={20} />
          </button>
          <button 
            className="lg:hidden p-2.5 rounded-xl bg-indigo-950 text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
          <Button variant={scrolled || currentPage !== 'home' ? 'primary' : 'white'} size="sm" className="hidden lg:flex">
            Layanan Informasi
          </Button>
        </div>
      </div>
    </nav>
  );

  const HomeHero = () => (
    <section className="relative h-[95vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          alt="Formal Meeting"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-transparent to-slate-900"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-indigo-100 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest mb-8 animate-in slide-in-from-bottom duration-700">
            <Globe size={14} /> Kredibilitas & Pengabdian
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 animate-in slide-in-from-bottom duration-700 delay-100 tracking-tight">
            Lang Lang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Bhuwana.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl animate-in slide-in-from-bottom duration-700 delay-200">
            Wadah informasi resmi Batalion Lang Lang Bhuwana. Berkomitmen pada profesionalisme, transparansi publik, dan kemajuan bangsa melalui integritas tinggi.
          </p>
          <div className="flex flex-wrap gap-5 animate-in slide-in-from-bottom duration-700 delay-300">
            <Button size="lg" onClick={() => navigateTo('news')}>
              Jelajahi Warta <ArrowUpRight className="ml-2" size={20} />
            </Button>
            <Button variant="secondary" size="lg" className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/20">
              Agenda Mendatang
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-10 text-white/40 text-[10px] font-bold uppercase tracking-[0.5em] vertical-text hidden xl:block">
        EST. 1945 — INTEGRITY FIRST
      </div>
    </section>
  );

  const HomeServices = () => (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
          {[
            { icon: <Heart />, title: "Bakti Sosial", desc: "Komitmen kami untuk selalu hadir di tengah masyarakat melalui berbagai program kemanusiaan." },
            { icon: <Trophy />, title: "Prestasi Institusi", desc: "Menjaga kehormatan melalui pencapaian tertinggi dalam setiap penugasan dan kompetisi." },
            { icon: <ShieldCheck />, title: "Integritas Formal", desc: "Menjalankan fungsi institusi dengan standar etika dan transparansi yang tidak tertandingi." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-2xl shadow-indigo-900/5 border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 bg-slate-50 text-indigo-950 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-950 group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Badge variant="primary">Visi & Misi</Badge>
            <h2 className="text-4xl font-black text-slate-900 mt-6 mb-8 tracking-tight">Menjadi Pilar Utama yang Profesional & Modern</h2>
            <div className="space-y-6">
              {[
                { t: "Kehormatan adalah Segala", d: "Menjaga nama baik Lang Lang Bhuwana dalam setiap langkah pelayanan publik." },
                { t: "Profesionalisme Tanpa Batas", d: "Peningkatan kompetensi personel secara berkelanjutan melalui pelatihan modern." },
                { t: "Sinergi Nasional", d: "Membangun kolaborasi harmonis dengan instansi pemerintah dan elemen masyarakat." }
              ].map((val, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{val.t}</h4>
                    <p className="text-slate-500 text-sm mt-1">{val.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800" className="w-full h-full object-cover" alt="Formal Presentation" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-indigo-950 p-8 rounded-3xl text-white shadow-2xl hidden md:block border-8 border-white">
                <div className="text-4xl font-black mb-1">A+</div>
                <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">Akreditasi Pelayanan</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );

  const NewsPage = () => (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Badge variant="primary">Pusat Warta</Badge>
              <h1 className="text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">Kabar Lang Lang Bhuwana</h1>
              <p className="text-slate-500 leading-relaxed">
                Informasi aktual mengenai operasional, kegiatan sosial, dan pencapaian resmi Batalion.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" className="!rounded-full"><Download size={18} className="mr-2" /> Buletin</Button>
              <Button variant="primary" className="!rounded-full"><Share2 size={18} /></Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 space-y-8">
            {news.map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-[32px] overflow-hidden border border-slate-100 flex flex-col md:flex-row group cursor-pointer hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                onClick={() => navigateTo('news-detail', item)}
              >
                <div className="md:w-2/5 relative overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  <div className="absolute top-6 left-6">
                    <Badge variant="primary">{item.category}</Badge>
                  </div>
                </div>
                <div className="md:w-3/5 p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</span>
                      <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                      <span className="flex items-center gap-1.5"><User size={14} /> Penerangan Satuan</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.excerpt}</p>
                  </div>
                  <button className="text-indigo-950 font-bold text-sm flex items-center group-hover:gap-3 transition-all">
                    Selengkapnya <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100">
              <h4 className="font-black text-slate-900 mb-6">Kategori Warta</h4>
              <div className="space-y-2">
                {['Kegiatan Sosial', 'Prestasi', 'Inovasi Satuan', 'Pengumuman Resmi'].map(cat => (
                  <button key={cat} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm transition-all group text-left">
                    {cat} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-950 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 p-4 opacity-10">
                <ShieldCheck size={120} />
              </div>
              <h4 className="font-bold text-lg mb-4 relative z-10">E-Magazine</h4>
              <p className="text-indigo-200 text-xs leading-relaxed mb-6 relative z-10">Unduh majalah digital bulanan kami untuk ulasan kegiatan mendalam.</p>
              <Button variant="white" size="sm" className="w-full">Unduh Edisi Mei</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'home': 
        return (
          <>
            <HomeHero />
            <HomeServices />
            <section className="py-24 bg-slate-50">
              <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-16">
                  <div>
                    <Badge variant="primary">Update Terkini</Badge>
                    <h2 className="text-4xl font-black text-slate-900 mt-4 tracking-tight">Lensa Lang Lang Bhuwana</h2>
                  </div>
                  <Button variant="ghost" onClick={() => navigateTo('news')}>
                    Lihat Semua Warta <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {news.map(item => (
                     <div 
                      key={item.id} 
                      className="bg-white rounded-[32px] overflow-hidden border border-slate-100 group cursor-pointer hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                      onClick={() => navigateTo('news-detail', item)}
                     >
                        <div className="h-60 overflow-hidden relative">
                           <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.title} />
                           <div className="absolute top-6 left-6">
                              <Badge variant="primary">{item.category}</Badge>
                           </div>
                        </div>
                        <div className="p-8">
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{item.date}</p>
                           <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors line-clamp-2">{item.title}</h3>
                           <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{item.excerpt}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'news': return <NewsPage />;
      case 'news-detail': return <NewsDetail data={selectedNews} />;
      case 'structure':
        return (
          <div className="pt-24 min-h-screen bg-slate-50 py-20">
             <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                   <Badge variant="primary">Kepemimpinan Satuan</Badge>
                   <h1 className="text-4xl font-black text-slate-900 mt-4 mb-6">Pimpinan Batalion</h1>
                   <p className="text-slate-500">Mengenal lebih dekat jajaran pimpinan yang berdedikasi tinggi dalam memajukan Lang Lang Bhuwana.</p>
                </div>
                <div className="flex justify-center mb-16">
                  <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-2xl shadow-slate-200/50 text-center max-w-sm w-full group hover:border-indigo-600 transition-all duration-500">
                    <div className="w-28 h-28 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-inner overflow-hidden">
                       <User size={48} className="text-slate-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Letkol Inf. Pratama Wijaya</h3>
                    <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-6">Komandan Batalion</p>
                    <div className="pt-6 border-t border-slate-100 flex justify-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 cursor-pointer transition-all"><Mail size={16} /></div>
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 cursor-pointer transition-all"><ExternalLink size={16} /></div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        );
      default: 
        return (
          <div className="pt-40 text-center container mx-auto px-6 h-[80vh]">
             <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Info className="text-indigo-950" size={32} />
             </div>
             <h2 className="text-3xl font-black text-slate-900 mb-4">Halaman Sedang Dikembangkan</h2>
             <p className="text-slate-500 mb-10">Mohon maaf, halaman ini sedang dalam proses pemutakhiran data resmi.</p>
             <Button onClick={() => navigateTo('home')}>Kembali ke Beranda</Button>
          </div>
        );
    }
  };

  // Shared NewsDetail Logic (re-using the professional style from previous iteration)
  const NewsDetail = ({ data }) => (
    <div className="bg-white min-h-screen pb-24">
      <div className="relative h-[60vh] overflow-hidden">
        <img src={data.image} className="w-full h-full object-cover" alt={data.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-6">
             <button onClick={() => navigateTo('news')} className="inline-flex items-center text-indigo-950 font-bold text-sm mb-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white transition-all">
                <ChevronLeft size={16} className="mr-2" /> Kembali
             </button>
             <h1 className="text-4xl md:text-6xl font-black text-slate-900 max-w-4xl tracking-tight leading-[1.1]">
               {data.title}
             </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-6 pb-10 border-b border-slate-100 mb-10">
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400"><User /></div>
               <div><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Penulis</p><p className="font-bold text-slate-900">Penerangan Satuan</p></div>
             </div>
             <div className="h-8 w-px bg-slate-200"></div>
             <div><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kategori</p><p className="font-bold text-slate-900">{data.category}</p></div>
          </div>
          <article className="prose prose-slate prose-lg text-slate-700 leading-relaxed">
            <p className="text-xl font-medium text-slate-900 mb-8">{data.excerpt}</p>
            <p>Batalion Lang Lang Bhuwana senantiasa mengedepankan keterbukaan informasi. Setiap kegiatan yang kami laksanakan merupakan bentuk pertanggungjawaban moral dan profesional kepada bangsa. Melalui program ini, kami berharap dapat mempererat tali silaturahmi dengan seluruh komponen bangsa demi terciptanya sinergi yang harmonis.</p>
            <div className="my-10 p-8 bg-slate-50 rounded-3xl border-l-4 border-indigo-900 italic font-medium text-slate-800">
               "Dedikasi adalah fondasi, integritas adalah jiwa. Lang Lang Bhuwana hadir sebagai pelindung dan pengayom yang profesional."
            </div>
            <p>Terima kasih atas dukungan masyarakat yang terus menjadi penyemangat bagi kami untuk memberikan yang terbaik.</p>
          </article>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif] selection:bg-indigo-950 selection:text-white">
      <Navbar />
      <main>{renderContent()}</main>
      <footer className="bg-slate-950 text-white pt-32 pb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-indigo-500/5 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  <ShieldCheck className="text-indigo-950" size={26} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight leading-none">LANG LANG BHUWANA</span>
                  <span className="text-[10px] font-bold tracking-[0.3em] leading-none text-indigo-400 mt-1 uppercase">Republik Indonesia</span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-10 text-sm">
                Portal resmi Batalion Lang Lang Bhuwana. Menjaga kedaulatan, integritas, dan pengabdian melalui profesionalisme tinggi.
              </p>
              <div className="flex gap-3">
                {[1, 2, 3].map(x => (
                  <div key={x} className="w-11 h-11 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer group">
                    <div className="w-5 h-5 bg-white/20 rounded-lg group-hover:bg-white transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8">Navigasi</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                {['Beranda', 'Warta & Pengumuman', 'Struktur Pimpinan', 'Agenda Satuan', 'Galeri Dokumentasi'].map(li => (
                  <li key={li} className="hover:text-white transition-colors cursor-pointer flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8">Informasi</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                {['Laporan Publik', 'Kebijakan Privasi', 'Transparansi', 'Karir & Penerimaan', 'Kontak Hubmas'].map(li => (
                  <li key={li} className="hover:text-white transition-colors cursor-pointer flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div>
               <h4 className="font-bold text-lg mb-8">Hubungi Kami</h4>
               <div className="space-y-6 text-sm text-slate-400">
                  <div className="flex gap-4">
                     <MapPin className="text-indigo-400 shrink-0" size={20} />
                     <p className="leading-relaxed">Ksatrian Lang Lang Bhuwana, Jakarta, Indonesia</p>
                  </div>
                  <div className="flex gap-4">
                     <Phone className="text-indigo-400 shrink-0" size={20} />
                     <p>+62 21 1234 5678</p>
                  </div>
                  <div className="flex gap-4">
                     <Mail className="text-indigo-400 shrink-0" size={20} />
                     <p>hubmas@langlangbhuwana.go.id</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <p>© 2024 BATALION LANG LANG BHUWANA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
               <span className="hover:text-indigo-400 cursor-pointer transition-colors">Disclaimer</span>
               <span className="hover:text-indigo-400 cursor-pointer transition-colors">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-indigo-950/40 backdrop-blur-md flex items-start justify-center pt-32 px-6 animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-4 flex items-center gap-4 border-b border-slate-100">
                <Search className="text-slate-400 ml-4" />
                <input autoFocus type="text" placeholder="Cari warta atau pengumuman..." className="w-full py-4 text-lg font-medium outline-none text-slate-900 placeholder:text-slate-300" />
                <button onClick={() => setSearchOpen(false)} className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all text-slate-500"><X size={20} /></button>
              </div>
              <div className="p-8"><p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Pencarian Populer</p><div className="flex flex-wrap gap-2">{['Kegiatan Mei', 'Struktur Pimpinan', 'Inovasi Digital'].map(tag => (<span key={tag} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold border border-slate-100 cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 transition-all">{tag}</span>))}</div></div>
           </div>
        </div>
      )}
      <style>{`
        @keyframes slow-zoom { 0% { transform: scale(1.05); } 100% { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        .vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); }
      `}</style>
    </div>
  );
};

export default App;

```

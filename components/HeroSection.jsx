import Link from 'next/link';
import Image from 'next/image';
import { Globe, ArrowUpRight } from 'lucide-react';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden bg-slate-900 pt-12 md:pt-24">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 scale-105 animate-slow-zoom"
          alt="Formal Meeting"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-transparent to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto section-spacing relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-indigo-100 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 animate-slide-in-from-bottom">
            <Globe size={14} /> Kredibilitas & Pengabdian
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 md:mb-8 animate-slide-in-from-bottom [animation-delay:100ms] tracking-tight">
            Lang Lang <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Bhuwana.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-12 leading-relaxed max-w-2xl animate-slide-in-from-bottom [animation-delay:200ms]">
            Wadah informasi resmi Batalion Lang Lang Bhuwana. Berkomitmen pada
            profesionalisme, transparansi publik, dan kemajuan bangsa melalui
            integritas tinggi.
          </p>

          {/* Buttons */}
          <div className="btn-group animate-slide-in-from-bottom [animation-delay:300ms]">
            <Link href="/news" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto justify-center">
                Jelajahi Warta <ArrowUpRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/news" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto justify-center !bg-white/10 !border-white/20 !text-white !backdrop-blur-sm hover:!bg-white/20"
              >
                Agenda Mendatang
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Vertical Text - Hidden on mobile */}
      <div className="absolute bottom-8 left-6 md:bottom-10 md:left-10 text-white text-xs md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] hidden lg:block vertical-text">
        EST. 1945 — INTEGRITY FIRST
      </div>
    </section>
  );
}

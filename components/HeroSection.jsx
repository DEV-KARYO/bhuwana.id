import Link from 'next/link';
import Image from 'next/image';
import { Globe, ArrowUpRight } from 'lucide-react';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative h-[95vh] flex items-center overflow-hidden bg-slate-900 pt-24">
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-indigo-100 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest mb-8 animate-slide-in-from-bottom duration-700">
            <Globe size={14} /> Kredibilitas & Pengabdian
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 animate-slide-in-from-bottom duration-700 [animation-delay:100ms] tracking-tight">
            Lang Lang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Bhuwana.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl animate-slide-in-from-bottom duration-700 [animation-delay:200ms]">
            Wadah informasi resmi Batalion Lang Lang Bhuwana. Berkomitmen pada
            profesionalisme, transparansi publik, dan kemajuan bangsa melalui
            integritas tinggi.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 animate-slide-in-from-bottom duration-700 [animation-delay:300ms]">
            <Link href="/news">
              <Button size="lg">
                Jelajahi Warta <ArrowUpRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="!bg-white/10 !border-white/20 !text-white !backdrop-blur-sm hover:!bg-white/20"
            >
              Agenda Mendatang
            </Button>
          </div>
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute bottom-10 left-10 text-white/40 text-[10px] font-bold uppercase tracking-[0.5em] vertical-text hidden xl:block">
        EST. 1945 — INTEGRITY FIRST
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Heart, Trophy, ShieldCheck } from 'lucide-react';
import Badge from './Badge';

const services = [
  {
    icon: Heart,
    title: 'Bakti Sosial',
    description:
      'Komitmen kami untuk selalu hadir di tengah masyarakat melalui berbagai program kemanusiaan.',
  },
  {
    icon: Trophy,
    title: 'Prestasi Institusi',
    description:
      'Menjaga kehormatan melalui pencapaian tertinggi dalam setiap penugasan dan kompetisi.',
  },
  {
    icon: ShieldCheck,
    title: 'Integritas Formal',
    description:
      'Menjalankan fungsi institusi dengan standar etika dan transparansi yang tidak tertandingi.',
  },
];

const values = [
  {
    title: 'Kehormatan adalah Segala',
    description:
      'Menjaga nama baik Lang Lang Bhuwana dalam setiap langkah pelayanan publik.',
  },
  {
    title: 'Profesionalisme Tanpa Batas',
    description:
      'Peningkatan kompetensi personel secara berkelanjutan melalui pelatihan modern.',
  },
  {
    title: 'Sinergi Nasional',
    description:
      'Membangun kolaborasi harmonis dengan instansi pemerintah dan elemen masyarakat.',
  },
];

export default function ServicesSection() {
  return (
    <section className="page-section bg-white relative">
      <div className="container mx-auto section-spacing">
        {/* Service Cards - compact layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 relative z-20 reveal-up">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="card-elevated p-4 md:p-6 hover-lift flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-slate-50 text-indigo-950 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-950 group-hover:text-white transition-colors duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-snug">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision & Mission Section - compact spacing */}
        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-8 md:gap-12 items-start reveal-up-delayed">
          {/* Left Column - Text */}
          <div>
            <Badge variant="primary">Visi & Misi</Badge>
            <h2 className="section-title mt-4 md:mt-6 mb-6 md:mb-8">
              Menjadi Pilar Utama yang Profesional & Modern
            </h2>
            <div className="space-y-6">
              {values.map((val, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{val.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image (smaller) */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg relative">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
                alt="Formal Presentation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-indigo-950 p-4 rounded-2xl text-white shadow-lg hidden md:flex flex-col items-center border-4 border-white">
              <div className="text-2xl font-extrabold mb-0">A+</div>
              <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mt-1">
                Akreditasi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

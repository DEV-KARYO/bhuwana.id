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
        {/* Service Cards */}
        <div className="news-grid -mt-24 md:-mt-32 relative z-20 stagger-children">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="card-elevated p-6 md:p-10 hover-lift"
              >
                <div className="w-14 h-14 bg-slate-50 text-indigo-950 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-950 group-hover:text-white transition-colors duration-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision & Mission Section */}
        <div className="mt-24 md:mt-32 grid lg:grid-cols-2 gap-12 md:gap-20 items-start reveal-up-delayed">
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

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
                alt="Formal Presentation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-indigo-950 p-8 rounded-3xl text-white shadow-2xl hidden md:block border-8 border-white">
              <div className="text-4xl font-black mb-1">A+</div>
              <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">
                Akreditasi Pelayanan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

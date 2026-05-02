import Image from 'next/image';
import { Mail, ExternalLink, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/Badge';
import { leadershipData } from '@/lib/content';

export const metadata = {
  title: 'Pimpinan - Lang Lang Bhuwana Portal',
  description: 'Struktur kepemimpinan dan jajaran pimpinan Batalion Lang Lang Bhuwana.',
};

export default function StructurePage() {
  return (
    <div className="page-content">
      <Navbar />

      {/* Header */}
      <div className="page-header min-h-[70vh] md:min-h-[80vh] py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white flex items-center">
        <div className="container mx-auto section-spacing w-full">
          {/* Title */}
          <div className="section-header max-w-2xl mx-auto">
            <Badge variant="primary">Kepemimpinan Satuan</Badge>
            <h1 className="section-title mt-4 mb-6">
              Pimpinan Batalion
            </h1>
            <p className="section-subtitle">
              Mengenal lebih dekat jajaran pimpinan yang berdedikasi tinggi dalam
              memajukan Lang Lang Bhuwana menuju masa depan yang gemilang.
            </p>
          </div>
        </div>
      </div>

      <main className="page-section">
        <div className="container mx-auto section-spacing">
          {/* Leadership Grid */}
          <div className="news-grid mb-16 md:mb-20">
            {leadershipData.map((leader) => (
              <div
                key={leader.id}
                className="card-elevated p-6 md:p-10 flex flex-col h-full hover:border-indigo-600"
              >
                {/* Avatar */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-indigo-100 to-slate-100 rounded-full mx-auto mb-6 md:mb-8 flex-center border-4 border-white shadow-inner">
                  <User size={48} className="text-slate-300" />
                </div>

                {/* Name */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 text-center">
                  {leader.name}
                </h3>

                {/* Position */}
                <p className="text-indigo-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-6 text-center">
                  {leader.position}
                </p>

                {/* Bio */}
                <p className="text-slate-500 text-sm leading-relaxed mb-auto pb-6 flex-grow">
                  {leader.bio}
                </p>

                {/* Divider */}
                <div className="border-t border-slate-100"></div>

                {/* Contact Links */}
                <div className="flex justify-center gap-3 mt-6">
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-10 h-10 bg-slate-50 rounded-xl flex-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <button className="w-10 h-10 bg-slate-50 rounded-xl flex-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Organization Info */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left */}
            <div>
              <Badge variant="primary">Struktur Organisasi</Badge>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
                Kepemimpinan Bertingkat
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Batalion Lang Lang Bhuwana memiliki struktur kepemimpinan yang
                jelas dan profesional, dengan divisi tugas yang efisien untuk
                memastikan operasional yang optimal.
              </p>
              <div className="list-spaced">
                {[
                  {
                    title: 'Komandan Batalion',
                    desc: 'Pemimpin utama bertanggung jawab atas seluruh operasional',
                  },
                  {
                    title: 'Wakil Komandan',
                    desc: 'Membantu dan menggantikan komandan dalam tugas-tugas strategis',
                  },
                  {
                    title: 'Kepala Staf Operasional',
                    desc: 'Mengelola perencanaan dan koordinasi antar unit kerja',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Organizational Chart Visualization */}
            <div className="card-elevated p-6 md:p-10">
              <h3 className="font-bold text-slate-900 mb-8 text-lg">
                Hierarki Struktural
              </h3>

              <div className="space-y-6">
                {/* Top Level */}
                <div className="flex justify-center">
                  <div className="bg-indigo-950 text-white px-4 md:px-6 py-3 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap">
                    Komandan Batalion
                  </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-slate-300"></div>
                </div>

                {/* Second Level */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                  <div className="bg-indigo-100 text-indigo-950 px-4 py-2 rounded-xl font-bold text-xs border border-indigo-200 whitespace-nowrap">
                    Wakil Komandan
                  </div>
                  <div className="bg-indigo-100 text-indigo-950 px-4 py-2 rounded-xl font-bold text-xs border border-indigo-200 whitespace-nowrap">
                    Kepala Staf
                  </div>
                </div>

                {/* Message */}
                <div className="text-center text-slate-500 text-xs italic mt-8 pt-8 border-t border-slate-200">
                  Struktur lengkap tersedia di laporan organisasi resmi
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

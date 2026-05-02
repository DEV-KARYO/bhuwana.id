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
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <div className="pt-24 min-h-screen py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Badge variant="primary">Kepemimpinan Satuan</Badge>
            <h1 className="text-4xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
              Pimpinan Batalion
            </h1>
            <p className="text-slate-500 leading-relaxed">
              Mengenal lebih dekat jajaran pimpinan yang berdedikasi tinggi dalam
              memajukan Lang Lang Bhuwana menuju masa depan yang gemilang.
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {leadershipData.map((leader) => (
              <div
                key={leader.id}
                className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-lg hover:shadow-2xl hover:border-indigo-600 transition-all duration-500 group flex flex-col h-full"
              >
                {/* Avatar */}
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-slate-100 rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-white shadow-inner overflow-hidden">
                  <User size={56} className="text-slate-300" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-slate-900 mb-1 text-center">
                  {leader.name}
                </h3>

                {/* Position */}
                <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-6 text-center">
                  {leader.position}
                </p>

                {/* Bio */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {leader.bio}
                </p>

                {/* Divider */}
                <div className="pt-6 border-t border-slate-100"></div>

                {/* Contact Links */}
                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer transition-all duration-300"
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <button className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer transition-all duration-300">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Organization Info */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <Badge variant="primary">Struktur Organisasi</Badge>
              <h2 className="text-3xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
                Kepemimpinan Bertingkat
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Batalion Lang Lang Bhuwana memiliki struktur kepemimpinan yang
                jelas dan profesional, dengan divisi tugas yang efisien untuk
                memastikan operasional yang optimal.
              </p>
              <div className="space-y-4">
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
                    <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
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
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-8 text-lg">
                Hierarki Struktural
              </h3>

              <div className="space-y-6">
                {/* Top Level */}
                <div className="flex justify-center">
                  <div className="bg-indigo-950 text-white px-6 py-3 rounded-xl font-bold text-sm">
                    Komandan Batalion
                  </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-slate-300"></div>
                </div>

                {/* Second Level */}
                <div className="flex justify-center gap-8">
                  <div className="bg-indigo-100 text-indigo-950 px-6 py-3 rounded-xl font-bold text-sm border border-indigo-200">
                    Wakil Komandan
                  </div>
                  <div className="bg-indigo-100 text-indigo-950 px-6 py-3 rounded-xl font-bold text-sm border border-indigo-200">
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
      </div>

      <Footer />
    </div>
  );
}

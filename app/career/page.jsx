import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalPageTemplate from '@/components/LegalPageTemplate';
import { Briefcase, Users, Award, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Karir & Penerimaan - Lang Lang Bhuwana',
  description: 'Informasi karir, penerimaan, dan pengembangan sumber daya manusia Batalion Lang Lang Bhuwana.',
};

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageTemplate 
          title="Karir & Penerimaan" 
          subtitle="Bergabunglah dengan Batalion Lang Lang Bhuwana dan berkontribusi bagi bangsa"
          breadcrumb="Karir & Penerimaan"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Peluang Karir Kami</h2>
              <p className="text-slate-700 leading-relaxed">
                Batalion Lang Lang Bhuwana adalah institusi yang mengembangkan talenta terbaik bangsa. Kami mencari individu berdedikasi tinggi yang siap memberikan pengabdian profesional dan berbakti untuk kemajuan institusi dan negara.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nilai-Nilai Kami dalam Rekrutmen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-4">
                    <Award className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Integritas</h3>
                      <p className="text-slate-700 text-sm">Kami mencari kandidat dengan integritas moral yang tinggi dan komitmen pada nilai-nilai etis.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-4">
                    <Briefcase className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Profesionalisme</h3>
                      <p className="text-slate-700 text-sm">Standar profesional tinggi dan kompetensi yang relevan dengan posisi yang dibuka.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-4">
                    <Users className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Kerjasama Tim</h3>
                      <p className="text-slate-700 text-sm">Kemampuan bekerja dalam tim yang kohesif dan saling mendukung.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-4">
                    <Award className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Pengembangan Berkelanjutan</h3>
                      <p className="text-slate-700 text-sm">Dedikasi untuk pembelajaran dan peningkatan kompetensi secara berkelanjutan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Jenis-jenis Posisi</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-indigo-600 bg-indigo-50 rounded">
                  <h3 className="font-semibold text-slate-900 mb-1">Posisi Operasional</h3>
                  <p className="text-slate-700 text-sm">Peran yang menjalankan misi utama institusi dengan kompetensi teknis dan operasional khusus.</p>
                </div>

                <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                  <h3 className="font-semibold text-slate-900 mb-1">Posisi Administratif</h3>
                  <p className="text-slate-700 text-sm">Fungsi penunjang yang mendukung operasional institusi secara efisien.</p>
                </div>

                <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded">
                  <h3 className="font-semibold text-slate-900 mb-1">Posisi Kepemimpinan</h3>
                  <p className="text-slate-700 text-sm">Peran strategis yang memimpin dan mengarahkan unit atau departemen institusi.</p>
                </div>

                <div className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded">
                  <h3 className="font-semibold text-slate-900 mb-1">Magang & Kemitraan</h3>
                  <p className="text-slate-700 text-sm">Program pengembangan talenta muda dan kemitraan akademis dengan institusi pendidikan.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Persyaratan Umum</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Kualifikasi Dasar</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Warga Negara Indonesia dengan status administrasi yang jelas</li>
                    <li>Tingkat pendidikan sesuai dengan persyaratan posisi</li>
                    <li>Kesehatan fisik dan mental yang memenuhi standar institusi</li>
                    <li>Tidak memiliki catatan kriminal atau masalah hukum</li>
                    <li>Bersedia menjalani pemeriksaan latar belakang (background check)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Kompetensi Khusus</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Setiap posisi mungkin memiliki persyaratan kompetensi khusus termasuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Keahlian teknis atau profesional tertentu</li>
                    <li>Pengalaman kerja yang relevan</li>
                    <li>Sertifikasi atau lisensi profesional</li>
                    <li>Kemampuan bahasa asing (jika diperlukan)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Proses Rekrutmen</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Pengumuman & Pendaftaran</h3>
                    <p className="text-slate-700 text-sm">Lowongan dipublikasikan melalui saluran resmi dengan deadline pendaftaran yang jelas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Seleksi Administratif</h3>
                    <p className="text-slate-700 text-sm">Verifikasi kelengkapan berkas dan kesesuaian dengan persyaratan dasar.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Tes Kompetensi</h3>
                    <p className="text-slate-700 text-sm">Evaluasi kemampuan dan kompetensi teknis melalui tes tertulis dan praktik.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Wawancara</h3>
                    <p className="text-slate-700 text-sm">Wawancara dengan panel untuk mengevaluasi kualifikasi dan kesesuaian budaya institusi.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Pemeriksaan Latar Belakang</h3>
                    <p className="text-slate-700 text-sm">Verifikasi latar belakang, riwayat pendidikan, dan catatan kesehatan.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">6</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Penawaran & Orientasi</h3>
                    <p className="text-slate-700 text-sm">Calon yang diterima menerima penawaran resmi dan menjalani program orientasi.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pengembangan Karir</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Kami berinvestasi dalam pengembangan sumber daya manusia melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Program pelatihan dan pengembangan kompetensi reguler</li>
                <li>Mentoring dari pimpinan senior yang berpengalaman</li>
                <li>Kesempatan rotasi dan promosi berdasarkan kinerja</li>
                <li>Dukungan pendidikan lanjutan dan sertifikasi profesional</li>
                <li>Program kesejahteraan karyawan yang komprehensif</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Bagaimana Mendaftar</h2>
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Informasi lengkap tentang lowongan kerja terbuka dan prosedur pendaftaran tersedia melalui:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Website resmi: www.langlangbhuwana.go.id/karir</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Email: recruitment@langlangbhuwana.go.id</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Telepon: +62 21 1234 5678 (ext. 3000)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Kantor HR: Batallion Lang Lang Bhuwana, Jakarta</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="mt-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Terima kasih telah mempertimbangkan Batalion Lang Lang Bhuwana sebagai tempat mengembangkan karir Anda. Kami menunggu kedatangan talenta-talenta terbaik!</strong>
              </p>
            </div>
          </div>
        </LegalPageTemplate>
      </main>
      <Footer />
    </>
  );
}

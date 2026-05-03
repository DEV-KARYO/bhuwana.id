import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalPageTemplate from '@/components/LegalPageTemplate';
import { BarChart3, FileText, AlertCircle, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Transparansi - Lang Lang Bhuwana',
  description: 'Komitmen Batalyon Zeni Tempur 9 / Lang Lang Bhuwana pada transparansi dan akuntabilitas publik.',
};

export default function TransparencyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageTemplate 
          title="Transparansi Institusi" 
          subtitle="Komitmen kami pada akuntabilitas, kejujuran, dan transparansi publik"
          breadcrumb="Transparansi"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Prinsip Transparansi</h2>
              <p className="text-slate-700 leading-relaxed">
                Batalyon Zeni Tempur 9 / Lang Lang Bhuwana berkomitmen penuh pada transparansi dalam setiap aspek operasional institusi. Kami percaya bahwa keterbukaan informasi adalah fondasi kepercayaan publik dan akuntabilitas profesional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pilar-Pilars Transparansi Kami</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Akses Informasi</h3>
                      <p className="text-slate-700 text-sm">Publik dapat mengakses informasi publik sesuai ketentuan peraturan perundangan yang berlaku.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-4">
                    <FileText className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Pelaporan Rutin</h3>
                      <p className="text-slate-700 text-sm">Kami secara berkala menerbitkan laporan kegiatan, anggaran, dan kinerja institusi.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-4">
                    <BarChart3 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data & Statistik</h3>
                      <p className="text-slate-700 text-sm">Data kinerja dan statistik penting tersedia untuk analisis publik dan penelitian.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Akuntabilitas</h3>
                      <p className="text-slate-700 text-sm">Kami bertanggung jawab atas keputusan dan tindakan yang mempengaruhi masyarakat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Dokumen Publik yang Tersedia</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-indigo-600 bg-indigo-50 rounded">
                  <h3 className="font-semibold text-slate-900 mb-1">Laporan Tahunan</h3>
                  <p className="text-slate-700 text-sm">Ringkasan komprehensif aktivitas, pencapaian, dan tantangan institusi setiap tahun.</p>
                </div>

                <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                  <h3 className="font-semibold text-slate-900 mb-1">Laporan Keuangan</h3>
                  <p className="text-slate-700 text-sm">Pernyataan keuangan yang diaudit dan telah disahkan oleh badan pengawas.</p>
                </div>

                <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded">
                  <h3 className="font-semibold text-slate-900 mb-1">Kebijakan & Petunjuk</h3>
                  <p className="text-slate-700 text-sm">Peraturan internal, kebijakan operasional, dan pedoman standar pelayanan.</p>
                </div>

                <div className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded">
                  <h3 className="font-semibold text-slate-900 mb-1">Data Kinerja</h3>
                  <p className="text-slate-700 text-sm">Metrik kinerja, KPI, dan indikator pencapaian organisasi.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Kebijakan Akses Informasi Publik</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Pengajuan Permintaan Informasi</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Warga negara dan entitas lainnya dapat mengajukan permintaan akses informasi publik melalui:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Formulir online di portal kami</li>
                    <li>Surat tertulis ke kantor kami</li>
                    <li>Email ke hubmas@langlangbhuwana.go.id</li>
                    <li>Kontak langsung ke bagian Public Relations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Waktu Respons</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Kami berkomitmen merespons setiap permintaan informasi dalam waktu maksimal 15 hari kerja sesuai dengan peraturan yang berlaku. Permintaan yang memerlukan penelusuran lebih dalam mungkin memerlukan perpanjangan waktu.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Informasi yang Dibatasi</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Beberapa informasi mungkin dibatasi sesuai dengan peraturan keamanan nasional, privasi individu, atau kesepakatan rahasia yang sah. Penolakan akan disertai dengan penjelasan yang jelas.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Mekanisme Pengaduan</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Kami menyediakan saluran untuk menerima pengaduan publik mengenai kepatuhan terhadap standar transparansi:
              </p>
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-semibold text-slate-900 mb-3">Hubungi Bagian Pengaduan Publik:</p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Email:</strong> pengaduan@langlangbhuwana.go.id</li>
                  <li><strong>Telepon:</strong> +62 21 1234 5678 (ext. 2000)</li>
                  <li><strong>Surat:</strong> Kantor Pengaduan, Batalyon Zeni Tempur 9 / Lang Lang Bhuwana, Jakarta</li>
                  <li><strong>Form Online:</strong> Tersedia di menu "Hubungi Kami" portal</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Komitmen Berkelanjutan</h2>
              <p className="text-slate-700 leading-relaxed">
                Batalyon Zeni Tempur 9 / Lang Lang Bhuwana berkomitmen untuk terus meningkatkan transparansi dan akuntabilitas. Kami secara rutin mengevaluasi praktik kami dan menerapkan standar internasional terbaik dalam governance dan transparansi publik.
              </p>
            </section>

            <div className="mt-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Versi Kebijakan:</strong> 1.0 | <strong>Terakhir Diperbarui:</strong> 3 Mei 2026
              </p>
            </div>
          </div>
        </LegalPageTemplate>
      </main>
      <Footer />
    </>
  );
}

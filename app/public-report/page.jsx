import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalPageTemplate from '@/components/LegalPageTemplate';
import { FileText, Download, Calendar, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Laporan Publik - Lang Lang Bhuwana',
  description: 'Laporan kinerja, keuangan, dan aktivitas institusi Batalion Lang Lang Bhuwana yang diumumkan kepada publik.',
};

export default function PublicReportPage() {
  const reports = [
    {
      title: 'Laporan Tahunan 2025',
      type: 'Laporan Tahunan',
      date: 'Desember 2025',
      description: 'Ringkasan komprehensif aktivitas operasional, pencapaian strategis, dan tantangan yang dihadapi Batalion pada tahun 2025.',
      icon: FileText,
    },
    {
      title: 'Laporan Keuangan 2025 (Audited)',
      type: 'Laporan Keuangan',
      date: 'Januari 2026',
      description: 'Pernyataan keuangan konsolidasi yang telah diaudit oleh auditor independen sesuai standar akuntansi yang berlaku.',
      icon: BarChart3,
    },
    {
      title: 'Laporan Kinerja Triwulanan Q4 2025',
      type: 'Laporan Kinerja',
      date: 'Januari 2026',
      description: 'Pencapaian KPI, metrik operasional, dan analisis performa institusi untuk kuartal keempat tahun 2025.',
      icon: BarChart3,
    },
    {
      title: 'Laporan Tahunan 2024',
      type: 'Laporan Tahunan',
      date: 'Desember 2024',
      description: 'Laporan lengkap kegiatan, pencapaian, dan data statistik institusi selama tahun anggaran 2024.',
      icon: FileText,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <LegalPageTemplate 
          title="Laporan Publik" 
          subtitle="Informasi akuntabilitas dan kinerja institusi yang disampaikan kepada publik"
          breadcrumb="Laporan Publik"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Komitmen pada Akuntabilitas</h2>
              <p className="text-slate-700 leading-relaxed">
                Batalion Lang Lang Bhuwana secara rutin menyampaikan laporan kinerja, keuangan, dan aktivitas kepada publik sebagai bentuk akuntabilitas dan transparansi. Laporan-laporan ini mencerminkan dedikasi kami pada keunggulan operasional, pengelolaan keuangan yang bertanggung jawab, dan pelayanan kepada masyarakat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Laporan yang Tersedia</h2>
              <div className="space-y-4">
                {reports.map((report, index) => {
                  const IconComponent = report.icon;
                  return (
                    <div key={index} className="p-6 border border-slate-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all group">
                      <div className="flex gap-4">
                        <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                          <IconComponent className="text-indigo-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div>
                              <h3 className="font-semibold text-slate-900 mb-1 text-lg">{report.title}</h3>
                              <div className="flex items-center gap-4 mb-3">
                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                                  {report.type}
                                </span>
                                <span className="flex items-center gap-1 text-sm text-slate-600">
                                  <Calendar size={16} />
                                  {report.date}
                                </span>
                              </div>
                              <p className="text-slate-700">{report.description}</p>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold whitespace-nowrap">
                              <Download size={18} />
                              Unduh
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Jenis-Jenis Laporan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Laporan Tahunan</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Ringkasan komprehensif aktivitas, pencapaian, tantangan, dan inisiatif strategis institusi selama satu tahun kalender.
                  </p>
                </div>

                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Laporan Keuangan</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Pernyataan keuangan konsolidasi yang telah diaudit mencakup neraca, laporan laba rugi, dan catatan penjelasan.
                  </p>
                </div>

                <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Laporan Kinerja</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Analisis terhadap pencapaian KPI, indikator kinerja utama, dan evaluasi terhadap target strategis yang ditetapkan.
                  </p>
                </div>

                <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Laporan Khusus</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Laporan mengenai tema-tema khusus, proyek-proyek besar, atau evaluasi program tertentu sesuai kebutuhan publik.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Riwayat Penerbitan Laporan</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Calendar className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Setiap Akhir Tahun Kalender</p>
                    <p className="text-slate-700 text-sm">Laporan Tahunan dan Laporan Keuangan Audited dipublikasikan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Calendar className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Setiap Akhir Kuartal</p>
                    <p className="text-slate-700 text-sm">Laporan Kinerja Triwulanan tersedia langsung di portal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Calendar className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Sesuai Kebutuhan</p>
                    <p className="text-slate-700 text-sm">Laporan khusus dipublikasikan sesuai dengan keperluan dan agenda strategis</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Format & Aksesibilitas</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Semua laporan tersedia dalam format yang mudah diakses:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>PDF</strong> - Mudah dicetak dan didistribusikan</li>
                <li><strong>Spreadsheet Excel</strong> - Data terstruktur untuk analisis lebih lanjut</li>
                <li><strong>Akses Online</strong> - Dapat dibaca langsung di portal tanpa perlu download</li>
                <li><strong>Format Cetak</strong> - Versi cetak tersedia atas permintaan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Mengakses Laporan Lebih Lama</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Laporan dari tahun-tahun sebelumnya dapat diakses melalui:
              </p>
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileText className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-slate-900">Arsip Portal</p>
                      <p className="text-slate-700 text-sm">Semua laporan diarsipkan di bagian "Laporan & Arsip" di portal</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-slate-900">Perpustakaan Institusi</p>
                      <p className="text-slate-700 text-sm">Koleksi lengkap laporan fisik tersimpan di perpustakaan batallion</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-slate-900">Permintaan Khusus</p>
                      <p className="text-slate-700 text-sm">Hubungi divisi Informasi Publik untuk laporan spesifik yang tidak tercantum online</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pertanyaan & Umpan Balik</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang laporan atau memerlukan informasi tambahan, silakan hubungi:
              </p>
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <p className="font-semibold text-slate-900 mb-2">Divisi Informasi Publik</p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>Email: informasi.publik@langlangbhuwana.go.id</li>
                  <li>Telepon: +62 21 1234 5678 (ext. 1500)</li>
                  <li>Kantor: Batalion Lang Lang Bhuwana, Lantai 3, Jakarta</li>
                </ul>
              </div>
            </section>

            <div className="mt-8 p-4 bg-slate-100 border border-slate-300 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Catatan:</strong> Laporan ini merupakan dokumen resmi yang telah melalui proses review dan persetujuan dari manajemen senior institusi.
              </p>
            </div>
          </div>
        </LegalPageTemplate>
      </main>
      <Footer />
    </>
  );
}

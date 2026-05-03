import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalPageTemplate from '@/components/LegalPageTemplate';

export const metadata = {
  title: 'Disclaimer - Lang Lang Bhuwana',
  description: 'Disclaimer dan penafian tanggung jawab portal Batalyon Zeni Tempur 9 / Lang Lang Bhuwana.',
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageTemplate 
          title="Disclaimer" 
          subtitle="Penafian dan Ketentuan Penggunaan Portal"
          breadcrumb="Disclaimer"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Penafian Umum</h2>
              <p className="text-slate-700 leading-relaxed">
                Portal resmi Batalyon Zeni Tempur 9 / Lang Lang Bhuwana ("Portal") disediakan "sebagaimana adanya" tanpa jaminan dalam bentuk apapun. Kami tidak memberikan jaminan, baik tersurat maupun tersirat, mengenai keakuratan, kelengkapan, atau kesesuaian konten untuk tujuan tertentu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Pembatasan Tanggung Jawab</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">1.1 Keterbatasan Dalam Konten</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Meskipun kami berusaha untuk menyediakan informasi yang akurat dan terkini, kami tidak bertanggung jawab atas:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
                    <li>Kesalahan, kelalaian, atau ketidakakuratan dalam konten</li>
                    <li>Kerugian yang dihasilkan dari penggunaan atau ketergantungan pada konten Portal</li>
                    <li>Keterlambatan atau kegagalan layanan Portal</li>
                    <li>Kehilangan data atau gangguan pada sistem</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">1.2 Keterbatasan Tanggung Jawab Hukum</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Dalam keadaan apapun, Batalyon Zeni Tempur 9 / Lang Lang Bhuwana tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau kerugian apa pun yang timbul dari penggunaan Portal ini.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Penggunaan yang Diizinkan</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Anda hanya boleh menggunakan Portal untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda setuju untuk tidak:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Menggunakan Portal untuk aktivitas ilegal atau tidak sah</li>
                <li>Mengakses atau mencoba mengakses sistem Portal tanpa izin</li>
                <li>Mengganggu atau merusak infrastruktur Portal</li>
                <li>Mengirim konten yang berbahaya, menyinggung, atau melanggar hukum</li>
                <li>Mengumpulkan atau mencoba mengumpulkan informasi pribadi pengguna lain</li>
                <li>Menggunakan robot, spider, atau scraper otomatis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Tautan Eksternal</h2>
              <p className="text-slate-700 leading-relaxed">
                Portal mungkin berisi tautan ke situs web eksternal yang tidak berada di bawah kendali kami. Kami tidak bertanggung jawab atas konten, keakuratan, atau praktik privacy situs-situs eksternal tersebut. Penggunaan situs eksternal dilakukan dengan risiko Anda sendiri.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Hak Kekayaan Intelektual</h2>
              <p className="text-slate-700 leading-relaxed">
                Semua konten yang ada di Portal, termasuk teks, gambar, grafis, logo, dan desain, dilindungi oleh hak kekayaan intelektual. Anda tidak diizinkan untuk mereproduksi, mendistribusikan, atau menggunakan konten tanpa izin tertulis dari kami, kecuali untuk penggunaan pribadi yang tidak komersial yang wajar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Keamanan dan Akses</h2>
              <p className="text-slate-700 leading-relaxed">
                Kami berhak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
                <li>Menolak akses ke Portal kapan saja tanpa pemberitahuan sebelumnya</li>
                <li>Menangguhkan atau menghentikan layanan untuk pemeliharaan atau alasan keamanan</li>
                <li>Membatasi akses dari pengguna yang melanggar ketentuan ini</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Modifikasi Konten dan Layanan</h2>
              <p className="text-slate-700 leading-relaxed">
                Kami berhak untuk mengubah, memperbarui, atau menghapus konten, layanan, atau fitur Portal kapan saja tanpa pemberitahuan sebelumnya. Kami juga berhak untuk mengakhiri atau mengubah akses ke Portal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Pernyataan Pemerintah</h2>
              <p className="text-slate-700 leading-relaxed">
                Portal kami adalah representasi resmi Batalyon Zeni Tempur 9 / Lang Lang Bhuwana. Informasi yang disajikan telah diverifikasi dan disahkan oleh otoritas yang berwenang. Namun, kami tetap tidak ada jaminan mengenai relevansi informasi untuk situasi tertentu Anda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Penerapan Hukum</h2>
              <p className="text-slate-700 leading-relaxed">
                Disclaimer ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui pengadilan yang berwenang di Jakarta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Perubahan pada Disclaimer</h2>
              <p className="text-slate-700 leading-relaxed">
                Kami dapat memperbarui disclaimer ini kapan saja. Perubahan akan efektif segera setelah dipublikasikan di Portal. Penggunaan berkelanjutan menunjukkan penerimaan Anda terhadap perubahan apapun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Hubungi Kami</h2>
              <p className="text-slate-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang disclaimer ini, silakan hubungi:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-900">Batalyon Zeni Tempur 9 / Lang Lang Bhuwana</p>
                <p className="text-slate-700">Ksatrian Lang Lang Bhuwana, Jakarta, Indonesia</p>
                <p className="text-slate-700">Email: hubmas@langlangbhuwana.go.id</p>
                <p className="text-slate-700">Telepon: +62 21 1234 5678</p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>PENTING:</strong> Dengan menggunakan Portal ini, Anda menerima semua syarat dan ketentuan yang tercantum dalam disclaimer ini. Jika Anda tidak setuju dengan ketentuan apapun, silakan hentikan penggunaan Portal segera.
              </p>
            </div>
          </div>
        </LegalPageTemplate>
      </main>
      <Footer />
    </>
  );
}

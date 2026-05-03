import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalPageTemplate from '@/components/LegalPageTemplate';

export const metadata = {
  title: 'Kebijakan Privasi - Lang Lang Bhuwana',
  description: 'Kebijakan privasi dan perlindungan data pribadi di portal Batalion Lang Lang Bhuwana.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageTemplate 
          title="Kebijakan Privasi" 
          subtitle="Kami berkomitmen melindungi privasi dan data pribadi Anda"
          breadcrumb="Kebijakan Privasi"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pengantar</h2>
              <p className="text-slate-700 leading-relaxed">
                Portal resmi Batalion Lang Lang Bhuwana ("kami", "Portal") berkomitmen untuk melindungi privasi dan hak-hak data pribadi setiap pengunjung. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">1.1 Informasi yang Anda Berikan Secara Langsung</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Nama dan informasi kontak ketika menggunakan formulir kontak</li>
                    <li>Pertanyaan atau komentar yang Anda kirim kepada kami</li>
                    <li>Informasi lain yang Anda sapu berikan melalui portal</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">1.2 Informasi yang Dikumpulkan Secara Otomatis</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Alamat IP dan jenis browser Anda</li>
                    <li>Halaman yang Anda kunjungi dan waktu yang dihabiskan</li>
                    <li>Data referrer dan data navigasi lainnya</li>
                    <li>Cookies dan teknologi pelacakan serupa</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Penggunaan Informasi</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk tujuan-tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Menyediakan, memelihara, dan meningkatkan layanan portal</li>
                <li>Merespons pertanyaan dan permintaan Anda</li>
                <li>Mengirim pemberitahuan dan pembaruan administratif</li>
                <li>Menganalisis penggunaan portal untuk keperluan penelitian dan peningkatan</li>
                <li>Mencegah aktivitas yang melanggar hukum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Keamanan Data</h2>
              <p className="text-slate-700 leading-relaxed">
                Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda dari akses, perubahan, pengungkapan, atau pemusnahan tanpa izin. Meskipun demikian, tidak ada metode transmisi internet yang sepenuhnya aman, dan kami tidak dapat menjamin keamanan absolut.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Berbagi Informasi</h2>
              <p className="text-slate-700 leading-relaxed">
                Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
                <li>Untuk memenuhi persyaratan hukum atau peraturan yang berlaku</li>
                <li>Kepada penyedia layanan yang membantu kami mengoperasikan portal</li>
                <li>Dengan persetujuan tertulis dari Anda</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies dan Teknologi Pelacakan</h2>
              <p className="text-slate-700 leading-relaxed">
                Portal kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Anda dapat mengatur browser Anda untuk menolak cookies, tetapi ini mungkin membatasi fungsionalitas beberapa fitur portal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Hak Anda</h2>
              <p className="text-slate-700 leading-relaxed">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
                <li>Mengakses data pribadi yang kami miliki tentang Anda</li>
                <li>Meminta koreksi data yang tidak akurat</li>
                <li>Meminta penghapusan data pribadi Anda</li>
                <li>Menolak penggunaan data pribadi Anda untuk keperluan tertentu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Perubahan pada Kebijakan Privasi</h2>
              <p className="text-slate-700 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diumumkan di halaman ini dengan tanggal update terakhir. Penggunaan portal Anda yang berkelanjutan setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Hubungi Kami</h2>
              <p className="text-slate-700 leading-relaxed">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, silakan hubungi kami di:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-900">Batalion Lang Lang Bhuwana</p>
                <p className="text-slate-700">Ksatrian Lang Lang Bhuwana, Jakarta, Indonesia</p>
                <p className="text-slate-700">Email: hubmas@langlangbhuwana.go.id</p>
                <p className="text-slate-700">Telepon: +62 21 1234 5678</p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Tanggal Berlaku:</strong> 3 Mei 2026
              </p>
            </div>
          </div>
        </LegalPageTemplate>
      </main>
      <Footer />
    </>
  );
}

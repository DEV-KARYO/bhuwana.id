import { getGallery, getNews } from '@/lib/store';

export default async function DashboardPage() {
  const [news, gallery] = await Promise.all([getNews(), getGallery()]);

  return (
    <section>
      <div className="topbar">
        <div>
          <h1>Dashboard</h1>
          <p>Ringkasan konten yang aktif di portal publik.</p>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <strong>Total Berita</strong>
          <p>{news.length} item</p>
        </div>
        <div className="card">
          <strong>Total Galeri</strong>
          <p>{gallery.length} item</p>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Berita Terbaru</th>
              <th>Kategori</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {news.slice(0, 6).map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

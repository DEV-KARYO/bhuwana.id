'use client';

import { useEffect, useState } from 'react';

const initialForm = {
  title: '',
  excerpt: '',
  content: '',
  publishedAt: '',
  category: '',
  author: '',
  image: '',
  tags: '',
};

export default function NewsManagerPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  async function load() {
    const response = await fetch('/api/news');
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const payload = {
      ...form,
      tags: form.tags
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    };

    const endpoint = editingId ? `/api/news/${editingId}` : '/api/news';
    const method = editingId ? 'PUT' : 'POST';

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.message || 'Gagal menyimpan berita.');
      return;
    }

    setForm(initialForm);
    setEditingId(null);
    await load();
  }

  async function handleDelete(id) {
    if (!window.confirm('Hapus berita ini?')) {
      return;
    }

    const response = await fetch(`/api/news/${id}`, { method: 'DELETE' });
    if (response.ok) {
      await load();
    }
  }

  function startEdit(item) {
    setEditingId(item.id);
    setForm({
      title: item.title || '',
      excerpt: item.excerpt || '',
      content: item.content || '',
      publishedAt: item.publishedAt || item.dateObj?.slice(0, 10) || '',
      category: item.category || '',
      author: item.author || '',
      image: item.image || '',
      tags: (item.tags || []).join(', '),
    });
  }

  return (
    <section>
      <div className="topbar">
        <div>
          <h1>Kelola Berita</h1>
          <p>Buat dan ubah konten untuk portal publik.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card">
        <div className="grid-2">
          <div className="field">
            <label>Judul</label>
            <input
              value={form.title}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </div>

          <div className="field">
            <label>Tanggal Publikasi</label>
            <input
              type="date"
              value={form.publishedAt}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, publishedAt: event.target.value }))
              }
            />
            <small>Tanggal ini dipakai untuk urutan tampil dan label publikasi.</small>
          </div>

          <div className="field">
            <label>Kategori</label>
            <input
              value={form.category}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, category: event.target.value }))
              }
            />
          </div>

          <div className="field">
            <label>Penulis</label>
            <input
              value={form.author}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, author: event.target.value }))
              }
            />
          </div>

          <div className="field">
            <label>URL Gambar</label>
            <input
              value={form.image}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, image: event.target.value }))
              }
            />
          </div>

          <div className="field">
            <label>Tags (pisahkan koma)</label>
            <input
              value={form.tags}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, tags: event.target.value }))
              }
            />
          </div>
        </div>

        <div className="field">
          <label>Ringkasan</label>
          <textarea
            rows={3}
            value={form.excerpt}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, excerpt: event.target.value }))
            }
          />
        </div>

        <div className="field">
          <label>Konten</label>
          <textarea
            rows={8}
            value={form.content}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, content: event.target.value }))
            }
          />
        </div>

        <div className="toolbar">
          <div>
            <button className="btn btn-primary" type="submit">
              {editingId ? 'Update Berita' : 'Tambah Berita'}
            </button>{' '}
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(initialForm);
              }}
            >
              Reset
            </button>
          </div>
          {error ? <span className="error">{error}</span> : null}
        </div>
      </form>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Judul</th>
              <th>Kategori</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => startEdit(item)}
                  >
                    Edit
                  </button>{' '}
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

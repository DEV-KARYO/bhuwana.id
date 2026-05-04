'use client';

import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/components/Toast';

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

  async function uploadBase64(dataUrl, filename) {
    try {
      const res = await fetch('/api/uploads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, data: dataUrl }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.message || 'Upload gagal.');
      }
      const json = await res.json();
      return json.url;
    } catch (e) {
      setError(e.message);
      return '';
    }
  }

  function handleFileSelect(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result;
      const url = await uploadBase64(dataUrl, `${Date.now()}_${file.name}`);
      if (url) {
        setForm((prev) => ({ ...prev, image: url }));
        toast.success('Gambar berhasil diunggah');
      }
    };
    reader.readAsDataURL(file);
  }

  const fileInputRef = useRef(null);
  const toast = useToast();

  function removeTag(tag) {
    const list = form.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
      .filter((t) => t !== tag);
    setForm((prev) => ({ ...prev, tags: list.join(', ') }));
  }

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
      const msg = data.message || 'Gagal menyimpan berita.';
      setError(msg);
      toast.error(msg);
      return;
    }
    setForm(initialForm);
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    await load();
    toast.success('Berita tersimpan');
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
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} />
            {form.image ? (
              <div className="image-preview">
                <img src={form.image} alt="preview" />
              </div>
            ) : null}
          </div>

          <div className="field">
            <label>Tags (pisahkan koma)</label>
            <input
              value={form.tags}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, tags: event.target.value }))
              }
            />
            <div className="chips">
              {form.tags
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean)
                .map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => removeTag(t)}
                    className="chip"
                    aria-label={`Hapus tag ${t}`}
                  >
                    {t}
                  </button>
                ))}
            </div>
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
                if (fileInputRef.current) fileInputRef.current.value = '';
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

'use client';

import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/components/Toast';

const initialForm = {
  title: '',
  description: '',
  image: '',
  date: '',
  category: '',
};

export default function GalleryManagerPage() {
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

  async function load() {
    const response = await fetch('/api/gallery');
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const endpoint = editingId ? `/api/gallery/${editingId}` : '/api/gallery';
    const method = editingId ? 'PUT' : 'POST';

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const data = await response.json();
      const msg = data.message || 'Gagal menyimpan galeri.';
      setError(msg);
      toast.error(msg);
      return;
    }

    setForm(initialForm);
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    await load();
    toast.success('Galeri tersimpan');
  }

  async function handleDelete(id) {
    if (!window.confirm('Hapus item galeri ini?')) {
      return;
    }

    const response = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
    if (response.ok) {
      await load();
    }
  }

  function startEdit(item) {
    setEditingId(item.id);
    setForm({
      title: item.title || '',
      description: item.description || '',
      image: item.image || '',
      date: item.date || '',
      category: item.category || '',
    });
  }

  return (
    <section>
      <div className="topbar">
        <div>
          <h1>Kelola Galeri</h1>
          <p>Atur dokumentasi visual yang tampil di portal publik.</p>
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
            <label>Tanggal</label>
            <input
              value={form.date}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, date: event.target.value }))
              }
            />
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
        </div>

        <div className="field">
          <label>Deskripsi</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, description: event.target.value }))
            }
          />
        </div>

        <div className="toolbar">
          <div>
            <button className="btn btn-primary" type="submit">
              {editingId ? 'Update Galeri' : 'Tambah Galeri'}
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

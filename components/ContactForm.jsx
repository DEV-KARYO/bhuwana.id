'use client';

import { useState } from 'react';
import { Mail, Loader, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm({ 
  recipientName = 'Satuan', 
  recipientRole = '',
  onSubmit = null 
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Validasi
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setErrorMessage('Mohon isi semua field yang diperlukan.');
        setStatus('error');
        return;
      }

      // Email regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage('Email tidak valid.');
        setStatus('error');
        return;
      }

      // Call custom submit handler jika ada, atau default behavior
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default: Kirim ke contact API endpoint (akan dibuat nanti)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            recipientName,
            recipientRole,
          }),
        });

        if (!response.ok) {
          throw new Error('Gagal mengirim pesan');
        }
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset success message setelah 5 detik
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Terjadi kesalahan. Silakan coba lagi nanti.');
    }
  };

  return (
    <div className="card-elevated p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Mail size={20} className="text-indigo-700" />
        <div>
          <h3 className="font-black text-slate-900 text-xl">Hubungi Kami</h3>
          <p className="text-sm text-slate-500 mt-1">Ajukan pertanyaan atau masukan Anda</p>
        </div>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
          <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-green-900">Pesan berhasil dikirim!</p>
            <p className="text-sm text-green-700 mt-1">Terima kasih atas pesan Anda. Kami akan meresponnya secepatnya.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-red-900">Terjadi kesalahan</p>
            <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-600 mb-2">
            Nama Lengkap *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama Anda"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            disabled={status === 'loading'}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-600 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nama@email.com"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            disabled={status === 'loading'}
            required
          />
          <p className="text-xs text-slate-500 mt-1">Email Anda hanya digunakan untuk mengirim balasan.</p>
        </div>

        {/* Phone (Optional) */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-600 mb-2">
            Telepon (Opsional)
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+62 8xx xxxx xxxx"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            disabled={status === 'loading'}
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-600 mb-2">
            Subjek *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Topik pertanyaan atau masukan"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            disabled={status === 'loading'}
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-600 mb-2">
            Pesan *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
            rows="5"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            disabled={status === 'loading'}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full px-4 py-3 rounded-xl bg-indigo-950 hover:bg-indigo-900 text-white font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'loading' && <Loader size={16} className="animate-spin" />}
          {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-slate-500 text-center">
          Kami akan merahasiakan data Anda sesuai dengan Kebijakan Privasi kami.
        </p>
      </form>
    </div>
  );
}

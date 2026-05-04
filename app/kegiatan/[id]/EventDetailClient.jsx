'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock, Users, User, Mail, Phone, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import { eventsData } from '@/lib/content';

export default function EventDetailClient({ params }) {
  const event = eventsData.find((e) => e.id === parseInt(params.id));

  if (!event) {
    return (
      <div className="page-content">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Kegiatan Tidak Ditemukan</h1>
            <p className="text-slate-600 mb-6">Kegiatan yang Anda cari tidak tersedia.</p>
            <Link href="/kegiatan" className="text-indigo-700 font-bold hover:text-indigo-900">
              ← Kembali ke Daftar Kegiatan
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const registrationPercentage = Math.round((event.registered / event.capacity) * 100);

  return (
    <div className="page-content">
      <Navbar />

      <Breadcrumb
        items={[
          { label: 'Kegiatan & Acara', href: '/kegiatan' },
          { label: event.title },
        ]}
      />

      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto section-spacing py-4">
          <Link
            href="/kegiatan"
            className="inline-flex items-center gap-2 text-indigo-700 font-bold hover:text-indigo-900 transition-colors"
          >
            <ArrowLeft size={18} /> Kembali ke Kegiatan
          </Link>
        </div>
      </div>

      {/* Header with Image */}
      <div className="relative w-full h-64 md:h-96 bg-slate-200">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="primary">{event.category}</Badge>
            <Badge variant={event.status === 'Mendatang' ? 'primary' : event.status === 'Sedang berlangsung' ? 'success' : 'warning'}>
              {event.status}
            </Badge>
            {event.isFeatured && <Badge variant="primary">Unggulan</Badge>}
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">{event.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="page-section">
        <div className="container mx-auto section-spacing">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="card-elevated p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Ringkasan Kegiatan</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{event.description}</p>

                {/* Quick Info Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <Calendar size={20} className="text-indigo-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 mb-1">Tanggal</p>
                      <p className="font-bold text-slate-900">
                        {new Date(event.startDate).toLocaleDateString('id-ID', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                        {event.endDate !== event.startDate && (
                          <>
                            <br />
                            s/d{' '}
                            {new Date(event.endDate).toLocaleDateString('id-ID', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <Clock size={20} className="text-indigo-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 mb-1">Waktu</p>
                      <p className="font-bold text-slate-900">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl sm:col-span-2">
                    <MapPin size={20} className="text-indigo-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 mb-1">Lokasi</p>
                      <p className="font-bold text-slate-900">{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agenda */}
              {event.agenda && event.agenda.length > 0 && (
                <div className="card-elevated p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Agenda</h2>
                  <div className="space-y-6">
                    {event.agenda.map((day, dayIndex) => (
                      <div key={dayIndex} className="border-l-4 border-indigo-600 pl-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-1">{day.date}</h3>
                        <p className="text-slate-600 mb-4 font-semibold">Hari {day.day}</p>
                        <div className="space-y-3">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex gap-4">
                              <div className="font-bold text-indigo-600 text-sm shrink-0 pt-1">
                                {activity.time}
                              </div>
                              <div className="pb-3">
                                <p className="font-semibold text-slate-900">{activity.activity}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {event.requirements && event.requirements.length > 0 && (
                <div className="card-elevated p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Persyaratan Peserta</h2>
                  <ul className="space-y-3">
                    {event.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-indigo-600 mt-1 shrink-0" />
                        <span className="text-slate-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <div className="card-elevated p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Pembicara</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {event.speakers.map((speaker, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-xl p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-slate-100 flex items-center justify-center">
                            <User size={24} className="text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">{speaker.name}</h3>
                            <p className="text-sm text-indigo-700 font-semibold">{speaker.position}</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{speaker.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <aside className="space-y-6">
              {/* Registration Card */}
              <div className="card-elevated p-6 md:p-8 sticky top-32">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Status Pendaftaran</h3>

                {/* Registration Stats */}
                <div className="mb-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Kapasitas</span>
                    <span className="font-bold text-slate-900">{event.capacity} orang</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Terdaftar</span>
                    <span className="font-bold text-slate-900">{event.registered} orang</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Tersisa</span>
                    <span className="font-bold text-indigo-700">{event.capacity - event.registered} slot</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-indigo-400 h-3 rounded-full transition-all"
                      style={{ width: `${Math.min(registrationPercentage, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">{registrationPercentage}% terisi</p>
                </div>

                {/* CTA Button */}
                <Button variant="primary" className="w-full mb-3">
                  Daftar Sekarang
                </Button>

                {/* Status Badge */}
                <div className={`text-center py-2 rounded-lg font-bold text-sm ${
                  event.capacity - event.registered > 10
                    ? 'bg-green-50 text-green-700'
                    : event.capacity - event.registered > 0
                    ? 'bg-yellow-50 text-yellow-700'
                    : 'bg-red-50 text-red-700'
                }`}>
                  {event.capacity - event.registered > 0
                    ? `${event.capacity - event.registered} slot tersedia`
                    : 'Pendaftaran penuh'}
                </div>
              </div>

              {/* Contact Card */}
              {event.contact && (
                <div className="card-elevated p-6 md:p-8">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">Kontak Panitia</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 mb-1">Nama</p>
                      <p className="font-semibold text-slate-900">{event.contact.name}</p>
                    </div>
                    {event.contact.email && (
                      <div>
                        <p className="text-xs font-bold uppercase text-slate-500 mb-1">Email</p>
                        <a
                          href={`mailto:${event.contact.email}`}
                          className="flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900 transition-colors"
                        >
                          <Mail size={16} /> {event.contact.email}
                        </a>
                      </div>
                    )}
                    {event.contact.phone && (
                      <div>
                        <p className="text-xs font-bold uppercase text-slate-500 mb-1">Telepon</p>
                        <a
                          href={`tel:${event.contact.phone}`}
                          className="flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900 transition-colors"
                        >
                          <Phone size={16} /> {event.contact.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

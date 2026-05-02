// Common metadata and constants
export const siteConfig = {
  name: 'Lang Lang Bhuwana',
  description:
    'Portal resmi Batalion Lang Lang Bhuwana - Kredibilitas dan Pengabdian',
  url: 'https://langlangbhuwana.go.id',
  email: 'hubmas@langlangbhuwana.go.id',
  phone: '+62 21 1234 5678',
  address: 'Ksatrian Lang Lang Bhuwana, Jakarta, Indonesia',
  social: {
    twitter: '#',
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  year: new Date().getFullYear(),
};

export const navItems = [
  { id: 'home', label: 'Beranda', href: '/' },
  { id: 'news', label: 'Warta', href: '/news' },
  { id: 'structure', label: 'Pimpinan', href: '/structure' },
  { id: 'gallery', label: 'Galeri', href: '/gallery' },
];

export const footerLinks = {
  navigation: [
    { label: 'Beranda', href: '/' },
    { label: 'Warta & Pengumuman', href: '/news' },
    { label: 'Struktur Pimpinan', href: '/structure' },
    { label: 'Galeri Dokumentasi', href: '/gallery' },
  ],
  information: [
    'Laporan Publik',
    'Kebijakan Privasi',
    'Transparansi',
    'Karir & Penerimaan',
  ],
};

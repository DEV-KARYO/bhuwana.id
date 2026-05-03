import EventDetailClient from './EventDetailClient';
import { eventsData } from '@/lib/content';

export const generateStaticParams = () => {
  return eventsData.map((event) => ({
    id: event.id.toString(),
  }));
};

export const generateMetadata = ({ params }) => {
  const event = eventsData.find((e) => e.id === parseInt(params.id));

  if (!event) {
    return {
      title: 'Kegiatan Tidak Ditemukan',
      description: 'Kegiatan yang Anda cari tidak tersedia.',
    };
  }

  return {
    title: `${event.title} - Batalyon Zeni Tempur 9 / Lang Lang Bhuwana`,
    description: event.excerpt,
    openGraph: {
      title: event.title,
      description: event.excerpt,
      images: [event.image],
      type: 'article',
      publishedTime: event.startDate,
    },
  };
};

export default function EventDetailPage({ params }) {
  return <EventDetailClient params={params} />;
}

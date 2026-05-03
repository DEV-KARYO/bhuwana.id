import { notFound } from 'next/navigation';
import { newsData } from '@/lib/content';
import NewsDetailClient from '@/components/NewsDetailClient';

export function generateStaticParams() {
  return newsData.map((item) => ({
    id: String(item.id),
  }));
}

export function generateMetadata({ params }) {
  const news = newsData.find((item) => item.id === parseInt(params.id, 10));

  if (!news) {
    return {
      title: 'Artikel Tidak Ditemukan - Batalyon Zeni Tempur 9 / Lang Lang Bhuwana',
    };
  }

  return {
    title: `${news.title} - Batalyon Zeni Tempur 9 / Lang Lang Bhuwana`,
    description: news.excerpt || news.content.substring(0, 160),
  };
}

export default function NewsDetailPage({ params }) {
  const news = newsData.find((item) => item.id === parseInt(params.id, 10));

  if (!news) {
    notFound();
  }

  const relatedNews = newsData
    .filter((item) => item.id !== news.id && item.category === news.category)
    .slice(0, 3);

  return <NewsDetailClient news={news} relatedNews={relatedNews} />;
}

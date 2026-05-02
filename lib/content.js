import news from '@/content/news.json';
import gallery from '@/content/gallery.json';
import leadership from '@/content/leadership.json';

export const newsData = news;
export const galleryData = gallery;
export const leadershipData = leadership;
export const categories = [...new Set(news.map((item) => item.category))];

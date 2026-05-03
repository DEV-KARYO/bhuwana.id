import news from '@/content/news.json';
import gallery from '@/content/gallery.json';
import leadership from '@/content/leadership.json';
import events from '@/content/events.json';

export const newsData = news;
export const galleryData = gallery;
export const leadershipData = leadership;
export const eventsData = events;
export const categories = [...new Set(news.map((item) => item.category))];

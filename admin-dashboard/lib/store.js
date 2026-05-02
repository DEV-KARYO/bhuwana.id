import { promises as fs } from 'fs';
import path from 'path';

const NEWS_FILE = path.join(process.cwd(), '..', 'content', 'news.json');
const GALLERY_FILE = path.join(process.cwd(), '..', 'content', 'gallery.json');

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, JSON.stringify(value, null, 2), 'utf8');
}

function withDateObj(item) {
  const dateObj = item.dateObj || new Date(item.date).toISOString();
  return { ...item, dateObj };
}

export async function getNews() {
  const news = await readJson(NEWS_FILE);
  return news
    .map(withDateObj)
    .sort((a, b) => new Date(b.dateObj) - new Date(a.dateObj));
}

export async function createNews(payload) {
  const news = await readJson(NEWS_FILE);
  const id = news.length ? Math.max(...news.map((item) => item.id)) + 1 : 1;
  const item = withDateObj({
    id,
    ...payload,
  });

  news.push(item);
  await writeJson(NEWS_FILE, news);
  return item;
}

export async function updateNews(id, payload) {
  const news = await readJson(NEWS_FILE);
  const index = news.findIndex((item) => item.id === id);

  if (index < 0) {
    return null;
  }

  news[index] = withDateObj({ ...news[index], ...payload, id });
  await writeJson(NEWS_FILE, news);
  return news[index];
}

export async function deleteNews(id) {
  const news = await readJson(NEWS_FILE);
  const next = news.filter((item) => item.id !== id);

  if (next.length === news.length) {
    return false;
  }

  await writeJson(NEWS_FILE, next);
  return true;
}

export async function getGallery() {
  const gallery = await readJson(GALLERY_FILE);
  return gallery.sort((a, b) => b.id - a.id);
}

export async function createGallery(payload) {
  const gallery = await readJson(GALLERY_FILE);
  const id = gallery.length ? Math.max(...gallery.map((item) => item.id)) + 1 : 1;
  const item = { id, ...payload };

  gallery.push(item);
  await writeJson(GALLERY_FILE, gallery);
  return item;
}

export async function updateGallery(id, payload) {
  const gallery = await readJson(GALLERY_FILE);
  const index = gallery.findIndex((item) => item.id === id);

  if (index < 0) {
    return null;
  }

  gallery[index] = { ...gallery[index], ...payload, id };
  await writeJson(GALLERY_FILE, gallery);
  return gallery[index];
}

export async function deleteGallery(id) {
  const gallery = await readJson(GALLERY_FILE);
  const next = gallery.filter((item) => item.id !== id);

  if (next.length === gallery.length) {
    return false;
  }

  await writeJson(GALLERY_FILE, next);
  return true;
}

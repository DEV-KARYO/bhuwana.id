import { existsSync, readFileSync } from 'fs';
import path from 'path';

const root = process.cwd();

function fail(message) {
  console.error(`SMOKE FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`SMOKE OK: ${message}`);
}

function readJson(relativePath) {
  const fullPath = path.join(root, relativePath);

  if (!existsSync(fullPath)) {
    fail(`File tidak ditemukan: ${relativePath}`);
    return null;
  }

  try {
    return JSON.parse(readFileSync(fullPath, 'utf8'));
  } catch {
    fail(`JSON tidak valid: ${relativePath}`);
    return null;
  }
}

function checkUniqueIds(items, name) {
  const ids = items.map((item) => item.id);
  const unique = new Set(ids);

  if (ids.length !== unique.size) {
    fail(`ID duplikat ditemukan pada ${name}`);
    return;
  }

  pass(`ID unik untuk ${name}`);
}

function checkRequiredFields(items, name, fields) {
  items.forEach((item, index) => {
    fields.forEach((field) => {
      if (item[field] === undefined || item[field] === null || item[field] === '') {
        fail(`Field wajib '${field}' kosong di ${name} index ${index}`);
      }
    });
  });

  pass(`Field wajib ${name} lengkap`);
}

function checkFiles(paths) {
  paths.forEach((relativePath) => {
    const fullPath = path.join(root, relativePath);
    if (!existsSync(fullPath)) {
      fail(`Route/file penting tidak ditemukan: ${relativePath}`);
      return;
    }
    pass(`Tersedia: ${relativePath}`);
  });
}

function run() {
  checkFiles([
    'app/page.jsx',
    'app/news/page.jsx',
    'app/news/[id]/page.jsx',
    'app/gallery/page.jsx',
    'app/structure/page.jsx',
    'app/structure/[id]/page.jsx',
    'admin-dashboard/app/dashboard/page.jsx',
    'admin-dashboard/app/dashboard/news/page.jsx',
    'admin-dashboard/app/dashboard/gallery/page.jsx',
  ]);

  const news = readJson('content/news.json');
  const gallery = readJson('content/gallery.json');
  const leadership = readJson('content/leadership.json');

  if (!news || !gallery || !leadership) {
    return;
  }

  checkUniqueIds(news, 'news.json');
  checkUniqueIds(gallery, 'gallery.json');
  checkUniqueIds(leadership, 'leadership.json');

  checkRequiredFields(news, 'news.json', [
    'id',
    'title',
    'excerpt',
    'content',
    'publishedAt',
    'date',
    'category',
    'author',
    'image',
  ]);

  checkRequiredFields(leadership, 'leadership.json', [
    'id',
    'name',
    'position',
    'rank',
    'bio',
    'tenure_start',
    'status',
  ]);

  if (!Array.isArray(news) || news.length === 0) {
    fail('content/news.json kosong');
  }

  if (!Array.isArray(leadership) || leadership.length === 0) {
    fail('content/leadership.json kosong');
  }

  if (process.exitCode) {
    return;
  }

  pass('Semua pemeriksaan quick smoke lulus');
}

run();

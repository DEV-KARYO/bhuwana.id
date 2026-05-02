export const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (typeof date === 'string') {
    return new Date(date).toLocaleDateString('id-ID', options);
  }

  return date.toLocaleDateString('id-ID', options);
};

export const searchNews = (news, query) => {
  if (!query || query.trim() === '') {
    return news;
  }

  const lowerQuery = query.toLowerCase();

  return news.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.excerpt.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
  );
};

export const filterNewsByCategory = (news, category) => {
  if (!category || category === 'Semua') {
    return news;
  }

  return news.filter((item) => item.category === category);
};

export const sortNewsByDate = (news, order = 'desc') => {
  return [...news].sort((a, b) => {
    const dateA = new Date(a.dateObj);
    const dateB = new Date(b.dateObj);

    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
};

export const paginateArray = (array, page = 1, pageSize = 6) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    items: array.slice(startIndex, endIndex),
    totalPages: Math.ceil(array.length / pageSize),
    currentPage: page,
    totalItems: array.length,
  };
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};

export const getShareUrl = (baseUrl, newsId) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${baseUrl}${basePath}/news/${newsId}`;
};

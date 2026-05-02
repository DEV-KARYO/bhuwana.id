import { newsData, categories } from '@/lib/data';

/**
 * GET /api/news
 * Fetch news articles with optional filtering
 *
 * Query parameters:
 * - id: Get specific article by ID
 * - category: Filter by category
 * - limit: Limit number of results
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const category = searchParams.get('category');
  const limit = searchParams.get('limit');

  try {
    // Get specific article
    if (id) {
      const article = newsData.find((item) => item.id === parseInt(id));
      if (!article) {
        return Response.json(
          { error: 'Article not found' },
          { status: 404 }
        );
      }
      return Response.json(article);
    }

    // Filter by category
    let result = newsData;
    if (category && category !== 'Semua') {
      result = result.filter((item) => item.category === category);
    }

    // Apply limit
    if (limit) {
      result = result.slice(0, parseInt(limit));
    }

    return Response.json({
      data: result,
      total: result.length,
      categories,
    });
  } catch (error) {
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

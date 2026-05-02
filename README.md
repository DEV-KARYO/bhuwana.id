# Lang Lang Bhuwana - Institutional Portal

Modern, production-ready institutional portal website built with Next.js and TailwindCSS.

## 📋 Project Overview

Portal resmi Batalion Lang Lang Bhuwana featuring:
- ✅ Modern, responsive design
- ✅ News listing & detail pages with filtering
- ✅ Leadership structure page
- ✅ Gallery with lightbox viewer
- ✅ Search functionality
- ✅ Pagination & category filters
- ✅ Share buttons (copy link)
- ✅ SEO optimized metadata
- ✅ Optimized image loading
- ✅ Production-ready architecture

## 🏗️ Project Structure

```
bhuwana.id/
├── app/                          # Next.js App Router
│   ├── layout.jsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── page.jsx                 # Homepage
│   ├── news/
│   │   ├── page.jsx            # News listing page
│   │   └── [id]/
│   │       └── page.jsx        # News detail page
│   ├── structure/
│   │   └── page.jsx            # Leadership page
│   ├── gallery/
│   │   └── page.jsx            # Gallery page
│   └── api/
│       └── news/
│           └── route.js        # News API endpoint
├── components/                   # Reusable components
│   ├── Button.jsx              # Button component
│   ├── Badge.jsx               # Badge component
│   ├── Navbar.jsx              # Navigation bar
│   ├── Footer.jsx              # Footer
│   ├── SearchModal.jsx         # Search modal
│   ├── NewsCard.jsx            # News card component
│   ├── HeroSection.jsx         # Hero section
│   ├── ServicesSection.jsx     # Services/Values section
│   └── NewsHighlight.jsx       # Featured news section
├── lib/
│   ├── data.js                 # Mock data (news, leadership, gallery)
│   └── utils.js                # Utility functions
├── public/                       # Static files
├── package.json                 # Dependencies
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── .gitignore                  # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero and featured news |
| `/news` | News listing with filters & pagination |
| `/news/[id]` | Individual news article detail |
| `/structure` | Leadership structure page |
| `/gallery` | Photo gallery with lightbox |
| `/api/news` | News API endpoint |

## 🎨 Component Architecture

### Layout Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Complete footer with links and contact info
- **Search Modal**: Full-featured search with real-time results

### Content Components
- **HeroSection**: Eye-catching hero section
- **ServicesSection**: Value propositions & vision/mission
- **NewsHighlight**: Featured news grid
- **NewsCard**: Reusable news card (grid/list layouts)

### UI Components
- **Button**: Customizable button with variants
- **Badge**: Status/category badges
- **SearchModal**: Search functionality

## 🔧 Features

### Search & Filtering
- Real-time search across news titles, excerpts, and categories
- Category-based filtering
- Sort by date (newest/oldest)
- Responsive pagination

### News Management
- Full news listing with metadata
- Detailed article pages with related articles
- Author & publication info
- Share functionality (copy link to clipboard)

### Image Optimization
- Next.js Image component for responsive images
- Proper sizes prop for responsive images
- Automatic WebP conversion

### SEO
- Dynamic metadata for each page
- Open Graph tags
- Semantic HTML5
- Proper heading hierarchy

### Accessibility
- Semantic HTML
- ARIA labels on buttons
- Keyboard navigation support
- Responsive design for all devices

## 💾 Data Management

All mock data is stored in `/lib/data.js`:
- News articles with full content
- Leadership structure
- Gallery images
- Categories

### Adding New Data

Edit `/lib/data.js` to add:
```javascript
{
  id: 7,
  title: "Article Title",
  excerpt: "Short description",
  content: "Full article content",
  date: "1 Juni 2024",
  dateObj: new Date("2024-06-01"),
  category: "Kategori",
  author: "Author Name",
  image: "https://images.unsplash.com/...",
  tags: ["tag1", "tag2"],
}
```

## 🔌 API Endpoints

### GET /api/news

**Get all news:**
```bash
curl http://localhost:3000/api/news
```

**Get specific article:**
```bash
curl http://localhost:3000/api/news?id=1
```

**Filter by category:**
```bash
curl http://localhost:3000/api/news?category=Sosial
```

**Limit results:**
```bash
curl http://localhost:3000/api/news?limit=5
```

## 🎯 Utilities

Located in `/lib/utils.js`:
- `formatDate()` - Format dates in Indonesian locale
- `searchNews()` - Search news articles
- `filterNewsByCategory()` - Filter by category
- `sortNewsByDate()` - Sort articles
- `paginateArray()` - Pagination helper
- `copyToClipboard()` - Copy text to clipboard
- `getShareUrl()` - Generate share URLs

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push

```bash
npm run build
# This generates the production build
```

### Environment Variables

Create `.env.local`:
```
# Future CMS integration
NEXT_PUBLIC_API_URL=https://your-api.com
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- Primary: Indigo-950
- Secondary: Slate tones

### Typography
Fonts are set in `app/layout.jsx` using Google Fonts (Inter).

### Content
All content is in `/lib/data.js` for easy updates.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components are fully responsive across breakpoints.

## 🔐 Security

- Proper CSP headers in next.config.js
- X-Frame-Options protection
- No inline scripts
- Safe external image domains

## 📊 Performance

- Image optimization with Next.js Image
- Route prefetching
- Font optimization
- CSS minification (automatic)
- No heavy dependencies

## 🚀 Future Enhancements

Prepared for:
- CMS integration (Payload CMS, Supabase, etc.)
- Comment system
- Newsletter subscription
- Advanced analytics
- Multi-language support
- Admin dashboard

## 📝 License

&copy; 2024 Batalion Lang Lang Bhuwana. All rights reserved.

## 📧 Support

For questions or issues, contact: hubmas@langlangbhuwana.go.id

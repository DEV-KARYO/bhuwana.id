# 🚀 Quick Start Guide - Lang Lang Bhuwana Portal

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TailwindCSS 3.3
- Lucide React Icons

### Step 2: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Explore the Application

#### Homepage (`/`)
- Hero section with call-to-action buttons
- Service/value propositions
- Featured news showcase
- Responsive navigation

#### News Listing (`/news`)
- Filterable news articles
- Category-based filtering
- Sort by date (newest/oldest)
- Pagination (6 items per page)
- View detailed article pages

#### News Detail (`/news/[id]`)
- Full article content
- Author and publication metadata
- Share functionality (copy link to clipboard)
- Related articles section
- Beautiful typography

#### Leadership (`/structure`)
- Leadership team showcase
- Position and bio information
- Contact links for leaders
- Organizational hierarchy visualization

#### Gallery (`/gallery`)
- Photo gallery with category filtering
- Lightbox viewer for full-size images
- Image descriptions and metadata
- Responsive grid layout

## 📂 File Structure Overview

```
app/                    # All routes & pages
├── page.jsx           # / - Homepage
├── layout.jsx         # Root layout wrapper
├── globals.css        # Global styles
├── news/
│   ├── page.jsx       # /news - News listing
│   └── [id]/page.jsx # /news/[id] - News detail
├── structure/
│   └── page.jsx       # /structure - Leadership
├── gallery/
│   └── page.jsx       # /gallery - Photos
└── api/
    └── news/route.js  # API endpoints

components/           # Reusable React components
├── Navbar.jsx        # Navigation component
├── Footer.jsx        # Footer component
├── Button.jsx        # Custom button
├── Badge.jsx         # Custom badge
├── NewsCard.jsx      # News article card
├── SearchModal.jsx   # Search functionality
└── [Sections]...     # Page sections

lib/                  # Utilities & data
├── data.js          # Mock data (news, leaders, gallery)
├── utils.js         # Helper functions
└── config.js        # Site configuration

public/              # Static assets (images, logo, etc)

```

## 🎨 Design System

### Colors
- **Primary**: Indigo-950 (#1e1b4b)
- **Secondary**: Slate tones
- **Success**: Emerald
- **Warning**: Amber
- **Danger**: Red

### Typography
- Font: Inter (from Google Fonts)
- Base sizes: xs (10px) to 8xl
- All fonts are imported with font-display: swap for better performance

### Components
All components support these props:
- `variant`: 'primary' | 'secondary' | 'ghost' | 'white'
- `size`: 'sm' | 'md' | 'lg'
- `className`: Additional CSS classes

## 🔧 Key Features Explained

### 1. Search Functionality
**Location**: Components/SearchModal.jsx
- Real-time search across news titles, excerpts, and categories
- Keyboard accessible
- Shows popular searches when input is empty
- Displays results count

### 2. Filtering & Pagination
**Location**: App/news/page.jsx
- Category filtering (6 categories)
- Date-based sorting
- 6 items per page
- Auto-scroll on page change

### 3. Image Optimization
**Location**: Components/NewsCard.jsx, etc
- Uses Next.js Image component
- Automatic WebP conversion
- Responsive sizes prop
- Lazy loading by default

### 4. SEO
**Location**: App/layout.jsx & individual pages
- Dynamic metadata for each page
- Open Graph tags
- Twitter/Social cards ready
- Semantic HTML5

## 💾 Working with Data

### Adding News Articles
Edit `lib/data.js`:

```javascript
{
  id: 7,
  title: "Article Title",
  excerpt: "Short description for preview",
  content: "Full article content\n\nWith multiple paragraphs",
  date: "15 Juni 2024",
  dateObj: new Date("2024-06-15"),
  category: "Inovasi",
  author: "Penerangan Satuan",
  image: "https://images.unsplash.com/...",
  tags: ["tag1", "tag2"]
}
```

### Adding Leadership
Add to `leadershipData` array in `lib/data.js`

### Adding Gallery Images
Add to `galleryData` array in `lib/data.js`

## 🌐 API Endpoints (Optional Development Feature)

### GET /api/news
Fetch news with optional filtering:

```bash
# Get all news
curl http://localhost:3000/api/news

# Get by ID
curl http://localhost:3000/api/news?id=1

# Filter by category
curl http://localhost:3000/api/news?category=Sosial

# Limit results
curl http://localhost:3000/api/news?limit=5
```

## 📱 Responsive Design

All pages are fully responsive:
- Mobile: Optimized touch targets, single column
- Tablet: 2-column layouts
- Desktop: Multi-column layouts with sidebars

Test at different breakpoints:
- 320px (Mobile)
- 768px (Tablet)
- 1024px+ (Desktop)

## 🚀 Building for Production

```bash
npm run build
npm start
```

The build process:
1. Optimizes all images
2. Minifies CSS & JavaScript
3. Tree-shakes unused code
4. Generates static pages where possible
5. Creates optimized bundles

## 📊 Performance Tips

✅ Already optimized:
- Image lazy loading
- Font display: swap
- CSS minification
- JavaScript tree-shaking
- Route prefetching

Additional optimizations for future:
- Add caching headers
- Implement analytics
- Monitor Web Vitals
- CDN integration

## 🔒 Security

Configured to follow best practices:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- No inline scripts
- CSP-ready structure
- Safe external image domains

## 🎯 Next Steps for Production

1. **Replace Mock Data**
   - Connect to CMS (Payload CMS, Sanity, etc.)
   - Or connect to API/Database

2. **Add Real Images**
   - Replace unsplash.com images with real photos
   - Configure image domains in next.config.js

3. **Customize Branding**
   - Update site name/description in lib/config.js
   - Replace logo and colors
   - Update contact information

4. **Set Up Domain**
   - Configure domain in hosting provider
   - Update site URL in lib/config.js

5. **Deploy**
   - Vercel (recommended)
   - Netlify
   - Your own server

## 🆘 Troubleshooting

### Port 3000 Already in Use?
```bash
npm run dev -- -p 3001
```

### Build Errors?
```bash
npm install --force
npm run build
```

### Issues with Images?
- Check image URL is accessible
- Verify domain is in next.config.js allowlist
- Check image dimensions (aspect ratio)

## 💡 Tips & Best Practices

1. **Use Page Metadata**: Set metadata in each route for SEO
2. **Keep Data Updated**: Edit lib/data.js for content changes
3. **Test Responsiveness**: Use browser DevTools
4. **Check Accessibility**: Use WAVE or Lighthouse
5. **Monitor Performance**: Use Next.js Analytics

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Lucide Icons](https://lucide.dev)

## ❓ FAQ

**Q: Can I use this for other institutions?**
A: Yes! Customize lib/config.js, lib/data.js, and components/imagery.

**Q: How do I add more pages?**
A: Create files in app/ directory. Next.js uses file-based routing.

**Q: Can I integrate a real CMS?**
A: Yes! Replace mock data fetching with API calls to your CMS.

**Q: Is this SEO friendly?**
A: Yes! Comes with metadata, semantic HTML, and Open Graph tags.

**Q: Can I host this on [my-platform]?**
A: Yes! Works on any platform that supports Node.js (Vercel, Netlify, etc.)

---

**Happy coding! 🚀**
For support: hubmas@langlangbhuwana.go.id

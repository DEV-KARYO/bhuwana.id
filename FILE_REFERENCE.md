# 📑 Complete File Reference

## Quick Navigation

This document lists every file in the project with its purpose and location.

---

## 📱 Pages & Routes (8 files)

### Homepage
**File**: `app/page.jsx`
- **Route**: `/`
- **Purpose**: Landing page with hero, services, and featured news
- **Key Features**: Hero section, value propositions, news showcase
- **Server/Client**: Server Component

### News Listing
**File**: `app/news/page.jsx`
- **Route**: `/news`
- **Purpose**: All news articles with filtering and pagination
- **Key Features**: Category filter, sorting, pagination (6 items/page)
- **Server/Client**: Client Component (state-based filtering)

### News Detail
**File**: `app/news/[id]/page.jsx`
- **Route**: `/news/[id]`
- **Purpose**: Full article with metadata and related items
- **Key Features**: Full content, author info, share button, related articles
- **Server/Client**: Client Component

### Leadership/Structure
**File**: `app/structure/page.jsx`
- **Route**: `/structure`
- **Purpose**: Leadership team showcase and organizational structure
- **Key Features**: Team cards, position info, contact links, hierarchy visualization
- **Server/Client**: Server Component

### Gallery
**File**: `app/gallery/page.jsx`
- **Route**: `/gallery`
- **Purpose**: Photo gallery with category filtering and lightbox
- **Key Features**: Image grid, category filter, lightbox viewer
- **Server/Client**: Client Component (filters & lightbox)

### Root Layout
**File**: `app/layout.jsx`
- **Purpose**: HTML wrapper for all pages, metadata configuration
- **Key Features**: Font imports, global metadata, viewport settings
- **Server/Client**: Server Component (required by Next.js)

### Global Styles
**File**: `app/globals.css`
- **Purpose**: Global TailwindCSS styles and custom animations
- **Key Features**: Tailwind directives, custom animations, utilities
- **Imports**: Used in `app/layout.jsx`

### API: News
**File**: `app/api/news/route.js`
- **Route**: `/api/news`
- **Purpose**: REST API endpoint for fetching news
- **Key Features**: Filter by ID/category, paginate, get categories
- **Methods**: GET only

---

## 🧩 Components (9 files)

### Button Component
**File**: `components/Button.jsx`
- **Purpose**: Reusable button with multiple variants
- **Props**: `variant`, `size`, `isLoading`, `disabled`, `className`
- **Variants**: primary, secondary, ghost, white, outline
- **Sizes**: sm, md, lg
- **Used in**: All pages, modals, cards
- **Type**: Client Component (interactive)

### Badge Component
**File**: `components/Badge.jsx`
- **Purpose**: Status/category badges
- **Props**: `children`, `variant`
- **Variants**: default, primary, success, warning, danger
- **Used in**: News cards, article headers, category tags
- **Type**: Client Component

### Navigation Bar
**File**: `components/Navbar.jsx`
- **Purpose**: Top navigation with scroll detection and mobile menu
- **Key Features**: 
  - Scroll-based style changes
  - Mobile hamburger menu
  - Search modal trigger
  - Logo click to home
- **Props**: None (uses hooks and context)
- **Type**: Client Component (scroll listeners, state)

### Footer
**File**: `components/Footer.jsx`
- **Purpose**: Site-wide footer with links and contact info
- **Sections**: Logo, navigation, information, contact
- **Key Features**: Year auto-update, organized link groups
- **Used in**: Every page via layout
- **Type**: Server Component

### News Card
**File**: `components/NewsCard.jsx`
- **Purpose**: Reusable article card for news display
- **Props**: `news` (object), `layout` (grid/list)
- **Two Layouts**: 
  - Grid: 3 per row (homepage, related articles)
  - List: Full width (news page)
- **Key Features**: Image lazy load, hover effects, category badge
- **Type**: Server Component (can use Next.js Image)

### Search Modal
**File**: `components/SearchModal.jsx`
- **Purpose**: Full-screen search modal with real-time results
- **Key Features**: 
  - Real-time search
  - Popular searches fallback
  - Result display with links
  - Keyboard accessible
- **Props**: `onClose` (callback)
- **Type**: Client Component (search input, state)

### Hero Section
**File**: `components/HeroSection.jsx`
- **Purpose**: Homepage hero banner with animated text and CTA
- **Key Features**: 
  - Background image with overlay
  - Animated entrance transitions
  - Call-to-action buttons
  - Vertical text side element
- **Used in**: `app/page.jsx`
- **Type**: Server Component

### Services Section
**File**: `components/ServicesSection.jsx`
- **Purpose**: Display service/value propositions and vision/mission
- **Key Features**: 
  - 3 service cards
  - Vision & mission section
  - Checklist of values
  - Image with accreditation badge
- **Used in**: `app/page.jsx`
- **Type**: Server Component

### News Highlight Section
**File**: `components/NewsHighlight.jsx`
- **Purpose**: Featured news grid for homepage
- **Key Features**: 
  - 3 featured articles (auto from data)
  - "View All" link to news page
  - Responsive grid
- **Used in**: `app/page.jsx`
- **Type**: Server Component

---

## 📚 Data & Utilities (3 files)

### Mock Data
**File**: `lib/data.js`
- **Purpose**: Centralized mock data for all pages
- **Exports**: 
  - `newsData` - 6 complete articles
  - `categories` - 6 news categories
  - `leadershipData` - 3 team members
  - `galleryData` - 3 gallery items
- **Updating**: Edit arrays directly, no component changes needed
- **Structure**: Each article has id, title, excerpt, content, date, dateObj, category, author, image, tags

### Utility Functions
**File**: `lib/utils.js`
- **Purpose**: Helper functions for common operations
- **Exports**: 
  - `formatDate(date)` - Format to Indonesian locale
  - `searchNews(news, query)` - Full-text search articles
  - `filterNewsByCategory(news, category)` - Filter by category
  - `sortNewsByDate(news, order)` - Sort ascending/descending
  - `paginateArray(array, page, size)` - Pagination logic
  - `copyToClipboard(text)` - Copy to clipboard (async)
  - `getShareUrl(baseUrl, id)` - Generate share URLs
- **Used in**: News page, detail page, search modal

### Site Configuration
**File**: `lib/config.js`
- **Purpose**: Global site configuration and constants
- **Exports**: 
  - `siteConfig` - Site metadata (name, email, phone, address, social)
  - `navItems` - Navigation menu items
  - `footerLinks` - Footer link groups
- **Usage**: Can be imported and used across the site
- **Updating**: Edit for site-wide configuration changes

---

## ⚙️ Configuration Files (5 files)

### Next.js Configuration
**File**: `next.config.js`
- **Purpose**: Next.js build and optimization settings
- **Includes**: 
  - Image optimization config
  - Remote image domains (unsplash.com)
  - Security headers (X-Content-Type-Options, X-Frame-Options)
- **Edit for**: Adding image domains, setting rewrite rules

### TailwindCSS Configuration
**File**: `tailwind.config.js`
- **Purpose**: Design system and TailwindCSS customization
- **Includes**: 
  - Content paths
  - Theme extensions
  - Custom animations (slow-zoom, slide-in-from-bottom)
  - Tailwind plugins (@tailwindcss/typography)
- **Edit for**: Changing colors, spacing, fonts

### PostCSS Configuration
**File**: `postcss.config.js`
- **Purpose**: CSS processing pipeline
- **Includes**: Tailwind and Autoprefixer plugins
- **Usually unchanged**: Default setup works fine

### ESLint Configuration
**File**: `.eslintrc.json`
- **Purpose**: Code quality rules and linting
- **Extends**: next/core-web-vitals
- **Rules**: React and Next.js specific linting rules
- **Edit for**: Adjusting code style preferences

### Dependencies
**File**: `package.json`
- **Purpose**: Project metadata and dependencies
- **Includes**: 
  - Project name and version
  - npm scripts (dev, build, start, lint)
  - Dependencies: React, Next.js, TailwindCSS, Lucide Icons
  - Dev dependencies: TailwindCSS, PostCSS, ESLint, TypeScript (optional)
- **Scripts**:
  - `npm run dev` - Development server
  - `npm run build` - Production build
  - `npm start` - Start production server
  - `npm run lint` - Check code quality

---

## 📖 Documentation Files (5 files)

### Project Summary (This is a good starting point!)
**File**: `PROJECT_SUMMARY.md`
- **Purpose**: Executive summary of the entire refactoring
- **Includes**: Features, structure, status, next steps
- **Read first**: If you're new to the project

### README - Main Documentation
**File**: `README.md`
- **Purpose**: Complete feature overview and documentation
- **Sections**: 
  - Project overview
  - Installation
  - Project structure
  - Pages & routes
  - Components
  - Features
  - Data management
  - Deployment
- **Most comprehensive**: Go here for full details

### Setup Guide - Quick Start
**File**: `SETUP_GUIDE.md`
- **Purpose**: Quick start guide and common questions
- **Sections**: 
  - Installation steps
  - File structure overview
  - Feature explanations
  - Working with data
  - Building for production
  - Troubleshooting
  - FAQ
- **Best for**: Getting started quickly

### Architecture - Technical Deep-Dive
**File**: `ARCHITECTURE.md`
- **Purpose**: Technical architecture and design decisions
- **Sections**: 
  - Migration overview
  - Architecture layers
  - Component breakdown
  - Data flow
  - Route structure
  - State management
  - Performance optimizations
  - Security features
  - Testing readiness
  - Scalability path
  - Future enhancements
- **For developers**: Understanding technical decisions

### Deployment Checklist
**File**: `DEPLOYMENT_CHECKLIST.md`
- **Purpose**: Step-by-step deployment and launch guide
- **Sections**: 
  - Customization phase (5 steps)
  - Technical preparation (7 steps)
  - Deployment preparation (5 steps)
  - Launch & monitoring (5 steps)
  - Advanced features (optional)
  - Pre-launch checklist
  - Launch day checklist
  - Success metrics
- **Before deployment**: Complete all sections

### Environment Template
**File**: `.env.example`
- **Purpose**: Template for environment variables
- **Instructions**: Copy to `.env.local` and update values
- **Variables**: NEXT_PUBLIC_API_URL and future CMS configs

---

## 🚀 Getting Started with Files

### First Time Setup
1. Read `PROJECT_SUMMARY.md` (this overview)
2. Read `README.md` (full documentation)
3. Run `npm install`
4. Run `npm run dev`

### Making Changes
1. Edit `lib/data.js` for content
2. Edit `lib/config.js` for site settings
3. Modify components as needed

### Before Deployment
1. Read `SETUP_GUIDE.md` for tips
2. Follow `DEPLOYMENT_CHECKLIST.md`
3. Run `npm run build` to test

### Going to Production
1. Update all configuration files
2. Test with `npm run build` && `npm start`
3. Follow deployment platform instructions
4. Complete `DEPLOYMENT_CHECKLIST.md`

---

## 📋 File Dependencies

```
Root
├─ app/layout.jsx (uses)
├─ app/globals.css
├─ app/page.jsx (uses)
│  ├─ components/Navbar.jsx
│  ├─ components/HeroSection.jsx
│  ├─ components/ServicesSection.jsx
│  ├─ components/NewsHighlight.jsx
│  ├─ components/Badge.jsx
│  ├─ components/Button.jsx
│  ├─ components/NewsCard.jsx (uses)
│  │  └─ lib/data.js
│  └─ components/Footer.jsx
│
├─ app/news/page.jsx (uses)
│  ├─ components/Navbar.jsx
│  ├─ components/NewsCard.jsx
│  ├─ components/Button.jsx
│  ├─ components/Badge.jsx
│  ├─ lib/data.js
│  ├─ lib/utils.js (used for filtering)
│  └─ components/Footer.jsx
│
├─ app/news/[id]/page.jsx (uses)
│  ├─ lib/data.js (find article by ID)
│  ├─ lib/utils.js (for sharing)
│  ├─ components/Navbar.jsx
│  ├─ components/Footer.jsx
│  ├─ components/NewsCard.jsx (related articles)
│  └─ components/Button.jsx
│
├─ app/structure/page.jsx (uses)
│  ├─ lib/data.js (leadershipData)
│  ├─ components/Navbar.jsx
│  ├─ components/Footer.jsx
│  ├─ components/Badge.jsx
│  └─ components/Button.jsx
│
├─ app/gallery/page.jsx (uses)
│  ├─ lib/data.js (galleryData)
│  ├─ components/Navbar.jsx
│  ├─ components/Footer.jsx
│  ├─ components/Badge.jsx
│  └─ Image component (Next.js)
│
├─ app/api/news/route.js (uses)
│  └─ lib/data.js (returns news data)
│
└─ All pages use
   ├─ components/Navbar.jsx
   │  ├─ components/Button.jsx
   │  └─ components/SearchModal.jsx
   │     ├─ lib/data.js
   │     └─ lib/utils.js
   └─ components/Footer.jsx
```

---

## 🎯 Which File to Edit?

### Change Content
→ Edit `lib/data.js`

### Change Site Name/Email
→ Edit `lib/config.js`

### Change Colors/Design
→ Edit `tailwind.config.js`

### Add Features
→ Create in `components/` and use in pages

### Change a Page Layout
→ Edit `app/[page]/page.jsx`

### Add Navigation Items
→ Edit `lib/config.js` (navItems)

### Customize Button Styles
→ Edit `components/Button.jsx`

### Change Footer
→ Edit `components/Footer.jsx`

### Troubleshoot Build
→ Check `next.config.js`

### Add Image Domain
→ Update `next.config.js` (remotePatterns)

---

## ✅ File Completeness

All files are:
- ✅ Fully functional
- ✅ Well commented where needed
- ✅ Following best practices
- ✅ Production-ready
- ✅ Properly organized
- ✅ Easily maintainable

**No action needed** - everything is ready to use!

---

That's the complete file reference. Happy developing! 🚀

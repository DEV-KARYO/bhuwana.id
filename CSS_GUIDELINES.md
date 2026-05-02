# CSS Guidelines - Bhuwana.id

Panduan CSS untuk menjaga consistency dan menghindari issue yang sudah diperbaiki.

## Standar Komponen

### Spacing & Layout
Gunakan standardized classes untuk consistency:
- `.page-content` - Wrapper halaman utama
- `.page-header` - Header section dengan padding/margin
- `.page-section` - Content section dengan vertical spacing
- `.section-spacing` - Horizontal padding responsif (px-4 md:px-6)

**Jangan hardcode:**
```jsx
// ❌ SALAH
<div className="min-h-screen mt-20 px-6">

// ✅ BENAR
<div className="page-content">
  <div className="page-header">
```

### Cards
Gunakan card utilities:
- `.card-base` - Base card styling
- `.card-hover` - Card dengan hover shadow effect
- `.card-elevated` - Card dengan shadow preset
- `.card-interactive` - Card yang bisa diklik

**Contoh:**
```jsx
<div className="card-elevated p-6 md:p-8">
  {/* content */}
</div>
```

### Buttons & Filters
- `.filter-btn` - Base filter button
- `.filter-btn-active` - Active state
- `.filter-btn-inactive` - Inactive state

**Contoh:**
```jsx
<button className={activeCategory === cat ? 'filter-btn-active' : 'filter-btn-inactive'}>
  {cat}
</button>
```

### Gallery & Images
- `.gallery-item` - Container gallery item
- `.gallery-image` - Image dengan hover scale
- `.gallery-overlay` - Hover overlay effect
- `.img-responsive` - Full-width responsive image
- `.img-contain` - Object contain image

### Lists
- `.list-clean` - Remove list styling
- `.list-spaced` - Spaced list items with `space-y-*`

### Flexbox Utilities
- `.flex-center` - flex items-center justify-center
- `.flex-between` - flex items-center justify-between
- `.flex-col-center` - flex flex-col items-center justify-center

## Responsive Design

### Breakpoints
```
Default       - Mobile (< 768px)
md:           - Tablet (768px+)
lg:           - Desktop (1024px+)
xl:           - Wide (1280px+)
2xl:          - Ultra-wide (1536px+)
```

### Typography Scaling
```jsx
// ✅ BENAR - Responsive text sizing
<h1 className="text-3xl md:text-4xl lg:text-5xl font-black">
  Title
</h1>

// ❌ SALAH - Fixed size
<h1 className="text-5xl font-black">
  Title
</h1>
```

### Spacing Pattern
```jsx
// ✅ BENAR
<div className="p-4 md:p-6 lg:p-8">
<div className="gap-4 md:gap-6 lg:gap-8">

// ❌ SALAH
<div className="p-8">
<div className="gap-10">
```

## CSS Classes (Do's & Don'ts)

### ✅ DO USE
- Tailwind utilities (primary method)
- Standardized utility classes dari globals.css
- Responsive modifiers (sm:, md:, lg:)
- Semantic class names

### ❌ DON'T USE
- `@apply` dengan variant modifiers (group, child selectors, etc.)
- Inline styles untuk styling (hanya untuk dynamic values)
- Custom CSS classes tanpa standardization
- Hardcoded pixel values
- Multiple wrapper divs for spacing

## Animations & Effects

### Available Animations
```css
.animate-slide-in
.animate-slide-in-up
.animate-fade-in
.animate-scale-in
.animate-bounce-soft
.animate-pulse-ring
.animate-glow
.hover-lift
.hover-grow
.hover-glow
```

### Hover Effects
Jangan hardcode hover effects, gunakan classes:
```jsx
// ❌ SALAH
<div className="hover:shadow-xl hover:scale-105">

// ✅ BENAR
<div className="hover-lift">
```

## Color Palette

### Primary
- `indigo-950` - Main dark color
- `indigo-600` - Accent

### Neutral
- `slate-*` - Text & backgrounds
- `white` - Background utama

### Status
- Success: `emerald-*`
- Warning: `amber-*`
- Danger: `red-*`

## Grid Layouts

### Image Grids
Gunakan `.news-grid` untuk konsistent layout:
```jsx
// ✅ BENAR - Sudah responsive
<div className="news-grid">
  {items.map(item => (
    <div key={item.id}>{/* ... */}</div>
  ))}
</div>

// ❌ SALAH
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## Form Elements

### Inputs
Gunakan `.input-base` untuk consistency:
```jsx
<input className="input-base" />
<input className="input-base input-error" />
```

### Modals
```jsx
<div className="modal-backdrop" onClick={onClose}>
  <div className="modal-content">
    {/* content */}
  </div>
</div>
```

## Common Patterns

### Section dengan Header
```jsx
<div className="page-section">
  <div className="container mx-auto section-spacing">
    <div className="section-header">
      <Badge variant="primary">Subtitle</Badge>
      <h1 className="section-title mt-4 mb-6">Title</h1>
      <p className="section-subtitle">Description</p>
    </div>
    
    {/* Content grid */}
    <div className="news-grid">
      {/* items */}
    </div>
  </div>
</div>
```

### Filter Buttons
```jsx
<div className="flex justify-center gap-3 flex-wrap">
  {categories.map(cat => (
    <button
      key={cat}
      className={
        activeCategory === cat 
          ? 'filter-btn-active' 
          : 'filter-btn-inactive'
      }
      onClick={() => setActiveCategory(cat)}
    >
      {cat}
    </button>
  ))}
</div>
```

### Card Grid
```jsx
<div className="news-grid">
  {items.map(item => (
    <div key={item.id} className="card-elevated p-6 md:p-8">
      {/* card content */}
    </div>
  ))}
</div>
```

## Performance Tips

1. **Avoid Nested Media Queries** - Tailwind handles responsive design
2. **Use CSS Classes** - Faster than inline styles
3. **Remove Unused Classes** - Tailwind purges unused CSS
4. **Avoid Deep Selectors** - Keep specificity low

## When to Create Custom CSS

Custom CSS hanya untuk kasus yang tidak bisa di-handle Tailwind:
1. Animations kompleks
2. Custom hover effects dengan multiple elements
3. Pseudo-elements yang kompleks

Contoh:
```css
/* globals.css */
@keyframes customAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}

.my-custom-animation {
  animation: customAnimation 0.3s ease-out;
}
```

## Testing Responsive Design

Selalu test pada:
- **Mobile** (375px) - iPhone SE
- **Tablet** (768px) - iPad
- **Desktop** (1024px+) - Laptop
- **Wide** (1440px+) - Large screens

## Debugging CSS

### Chrome DevTools
1. Inspect element
2. Cek computed styles
3. Lihat which CSS applied
4. Check cascading order

### Common Issues
1. **Tumpang tindih (overlap)** - Check padding/margin
2. **Text tidak responsif** - Add md:/lg: variants
3. **Image tidak scale** - Use img-responsive/img-contain classes
4. **Spacing tidak konsisten** - Use standardized utilities

## References
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Tailwind Config](https://tailwindcss.com/docs/configuration)
- globals.css untuk semua custom utilities

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

### Performance-Optimized Transitions
All transitions use cubic-bezier easing for smooth, elegant motion:

**Smooth Cubic-Bezier Transitions**
```css
.transition-smooth        - All transitions with cubic-bezier(0.4, 0, 0.2, 1) - 300ms
.transition-smooth-fast   - Fast transitions - 200ms
.transition-smooth-slow   - Slow transitions - 500ms
.transition-bounce        - Bouncy animations - cubic-bezier(0.34, 1.56, 0.64, 1)
.transition-elastic       - Elastic animations - cubic-bezier(0.175, 0.885, 0.32, 1.275)
```

**Prefer smooth transitions over hardcoded ones:**
```jsx
// ❌ SALAH
<div className="transition-all duration-300">

// ✅ BENAR
<div className="transition-smooth">
```

### Available Animations
```css
/* Entrance Animations */
.animate-slide-in         - Smooth slide from left with cubic-bezier easing
.animate-slide-in-up      - Slide up with smooth cubic-bezier easing
.animate-fade-in          - Smooth fade in with cubic-bezier easing
.animate-scale-in         - Smooth scale with bounce easing
.animate-reveal-up        - Elegant reveal from bottom (0.6s cubic-bezier)

/* Floating Effects */
.animate-float-gentle     - Gentle floating animation (6s ease-in-out)
.animate-slow-zoom        - Subtle background zoom (16s ease-in-out)

/* Exit Animations */
.animate-fade-out         - Exit fade (0.3s ease-out)
.animate-slide-out-right  - Mobile menu exit (0.35s ease-out)

/* Additional */
.animate-bounce-soft      - Soft bounce effect
.animate-pulse-ring       - Expanding ring pulse
.animate-glow             - Glow effect
```

### Hover Effects - Enhanced Version
Prefer semantic hover utilities:
```jsx
// ✅ BENAR - Using unified smooth transitions
<div className="hover-lift">              // -2px translate + shadow
<div className="hover-lift-sm">           // -1px translate + shadow
<div className="hover-grow">              // 105% scale
<div className="hover-grow-sm">           // 102% scale
<div className="hover-glow">              // Shadow glow effect
<div className="hover-brightness-up">     // Brightness +10%
<div className="hover-scale-image">       // 110% scale (500ms)

// ❌ SALAH - Don't hardcode
<div className="hover:shadow-xl hover:scale-105">
```

### Stagger Animations (Lists)
Apply `.stagger-children` to parent for cascaded animations:
```jsx
// ✅ BENAR - Auto-cascade up to 8 children
<div className="grid stagger-children">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</div>

// Cascading delays: 50ms, 100ms, 150ms, 200ms, 250ms, 300ms, 350ms, 400ms

// ❌ SALAH - Don't manually set animation delays on children
<div className="grid">
  {items.map((item, i) => (
    <div style={{animationDelay: `${i * 100}ms`}}>{item}</div>
  ))}
</div>
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

## Image Optimization

### Lazy Loading Images
Use built-in utilities for smooth image loading experience:

```jsx
// ✅ BENAR - With loading state
<div className="img-container">
  <img 
    src={src} 
    className="img-fade-in" 
    alt="description"
    loading="lazy"
  />
</div>

// ✅ Using Next Image with optimization
<Image
  src={imageUrl}
  alt="description"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
  blurDataURL={...}
/>
```

### Image Utilities
```css
.img-lazy          - Placeholder while loading (bg-slate-100 + animate-pulse)
.img-loading       - Shimmer loading animation (background animation)
.img-fade-in       - Smooth fade-in after load (0.6s cubic-bezier)
.img-container     - Responsive container with overflow handling
```

### Gallery Images with Fallback
```jsx
// Always provide dimensions to prevent layout shift
<picture>
  <img 
    src={fallback} 
    className="w-full h-full object-cover hover-scale-image"
    alt="gallery item"
  />
</picture>
```

## Accessibility & Reduced Motion

### Respects User Preferences
The CSS automatically respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**This means:**
- Users with motion sensitivity won't see animations
- All page transitions remain instant for accessibility
- No CSS changes needed per component

## GPU Acceleration Classes

### Use for Heavy Animations
```jsx
// For floating elements, animated backgrounds, etc.
<div className="animate-float-gentle accelerate-gpu">
  {/* Will use GPU for smooth 60fps animations */}
</div>
```

### Available Classes
```css
.accelerate-gpu        - Enable GPU acceleration (transform3d + backface-visibility)
.animate-float-gentle  - Already optimized for GPU (6s infinite)
.animate-slow-zoom     - Already optimized for GPU (16s infinite)
```

## Easing Functions Reference

```
cubic-bezier(0.4, 0, 0.2, 1)           - Standard smooth easing (Material Design)
cubic-bezier(0.34, 1.56, 0.64, 1)      - Bounce/spring easing
cubic-bezier(0.175, 0.885, 0.32, 1.275) - Elastic easing
ease-out                                 - Deceleration curve
ease-in-out                             - Smooth both directions
```

## Typography

### Text Balance (Improved Multi-line Rendering)
```jsx
<h1 className="text-4xl text-balance">
  Long titles that wrap nicely now
</h1>
```

### Line Clamping
```jsx
<p className="truncate-lines-2">              // Exactly 2 lines
<p className="truncate-lines-3">              // Exactly 3 lines
<p className="line-clamp-4">                  // Exactly 4 lines
<p className="line-clamp-5">                  // Exactly 5 lines
```

## Scrollbar Styling

### Custom Scrollbar
```jsx
<div className="custom-scrollbar h-96 overflow-y-auto">
  {/* Content with smooth themed scrollbar */}
</div>
```

Scrollbar uses `rgba(79, 70, 229, 0.5)` color with smooth transitions on hover.

## Glass Morphism

### Frosted Glass Effect
```jsx
// Light glass
<div className="glass">
  {/* Semi-transparent white with blur */}
</div>

// Dark glass
<div className="glass-dark">
  {/* Semi-transparent dark with blur */}
</div>

// With hover effect
<div className="glass-hover">
  {/* Changes opacity on hover smoothly */}
</div>
```

## Page Transitions

### Smooth Page Entry/Exit
```css
.transition-page-in     - Fade + slide in from bottom (0.4-0.5s)
.transition-page-out    - Fade out only (0.3s)
```

Use in page wrappers for consistent transitions:
```jsx
<main className="transition-page-in">
  {/* Page content */}
</main>
```

## Testing & Validation

### Performance Checklist
- [ ] No inline styles for layout/spacing
- [ ] Using standardized utility classes
- [ ] Images have alt text and loading="lazy"
- [ ] No hardcoded colors (use Tailwind palette)
- [ ] Animations respect prefers-reduced-motion
- [ ] CSS build passes (npm run build)
- [ ] No unused classes in output

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

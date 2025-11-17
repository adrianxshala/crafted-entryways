# Performance Optimizations

This document outlines all performance optimizations implemented in the application.

## ✅ Completed Optimizations

### 1. Code Splitting & Lazy Loading
- **Routes**: All routes are lazy-loaded using `React.lazy()` and `Suspense`
- **Benefits**: Reduces initial bundle size, faster initial page load
- **Files**: `src/App.tsx`

### 2. Image Optimization
- **Lazy Loading**: Created `LazyImage` component with IntersectionObserver
- **Loading Strategy**: Images load only when in viewport (50px margin)
- **Placeholder**: Shows skeleton loader while image loads
- **Files**: `src/components/LazyImage.tsx`

### 3. Animation Optimizations
- **Transform & Opacity Only**: All animations use `transform` and `opacity` for GPU acceleration
- **Prefers-Reduced-Motion**: Respects user accessibility preferences
- **Performance**: Animations use CSS transforms instead of layout properties
- **Files**: 
  - `src/hooks/useReducedMotion.ts`
  - `src/lib/animations.ts`
  - `src/index.css`

### 4. Debouncing
- **Form Inputs**: Debounced filter/search inputs (150ms delay)
- **Benefits**: Reduces unnecessary re-renders and computations
- **Files**: 
  - `src/hooks/useDebounce.ts`
  - `src/pages/Home.tsx`

### 5. Memoization
- **Heavy Components**: `DoorSlider`, `LazyImage` wrapped with `React.memo()`
- **Computed Values**: `useMemo` for filtered doors list
- **Benefits**: Prevents unnecessary re-renders
- **Files**: 
  - `src/components/DoorSlider.tsx`
  - `src/components/LazyImage.tsx`
  - `src/pages/Home.tsx`

### 6. Bundle Optimization
- **Manual Chunks**: Separated vendor, framer-motion, and swiper into separate chunks
- **Bundle Analyzer**: Added rollup-plugin-visualizer for bundle analysis
- **Benefits**: Better caching, smaller initial bundle
- **Files**: `vite.config.ts`

### 7. Accessibility
- **Prefers-Reduced-Motion**: All animations respect user preferences
- **CSS Media Query**: Global CSS rule for reduced motion
- **Runtime Detection**: Hook for JavaScript-based detection
- **Files**: 
  - `src/index.css`
  - `src/hooks/useReducedMotion.ts`

## 📊 Performance Targets

- **Lighthouse Score**: Target 90+ for Performance
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1

## 🔧 Usage

### Analyzing Bundle Size
```bash
npm run build:analyze
```
This will build the app and open a visual bundle analysis in your browser.

### Testing Performance
1. Run `npm run build`
2. Run `npm run preview`
3. Open Chrome DevTools > Lighthouse
4. Run performance audit

## 📝 Notes

- **WebP Format**: Consider converting images to WebP format for better compression
- **Virtualization**: For Gallery with many items, consider implementing virtualization (react-window or react-virtual)
- **Service Worker**: Consider adding a service worker for offline support and caching
- **CDN**: Consider using a CDN for static assets

## 🚀 Next Steps (Optional)

1. Convert images to WebP format
2. Implement virtualization for Gallery component
3. Add service worker for offline support
4. Implement image optimization pipeline
5. Add resource hints (preload, prefetch, preconnect)


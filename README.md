# Velvet Vogue — Luxury Fashion E-Commerce

> *Luxury Fashion Redefined*

A complete, production-quality luxury fashion e-commerce website built with pure HTML5, CSS3, and Vanilla JavaScript (ES6+). No frameworks. No dependencies beyond Google Fonts and Font Awesome CDN.

---

## 🗂 Project Structure

```
velvet-vogue/
├── index.html         # Main HTML document (semantic, SEO-friendly)
├── css/
│   └── style.css      # Complete stylesheet (900+ lines, fully commented)
├── js/
│   └── script.js      # Complete JavaScript (600+ lines, fully commented)
├── images/            # (placeholder — images loaded via Unsplash CDN)
└── README.md
```

---

## ✨ Features

### Opening Animation
- Full-screen deep red velvet curtains with texture overlay
- Cinematic slide-open from center (CSS cubic-bezier easing)
- Brand logo, title, tagline with fade + scale entrance
- "Explore Collection" and "Seller Portal" CTA buttons

### Pages & Sections
1. **Sticky Navbar** — scrolled glass effect, active link tracking, mobile hamburger menu
2. **Hero Section** — fullscreen banner with subtle Ken Burns zoom, layered typography
3. **Marquee Ticker** — infinite scrolling promotional strip
4. **Featured Collection** — JavaScript-powered category tabs (All / Women / Men / Kids / Accessories)
5. **Trending This Week** — editorial asymmetric grid layout
6. **New Arrivals** — NEW badge cards with hover overlays
7. **Flash Sale** — real-time countdown timer, animated sale badges, discount pricing
8. **Designer Spotlight** — large editorial layout with designer stats
9. **Why Shop With Us** — 4-card feature grid with hover icon effects
10. **Testimonials** — 3-card layout with featured center card
11. **Newsletter** — email subscription with success state
12. **Contact** — info + contact form with validation
13. **Footer** — 4-column grid, social icons, payment icons

### JavaScript Features
- `curtain` — cinematic intro animation
- `cart` — add/remove/clear with localStorage persistence
- `wishlist` — per-product toggle with icon state
- `filtering` — instant category filtering with re-render
- `countdown` — session-persisted flash sale timer
- `scrollReveal` — IntersectionObserver fade-up animations
- `toasts` — non-intrusive notification system
- `smoothScroll` — anchor scroll with navbar offset
- `backToTop` — scroll-triggered floating button

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0a0608` |
| Surface | `#100c0e` |
| Accent Red | `#8b1a1a` |
| Gold | `#c9a84c` |
| Text | `#f5f0ea` |
| Display Font | Cormorant Garamond (serif) |
| UI Font | Jost (sans-serif) |

---

## 🚀 Getting Started

1. **Open locally** — simply open `index.html` in any modern browser. No build step required.
2. **Images** — all images are loaded from Unsplash CDN. Internet connection required for images.
3. **Fonts & Icons** — loaded from Google Fonts and Font Awesome CDN.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1100px` | Full desktop 4-column grid |
| `≤ 1100px` | Adjusted spotlight + footer |
| `≤ 900px`  | Stacked testimonials, single-col contact |
| `≤ 768px`  | Mobile nav, hamburger menu |
| `≤ 480px`  | 2-col product grid, stacked hero actions |

---

## 📄 License

© 2025 Velvet Vogue. All rights reserved.

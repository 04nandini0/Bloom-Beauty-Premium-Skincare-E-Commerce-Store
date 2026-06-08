/* =========================================
   BLOOM BEAUTY – E-Commerce JavaScript
   =========================================
   Sections:
   1. Product Data
   2. State & LocalStorage
   3. Product Rendering
   4. Product Filtering & Search
   5. Wishlist
   6. Cart Management
   7. Cart Sidebar UI
   8. Quick View Modal
   9. Countdown Timer
   10. Scroll Reveal Animations
   11. Navigation & UI
   12. Forms & Newsletter
   13. Back To Top
   14. Toast Notifications
   15. Init
   ========================================= */

'use strict';

/* -----------------------------------------
   1. PRODUCT DATA – 18 Products
   ----------------------------------------- */
const PRODUCTS = [
  {
    id: 1,
    name: 'Rose Petal Foam Cleanser',
    category: 'cleanser',
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80',
    badges: ['bestseller'],
    isNew: false,
    description: 'A gentle, sulfate-free foam cleanser enriched with real rose extract and hyaluronic acid. Removes impurities while maintaining skin\'s natural moisture balance.',
    benefits: ['Sulfate-Free', 'Rose Extract', 'pH Balanced', 'All Skin Types'],
  },
  {
    id: 2,
    name: 'Vitamin C Brightening Serum',
    category: 'serum',
    price: 1299,
    originalPrice: 1799,
    rating: 4.9,
    reviews: 587,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
    badges: ['bestseller', 'sale'],
    isNew: false,
    description: '15% stabilized Vitamin C serum with ferulic acid and niacinamide. Brightens, firms, and protects skin against environmental damage.',
    benefits: ['15% Vit C', 'Ferulic Acid', 'Anti-Oxidant', 'Brightening'],
  },
  {
    id: 3,
    name: 'Hydra Glow Moisturizer',
    category: 'moisturizer',
    price: 1099,
    originalPrice: null,
    rating: 4.7,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1614159476516-4e54d2b3e82e?w=500&q=80',
    badges: ['bestseller'],
    isNew: false,
    description: 'Lightweight yet deeply nourishing moisturizer with ceramides, peptides, and botanical hyaluronic acid. Suitable for all skin types.',
    benefits: ['Ceramides', 'Peptides', 'Hyaluronic Acid', 'Non-Comedogenic'],
  },
  {
    id: 4,
    name: 'Invisible Shield SPF 50+',
    category: 'sunscreen',
    price: 899,
    originalPrice: 1199,
    rating: 4.6,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80',
    badges: ['sale'],
    isNew: false,
    description: 'Ultra-lightweight mineral sunscreen with SPF 50+. Zero white cast, water-resistant formula that layers beautifully under makeup.',
    benefits: ['SPF 50+', 'No White Cast', 'Water Resistant', 'Mineral'],
  },
  {
    id: 5,
    name: 'Kaolin Clay Detox Mask',
    category: 'mask',
    price: 999,
    originalPrice: null,
    rating: 4.8,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80',
    badges: [],
    isNew: false,
    description: 'Deep cleansing clay mask with kaolin, charcoal, and Australian tea tree oil. Draws out impurities without over-drying.',
    benefits: ['Kaolin Clay', 'Charcoal', 'Tea Tree', 'Deep Cleansing'],
  },
  {
    id: 6,
    name: 'Retinol Renewal Night Serum',
    category: 'serum',
    price: 1599,
    originalPrice: 1999,
    rating: 4.7,
    reviews: 341,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
    badges: ['new', 'sale'],
    isNew: true,
    description: '0.3% encapsulated retinol with squalane and bakuchiol. Reduces fine lines and improves skin texture overnight without irritation.',
    benefits: ['0.3% Retinol', 'Encapsulated', 'Bakuchiol', 'Anti-Aging'],
  },
  {
    id: 7,
    name: 'Dewy Skin Starter Kit',
    category: 'kit',
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80',
    badges: ['bestseller', 'sale'],
    isNew: false,
    description: 'Your complete beginner\'s skincare routine. Includes Rose Cleanser, Vitamin C Serum, and Hydra Glow Moisturizer in a beautiful gift box.',
    benefits: ['3 Full-Size Products', 'Gift Ready', 'Beginner Friendly', 'Save 28%'],
  },
  {
    id: 8,
    name: 'Micellar Cleansing Water',
    category: 'cleanser',
    price: 649,
    originalPrice: null,
    rating: 4.5,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80',
    badges: [],
    isNew: false,
    description: 'Gentle micellar water infused with aloe vera and chamomile. Effortlessly dissolves makeup and SPF in seconds.',
    benefits: ['Aloe Vera', 'Chamomile', 'No-Rinse', 'Fragrance-Free'],
  },
  {
    id: 9,
    name: 'Peptide Firming Eye Cream',
    category: 'serum',
    price: 1199,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 224,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
    badges: ['new'],
    isNew: true,
    description: 'Concentrated eye cream with tri-peptide complex, caffeine, and niacinamide. Targets dark circles, puffiness, and fine lines.',
    benefits: ['Tri-Peptide', 'Caffeine', 'Niacinamide', 'Under-Eye'],
  },
  {
    id: 10,
    name: 'Overnight Glow Sleeping Mask',
    category: 'mask',
    price: 1349,
    originalPrice: 1799,
    rating: 4.9,
    reviews: 398,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80',
    badges: ['bestseller', 'sale'],
    isNew: false,
    description: 'Wake up to visibly plumper, brighter skin. This leave-on sleeping mask with niacinamide, ceramides, and red algae works while you rest.',
    benefits: ['Leave-On', 'Niacinamide', 'Ceramides', 'Red Algae'],
  },
  {
    id: 11,
    name: 'Hyaluronic Acid Plumping Serum',
    category: 'serum',
    price: 1149,
    originalPrice: null,
    rating: 4.7,
    reviews: 276,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
    badges: ['new'],
    isNew: true,
    description: 'Triple-molecular weight hyaluronic acid serum that delivers intense hydration to all skin layers for a visibly plumped complexion.',
    benefits: ['3 Molecular Weights', 'Instant Plumping', 'Vegan', 'Fragrance-Free'],
  },
  {
    id: 12,
    name: 'Niacinamide 10% Pore Serum',
    category: 'serum',
    price: 999,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
    badges: ['sale'],
    isNew: false,
    description: '10% niacinamide + 1% zinc formula for minimising pore appearance, controlling sebum, and brightening skin tone.',
    benefits: ['10% Niacinamide', '1% Zinc', 'Pore Minimising', 'Oil Control'],
  },
  {
    id: 13,
    name: 'Ceramide Barrier Repair Cream',
    category: 'moisturizer',
    price: 1249,
    originalPrice: null,
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1614159476516-4e54d2b3e82e?w=500&q=80',
    badges: ['new'],
    isNew: true,
    description: 'Barrier-strengthening cream with ceramides NP, AP & EOP, cholesterol, and fatty acids. Ideal for dry and sensitive skin.',
    benefits: ['3 Ceramide Types', 'Barrier Repair', 'Sensitive Skin', 'Fragrance-Free'],
  },
  {
    id: 14,
    name: 'Tinted Mineral SPF 30',
    category: 'sunscreen',
    price: 1099,
    originalPrice: null,
    rating: 4.5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80',
    badges: ['new'],
    isNew: true,
    description: 'Light-coverage tinted mineral sunscreen that evens skin tone while protecting against UVA/UVB. Natural finish for all undertones.',
    benefits: ['Light Coverage', 'SPF 30', 'Iron Oxides', 'Natural Finish'],
  },
  {
    id: 15,
    name: 'Vitamin C Brightening Kit',
    category: 'kit',
    price: 2449,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 302,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80',
    badges: ['sale'],
    isNew: false,
    description: 'Complete brightening system: Vitamin C Serum, Brightening Moisturizer, and Glow Exfoliating Toner. See results in 4 weeks.',
    benefits: ['3 Products', 'Brightening Focus', 'Save 30%', 'Gift Box'],
  },
  {
    id: 16,
    name: 'Glow Starter Bundle',
    category: 'kit',
    price: 3199,
    originalPrice: 5199,
    rating: 4.9,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80',
    badges: ['bestseller', 'sale'],
    isNew: false,
    description: 'Buy 2 Get 1 bundle. Full skincare routine including Cleanser, Serum, Moisturizer, and SPF. The ultimate starter pack.',
    benefits: ['4 Full-Size', 'Buy 2 Get 1', 'Best Value', 'Routine Ready'],
  },
  {
    id: 17,
    name: 'Pore-Refining BHA Cleanser',
    category: 'cleanser',
    price: 849,
    originalPrice: null,
    rating: 4.6,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80',
    badges: ['new'],
    isNew: true,
    description: 'Daily cleanser with 0.5% salicylic acid, green tea, and aloe vera. Gently exfoliates to unclog pores and prevent breakouts.',
    benefits: ['0.5% BHA', 'Green Tea', 'Anti-Acne', 'Pore Refining'],
  },
  {
    id: 18,
    name: 'Pink Clay Radiance Mask',
    category: 'mask',
    price: 1149,
    originalPrice: null,
    rating: 4.7,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80',
    badges: ['new'],
    isNew: true,
    description: 'Luxurious pink clay mask with rosehip oil, vitamin E, and turmeric. Buffs away dullness for an instant radiance boost.',
    benefits: ['Pink Clay', 'Rosehip Oil', 'Vitamin E', 'Glow Boost'],
  },
];

/* -----------------------------------------
   2. STATE & LOCALSTORAGE
   ----------------------------------------- */
let cart = [];
let wishlist = [];
let currentFilter = 'all';

function saveCart() {
  localStorage.setItem('bloom_cart', JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem('bloom_cart');
  if (saved) {
    try { cart = JSON.parse(saved); }
    catch { cart = []; }
  }
}

function saveWishlist() {
  localStorage.setItem('bloom_wishlist', JSON.stringify(wishlist));
}

function loadWishlist() {
  const saved = localStorage.getItem('bloom_wishlist');
  if (saved) {
    try { wishlist = JSON.parse(saved); }
    catch { wishlist = []; }
  }
}

/* -----------------------------------------
   3. PRODUCT RENDERING
   ----------------------------------------- */

/** Generate star rating HTML */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/** Format INR price */
function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

/** Build product card HTML */
function buildProductCard(product) {
  const inWishlist = wishlist.includes(product.id);
  const badgesHTML = product.badges.map(b =>
    `<span class="badge badge--${b}">${b === 'bestseller' ? 'Best Seller' : b.toUpperCase()}</span>`
  ).join('');

  return `
  <div class="product-card reveal" data-id="${product.id}" data-category="${product.category}">
    <div class="product-card__img-wrap">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-card__badges">${badgesHTML}</div>
      <button class="product-card__wishlist ${inWishlist ? 'active' : ''}"
              aria-label="Toggle wishlist"
              onclick="toggleWishlist(${product.id}, event)">
        ${inWishlist ? '♥' : '♡'}
      </button>
      <button class="product-card__quick-view" onclick="openModal(${product.id})">
        Quick View
      </button>
    </div>
    <div class="product-card__body">
      <div class="product-card__cat">${product.category}</div>
      <div class="product-card__name">${product.name}</div>
      <div class="product-card__rating">
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-count">(${product.reviews})</span>
      </div>
      <div class="product-card__bottom">
        <div class="product-card__price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <button class="product-card__add" aria-label="Add to cart" onclick="addToCart(${product.id})">+</button>
      </div>
    </div>
  </div>`;
}

/** Render products into a grid */
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = products.map(buildProductCard).join('');
  initReveal(); // reinitialise intersection observers for new cards
}

/** Render Best Sellers (all products by default) */
function renderBestSellers() {
  renderProducts(PRODUCTS, 'productsGrid');
}

/** Render New Arrivals (isNew products) */
function renderNewArrivals() {
  const newOnes = PRODUCTS.filter(p => p.isNew);
  renderProducts(newOnes, 'newArrivalsGrid');
}

/* -----------------------------------------
   4. PRODUCT FILTERING & SEARCH
   ----------------------------------------- */

function filterProducts(filter) {
  currentFilter = filter;
  const grid = document.getElementById('productsGrid');
  const cards = grid.querySelectorAll('.product-card');
  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  // Animate out, then re-render
  cards.forEach(c => c.classList.add('hide'));
  setTimeout(() => renderProducts(filtered, 'productsGrid'), 300);
}

/** Hook filter buttons */
function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts(btn.dataset.filter);
    });
  });
}

/** Search functionality */
function initSearch() {
  const searchInput  = document.getElementById('searchInput');
  const searchToggle = document.getElementById('searchToggle');
  const searchBar    = document.getElementById('searchBar');
  const searchClose  = document.getElementById('searchClose');

  if (!searchInput) return;

  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) searchInput.focus();
  });

  searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
    searchInput.value = '';
    renderProducts(PRODUCTS, 'productsGrid');
  });

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (q === '') {
      renderProducts(PRODUCTS, 'productsGrid');
      return;
    }
    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
    renderProducts(results, 'productsGrid');
    // Scroll to products section
    document.getElementById('best-sellers').scrollIntoView({ behavior: 'smooth' });
  });
}

/* -----------------------------------------
   5. WISHLIST
   ----------------------------------------- */
function toggleWishlist(id, event) {
  event.stopPropagation();
  const btn = event.currentTarget;
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    btn.classList.add('active');
    btn.textContent = '♥';
    showToast('💕 Added to wishlist');
  } else {
    wishlist.splice(idx, 1);
    btn.classList.remove('active');
    btn.textContent = '♡';
    showToast('Removed from wishlist');
  }
  saveWishlist();
}

/* -----------------------------------------
   6. CART MANAGEMENT
   ----------------------------------------- */

/** Add a product to cart by ID */
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  saveCart();
  updateCartUI();
  bumpCartCount();
  showToast(`✨ ${product.name} added to bag`);
}

/** Expose globally for offer section onclick */
window.addToCartById = addToCart;

/** Remove item from cart */
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

/** Update quantity */
function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

/** Calculate cart total */
function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

/** Get total item count */
function getCartCount() {
  return cart.reduce((n, item) => n + item.qty, 0);
}

/* -----------------------------------------
   7. CART SIDEBAR UI
   ----------------------------------------- */
function updateCartUI() {
  const count    = getCartCount();
  const total    = getCartTotal();
  const countEl  = document.getElementById('cartCount');
  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const itemCountEl = document.getElementById('cartItemCount');

  // Update badge
  if (countEl) countEl.textContent = count;
  if (itemCountEl) itemCountEl.textContent = count > 0 ? `(${count})` : '';

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <h3>Your bag is empty</h3>
        <p>Discover our skincare range and treat your skin.</p>
      </div>`;
    footerEl.innerHTML = '';
    return;
  }

  // Cart items
  itemsEl.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    return `
    <div class="cart-item">
      <div class="cart-item__img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">${product.name}</div>
        <div class="cart-item__price">${formatPrice(product.price)}</div>
        <div class="cart-item__qty">
          <button class="qty-btn" onclick="updateQty(${product.id}, -1)" aria-label="Decrease">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${product.id}, 1)" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="cart-item__remove" onclick="removeFromCart(${product.id})" aria-label="Remove">✕</button>
    </div>`;
  }).join('');

  // Cart footer
  const delivery = total >= 999 ? 0 : 99;
  footerEl.innerHTML = `
    <div class="cart-subtotal">
      <span>Subtotal</span>
      <span>${formatPrice(total)}</span>
    </div>
    <div class="cart-subtotal">
      <span>Delivery</span>
      <span>${delivery === 0 ? 'FREE 🎉' : formatPrice(delivery)}</span>
    </div>
    <div class="cart-total">
      <span>Total</span>
      <span>${formatPrice(total + delivery)}</span>
    </div>
    <button class="btn btn--primary cart-checkout-btn" onclick="showToast('🌸 Checkout coming soon!')">
      Proceed to Checkout
    </button>`;
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  if (!el) return;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function initCartSidebar() {
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
}

/* -----------------------------------------
   8. QUICK VIEW MODAL
   ----------------------------------------- */
function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const inWishlist = wishlist.includes(id);
  const badgesHTML = product.badges.map(b =>
    `<span class="badge badge--${b}">${b === 'bestseller' ? 'Best Seller' : b.toUpperCase()}</span>`
  ).join(' ');

  document.getElementById('modalInner').innerHTML = `
    <div class="modal__img">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal__body">
      <div class="modal__cat">${product.category}</div>
      <div style="margin-bottom:.4rem">${badgesHTML}</div>
      <h2 class="modal__name">${product.name}</h2>
      <div class="modal__rating">
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-count" style="font-size:.82rem;color:var(--text-2)">(${product.reviews} reviews)</span>
      </div>
      <div class="modal__price">
        <span class="price-current">${formatPrice(product.price)}</span>
        ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
      </div>
      <p class="modal__desc">${product.description}</p>
      <div class="modal__benefits">
        ${product.benefits.map(b => `<span>${b}</span>`).join('')}
      </div>
      <div class="modal__actions">
        <button class="btn btn--primary" onclick="addToCart(${product.id}); closeModal()">Add To Bag</button>
        <button class="btn btn--ghost" onclick="toggleWishlistModal(${product.id}, this)">
          ${inWishlist ? '♥ Wishlisted' : '♡ Wishlist'}
        </button>
      </div>
    </div>`;

  document.getElementById('productModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function toggleWishlistModal(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    btn.textContent = '♥ Wishlisted';
    showToast('💕 Added to wishlist');
  } else {
    wishlist.splice(idx, 1);
    btn.textContent = '♡ Wishlist';
    showToast('Removed from wishlist');
  }
  saveWishlist();
  // Update the card on the page if visible
  const card = document.querySelector(`.product-card[data-id="${id}"] .product-card__wishlist`);
  if (card) {
    card.classList.toggle('active', wishlist.includes(id));
    card.textContent = wishlist.includes(id) ? '♥' : '♡';
  }
}

function initModal() {
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* -----------------------------------------
   9. COUNTDOWN TIMER
   ----------------------------------------- */
function initCountdown() {
  const target = new Date();
  target.setHours(target.getHours() + 6, target.getMinutes() + 43, target.getSeconds() + 27);

  const hoursEl   = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  if (!hoursEl) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  const tick = setInterval(() => {
    const now  = new Date();
    const diff = target - now;
    if (diff <= 0) {
      clearInterval(tick);
      hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00';
      return;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    hoursEl.textContent   = pad(h);
    minutesEl.textContent = pad(m);
    secondsEl.textContent = pad(s);
  }, 1000);
}

/* -----------------------------------------
   10. SCROLL REVEAL ANIMATIONS
   ----------------------------------------- */
let revealObserver;

function initReveal() {
  const elements = document.querySelectorAll('.reveal:not(.visible)');

  if (revealObserver) {
    // Observe new elements
    elements.forEach(el => revealObserver.observe(el));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => revealObserver.observe(el));
}

/* -----------------------------------------
   11. NAVIGATION & UI
   ----------------------------------------- */

/** Sticky header shadow */
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/** Mobile hamburger */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('mobileOverlay');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  overlay?.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close on link click (mobile)
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/** Routine tabs */
function initRoutineTabs() {
  const tabs    = document.querySelectorAll('.tab-btn');
  const morning = document.getElementById('morningRoutine');
  const night   = document.getElementById('nightRoutine');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (tab.dataset.tab === 'morning') {
        morning.classList.remove('hidden');
        night.classList.add('hidden');
      } else {
        morning.classList.add('hidden');
        night.classList.remove('hidden');
      }
      initReveal();
    });
  });
}

/** Category cards – click to filter */
function initCategoryCards() {
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;
      // Activate the matching filter button
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
      });
      filterProducts(filter);
      document.getElementById('best-sellers').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* -----------------------------------------
   12. FORMS & NEWSLETTER
   ----------------------------------------- */
function initForms() {
  // Newsletter
  document.getElementById('newsletterForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    if (!input.value) return;
    showToast('🌸 Welcome to the Glow Club!');
    input.value = '';
  });

  // Contact
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✉️ Message sent! We\'ll reply within 24 hours.');
    e.target.reset();
  });
}

/* -----------------------------------------
   13. BACK TO TOP
   ----------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -----------------------------------------
   14. TOAST NOTIFICATIONS
   ----------------------------------------- */
let toastTimer;

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// Expose globally so HTML onclick attributes can call it
window.showToast    = showToast;
window.addToCart    = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty    = updateQty;
window.toggleWishlist = toggleWishlist;
window.openModal    = openModal;
window.closeModal   = closeModal;
window.toggleWishlistModal = toggleWishlistModal;

/* -----------------------------------------
   15. INIT – DOMContentLoaded
   ----------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Load persisted state
  loadCart();
  loadWishlist();

  // Render product sections
  renderBestSellers();
  renderNewArrivals();

  // Update cart badge from storage
  updateCartUI();

  // Init all modules
  initFilterButtons();
  initSearch();
  initCartSidebar();
  initModal();
  initCountdown();
  initReveal();
  initHeaderScroll();
  initHamburger();
  initRoutineTabs();
  initCategoryCards();
  initForms();
  initBackToTop();

  // Smooth anchor scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

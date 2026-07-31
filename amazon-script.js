// Sample Products Database
const productsDB = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "electronics",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=60",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "USB-C Fast Charging Cable",
    category: "electronics",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1625948515291-169613ecc0d0?auto=format&fit=crop&w=300&q=60",
    rating: 4.2,
    inStock: true
  },
  {
    id: 3,
    name: "4K Webcam",
    category: "electronics",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=60",
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "electronics",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1587829191301-209ec2ebc13d?auto=format&fit=crop&w=300&q=60",
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: "JavaScript: The Good Parts",
    category: "books",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?auto=format&fit=crop&w=300&q=60",
    rating: 4.4,
    inStock: true
  },
  {
    id: 6,
    name: "Clean Code: A Handbook",
    category: "books",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1543002588-d83cedbc4d1d?auto=format&fit=crop&w=300&q=60",
    rating: 4.8,
    inStock: true
  },
  {
    id: 7,
    name: "Design Patterns Explained",
    category: "books",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1541961017774-22e08e888c50?auto=format&fit=crop&w=300&q=60",
    rating: 4.3,
    inStock: true
  },
  {
    id: 8,
    name: "Web Development Book",
    category: "books",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=300&q=60",
    rating: 4.5,
    inStock: true
  },
  {
    id: 9,
    name: "Cotton T-Shirt",
    category: "clothing",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=60",
    rating: 4.2,
    inStock: true
  },
  {
    id: 10,
    name: "Denim Jeans",
    category: "clothing",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?auto=format&fit=crop&w=300&q=60",
    rating: 4.6,
    inStock: true
  },
  {
    id: 11,
    name: "Running Shoes",
    category: "clothing",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=60",
    rating: 4.7,
    inStock: true
  },
  {
    id: 12,
    name: "Winter Jacket",
    category: "clothing",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?auto=format&fit=crop&w=300&q=60",
    rating: 4.5,
    inStock: true
  },
  {
    id: 13,
    name: "Coffee Maker",
    category: "home",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?auto=format&fit=crop&w=300&q=60",
    rating: 4.4,
    inStock: true
  },
  {
    id: 14,
    name: "Blender",
    category: "home",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1584568694244-14fbbc50d737?auto=format&fit=crop&w=300&q=60",
    rating: 4.3,
    inStock: true
  },
  {
    id: 15,
    name: "Cookware Set",
    category: "home",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?auto=format&fit=crop&w=300&q=60",
    rating: 4.6,
    inStock: true
  },
  {
    id: 16,
    name: "Bed Sheet Set",
    category: "home",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1521135261539-54e2df16014d?auto=format&fit=crop&w=300&q=60",
    rating: 4.5,
    inStock: true
  }
];

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';
let searchQuery = '';
let filteredProducts = [...productsDB];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');
const checkoutModal = document.getElementById('checkoutModal');
const confirmationModal = document.getElementById('confirmationModal');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutBtn = document.getElementById('checkoutBtn');
const closeModalBtn = document.getElementById('closeModal');
const overlay = document.getElementById('overlay');
const categories = document.querySelectorAll('.category');
const sectionTitle = document.getElementById('sectionTitle');
const continueShopping = document.getElementById('continueShopping');

// Initialize
function init() {
  renderProducts();
  updateCartCount();
  setupEventListeners();
}

function setupEventListeners() {
  // Cart
  cartIcon.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeAllModals);

  // Search
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') performSearch();
  });

  // Categories
  categories.forEach(cat => {
    cat.addEventListener('click', (e) => {
      categories.forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.dataset.category;
      searchQuery = '';
      searchInput.value = '';
      applyFilters();
    });
  });

  // Checkout
  checkoutBtn.addEventListener('click', openCheckout);
  closeModalBtn.addEventListener('click', closeAllModals);
  checkoutForm.addEventListener('submit', placeOrder);
  continueShopping.addEventListener('click', () => {
    closeAllModals();
    openCart();
  });
}

function applyFilters() {
  filteredProducts = productsDB.filter(product => {
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  updateSectionTitle();
  renderProducts();
}

function updateSectionTitle() {
  if (searchQuery) {
    sectionTitle.textContent = `Search results for "${searchQuery}"`;
  } else if (currentCategory === 'all') {
    sectionTitle.textContent = 'All Products';
  } else {
    sectionTitle.textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
  }
}

function performSearch() {
  searchQuery = searchInput.value.trim();
  categories.forEach(c => c.classList.remove('active'));
  applyFilters();
}

function renderProducts() {
  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-rating">⭐ ${product.rating} (${Math.floor(Math.random() * 500) + 50} reviews)</div>
      <div class="product-price">$${product.price}</div>
      <div class="product-stock">${product.inStock ? '✓ In Stock' : 'Out of Stock'}</div>
      <div class="product-actions">
        <button class="btn-add-cart" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      addToCart(productId);
      e.target.classList.add('added');
      e.target.textContent = '✓ Added';
      setTimeout(() => {
        e.target.classList.remove('added');
        e.target.textContent = 'Add to Cart';
      }, 2000);
    });
  });
}

function addToCart(productId) {
  const product = productsDB.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  updateCartDisplay();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  updateCartDisplay();
}

function updateQuantity(productId, newQty) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, newQty);
    saveCart();
    updateCartDisplay();
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}

function updateCartDisplay() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    cartSummary.style.display = 'none';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
          <input type="number" class="qty-input" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');

  updateCartSummary();
  cartSummary.style.display = 'block';
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function openCart() {
  cartSidebar.classList.add('active');
  overlay.classList.add('active');
  updateCartDisplay();
}

function closeCart() {
  cartSidebar.classList.remove('active');
  overlay.classList.remove('active');
}

function openCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Populate order review
  const orderItems = document.getElementById('orderItems');
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  orderItems.innerHTML = cart.map(item => `
    <div>${item.name} x${item.quantity}</div>
    <div>$${(item.price * item.quantity).toFixed(2)}</div>
  `).join('') + `
    <div style="margin-top: 10px; border-top: 1px solid #ddd; padding-top: 10px;">Shipping</div>
    <div>${shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</div>
  `;

  document.getElementById('orderTotal').textContent = `$${total.toFixed(2)}`;

  cartSidebar.classList.remove('active');
  checkoutModal.classList.add('active');
  overlay.classList.add('active');
}

function placeOrder(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const paymentMethod = document.getElementById('paymentMethod').value;
  const cardNumber = document.getElementById('cardNumber').value;

  // Validate card number
  if (cardNumber.replace(/\D/g, '').length !== 16) {
    alert('Please enter a valid 16-digit card number');
    return;
  }

  // Generate order number and estimated date
  const orderNumber = 'AMZ' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + 5);

  // Show confirmation
  document.getElementById('orderNumber').textContent = `Order #${orderNumber}`;
  document.getElementById('estimatedDate').textContent = `Estimated delivery: ${estimatedDate.toLocaleDateString()}`;

  checkoutModal.classList.remove('active');
  confirmationModal.classList.add('active');

  // Clear cart
  cart = [];
  saveCart();
  updateCartCount();
  checkoutForm.reset();
}

function closeAllModals() {
  cartSidebar.classList.remove('active');
  checkoutModal.classList.remove('active');
  confirmationModal.classList.remove('active');
  overlay.classList.remove('active');
}

// Start the app
init();

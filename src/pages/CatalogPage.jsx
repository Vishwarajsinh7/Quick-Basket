import React, { useState } from 'react';
import EmptyState from '../components/EmptyState';
import { useCart } from '../context/CartContext';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Simple mock data to render cards; replace with real API later.
const mockProducts = [
  {
    id: 1,
    name: 'Organic Apple',
    category: 'Fresh Produce',
    description: 'Crisp, sweet apples sourced from local farms.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    category: 'Bakery',
    description: 'Freshly baked whole wheat loaf.',
    price: 79,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Basmati Rice',
    category: 'Grocery',
    description: 'Premium long-grain basmati rice.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Fresh Milk',
    category: 'Dairy',
    description: 'Organic whole milk, farm fresh.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'Greek Yogurt',
    category: 'Dairy',
    description: 'Creamy Greek yogurt, rich in protein.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'Olive Oil',
    category: 'Grocery',
    description: 'Extra virgin olive oil, cold pressed.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop'
    
  }
];

// Get unique categories
const categories = ['All Products', 'Fresh Produce', 'Bakery', 'Grocery', 'Dairy'];

function CatalogPage() {
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || 'All Products');
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState('popularity');
  const { addToCart, removeFromCart, cartItems, updateQuantity } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Get cart quantity for a specific product
  const getCartQty = (productId) => {
    const item = cartItems.find(c => c.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAdd = (item) => {
    if (!isAuthenticated) {
      navigate('/auth/login');
      return;
    }
    addToCart(item, 1);
  };

  const handleRemove = (item) => {
    const qty = getCartQty(item.id);
    if (qty <= 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, qty - 1);
    }
  };

  // Filter products based on selected category and price
  let filteredProducts = mockProducts.filter(product => {
    const categoryMatch = selectedCategory === 'All Products' || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  // Sort products
  if (sortBy === 'price_asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price_desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // Get count for each category
  const getCategoryCount = (category) => {
    if (category === 'All Products') return mockProducts.length;
    return mockProducts.filter(p => p.category === category).length;
  };

  return (
    <div className="row mt-4">
      <div className="col-md-3 mb-4">
        <div className="card p-3 h-100 border-0 shadow-sm">
          <h5 className="fw-bold mb-3" style={{ color: 'var(--wad-primary)' }}>
            <i className="fa-solid fa-filter me-2" />
            Filters
          </h5>
          <div className="mb-4">
            <label className="form-label fw-bold small text-muted">
              CATEGORIES
            </label>
            <div className="list-group list-group-flush">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${selectedCategory === category ? 'active fw-bold' : 'text-dark'}`}
                  style={selectedCategory === category ? {
                    backgroundColor: 'var(--wad-primary)',
                    borderColor: 'var(--wad-primary)'
                  } : {}}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  <span className={`badge rounded-pill ${selectedCategory === category ? 'bg-light text-dark' : 'bg-secondary'}`}>
                    {getCategoryCount(category)}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold small text-muted">
              MAX PRICE: ₹{maxPrice}
            </label>
            <input
              type="range"
              className="form-range"
              min="10"
              max="2000"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <button
              type="button"
              className="btn btn-sm btn-outline-primary w-100 mt-2"
              onClick={() => setMaxPrice(2000)}
            >
              Reset Price Filter
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-9">
        <div className="card p-3 mb-4 d-flex flex-row align-items-center justify-content-between border-0 shadow-sm">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-white border-end-0 text-muted">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Search for paneer, spices..."
            />
            <button type="button" className="btn btn-outline-secondary">
              Search
            </button>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted small">Sort by:</span>
            <select
              className="form-select form-select-sm border-secondary"
              style={{ width: 'auto' }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="mb-3">
              <span className="text-muted">
                Showing {filteredProducts.length} of {mockProducts.length} products
                {selectedCategory !== 'All Products' && ` in ${selectedCategory}`}
                {maxPrice < 2000 && ` under ₹${maxPrice}`}
              </span>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {filteredProducts.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card h-100">
                    <a
                      href={"/product/" + item.id}
                      className="text-decoration-none"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    </a>
                    <div className="card-body d-flex flex-column">
                      <div className="mb-2">
                        <span className="badge bg-success">
                          {item.category}
                        </span>
                      </div>
                      <a
                        href={"/product/" + item.id}
                        className="text-decoration-none"
                      >
                        <h5 className="card-title text-dark">{item.name}</h5>
                      </a>
                      <p className="card-text text-muted small">
                        {item.description}
                      </p>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span
                            className="fs-5 fw-bold"
                            style={{ color: 'var(--wad-primary)' }}
                          >
                            ₹{item.price}
                          </span>
                          {getCartQty(item.id) > 0 && (
                            <span
                              className="badge rounded-pill"
                              style={{ background: 'var(--wad-primary)', fontSize: '0.7rem' }}
                            >
                              {getCartQty(item.id)} in cart
                            </span>
                          )}
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            type="button"
                            className="btn btn-sm fw-bold"
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              border: '2px solid var(--wad-primary)',
                              color: getCartQty(item.id) > 0 ? '#fff' : 'var(--wad-primary)',
                              background: getCartQty(item.id) > 0 ? 'var(--wad-primary)' : 'transparent',
                              lineHeight: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            onClick={() => handleRemove(item)}
                            disabled={getCartQty(item.id) === 0}
                            title="Remove from cart"
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <span
                            className="fw-bold text-center"
                            style={{ minWidth: '28px', fontSize: '1rem' }}
                          >
                            {getCartQty(item.id)}
                          </span>
                          <button
                            type="button"
                            className="btn btn-sm fw-bold"
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              border: '2px solid var(--wad-primary)',
                              color: '#fff',
                              background: 'var(--wad-primary)',
                              lineHeight: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            onClick={() => handleAdd(item)}
                            title={isAuthenticated ? 'Add to cart' : 'Login to add to cart'}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;

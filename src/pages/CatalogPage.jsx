import React, { useState } from 'react';
import EmptyState from '../components/EmptyState';
import { useCart } from '../context/CartContext';

// Simple mock data to render cards; replace with real API later.
const mockProducts = [
  {
    id: 1,
    name: 'Organic Apples',
    category: 'Fresh Produce',
    description: 'Crisp, sweet apples sourced from local farms.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    category: 'Bakery & Dairy',
    description: 'Freshly baked whole wheat loaf.',
    price: 79,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Basmati Rice',
    category: 'Pantry Staples',
    description: 'Premium long-grain basmati rice.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Fresh Milk',
    category: 'Bakery & Dairy',
    description: 'Organic whole milk, farm fresh.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'Organic Bananas',
    category: 'Fresh Produce',
    description: 'Sweet and ripe organic bananas.',
    price: 59,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'Tomatoes',
    category: 'Fresh Produce',
    description: 'Fresh red tomatoes.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1546470427-f5d4b7c4f2e7?w=400&h=400&fit=crop'
  },
  {
    id: 7,
    name: 'Greek Yogurt',
    category: 'Bakery & Dairy',
    description: 'Creamy Greek yogurt, rich in protein.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop'
  },
  {
    id: 8,
    name: 'Olive Oil',
    category: 'Pantry Staples',
    description: 'Extra virgin olive oil, cold pressed.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcdcef5?w=400&h=400&fit=crop'
  },
  {
    id: 9,
    name: 'Green Spinach',
    category: 'Fresh Produce',
    description: 'Fresh organic spinach leaves.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop'
  }
];

// Get unique categories
const categories = ['All Products', 'Fresh Produce', 'Bakery & Dairy', 'Pantry Staples'];

function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState('popularity');
  const { addToCart } = useCart();

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
                      href="/product"
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
                        href="/product"
                        className="text-decoration-none"
                      >
                        <h5 className="card-title text-dark">{item.name}</h5>
                      </a>
                      <p className="card-text text-muted small">
                        {item.description}
                      </p>
                      <div className="mt-auto d-flex align-items-center justify-content-between">
                        <span
                          className="fs-5 fw-bold"
                          style={{ color: 'var(--wad-primary)' }}
                        >
                          ₹{item.price}
                        </span>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm rounded-circle p-2 shadow-sm"
                          title="Add 1 to Cart"
                          onClick={() => addToCart(item)}
                        >
                          <i className="fa-solid fa-plus" />
                        </button>
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

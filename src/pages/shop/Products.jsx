import React from 'react';
import ProductCard from '../../components/ProductCard';
import './Products.css';

// Using mock data from previous phase
const MOCK_PRODUCTS = [
  { id: 1, name: "Organic Crisp Apples", category: "Fruits", price: 120, oldPrice: 150, rating: 4.8, reviews: 124, emoji: "🍎", unit: "kg", isNew: true },
  { id: 2, name: "Fresh Broccoli", category: "Vegetables", price: 65, rating: 4.5, reviews: 89, emoji: "🥦", unit: "kg" },
  { id: 3, name: "Farm Fresh Eggs (12 pack)", category: "Dairy", price: 85, rating: 4.9, reviews: 210, emoji: "🥚", unit: "pack" },
  { id: 4, name: "Whole Wheat Bread", category: "Bakery", price: 60, oldPrice: 75, rating: 4.6, reviews: 156, emoji: "🍞", unit: "pack" },
  { id: 5, name: "Juicy Oranges", category: "Fruits", price: 90, rating: 4.7, reviews: 112, emoji: "🍊", unit: "kg" },
  { id: 6, name: "Carrots", category: "Vegetables", price: 45, rating: 4.4, reviews: 67, emoji: "🥕", unit: "kg" },
  { id: 7, name: "Organic Bananas", category: "Fruits", price: 50, rating: 4.8, reviews: 198, emoji: "🍌", unit: "kg", isNew: true },
  { id: 8, name: "Premium Milk", category: "Dairy", price: 70, oldPrice: 80, rating: 4.9, reviews: 342, emoji: "🥛", unit: "liter" }
];

const Products = () => {
  return (
    <div className="products-page">
      <div className="container py-8">
        
        <div className="products-layout">
          {/* Sidebar */}
          <aside className="products-sidebar">
            <div className="filter-section">
              <h3 className="filter-title">Categories</h3>
              <ul className="filter-list">
                <li><label><input type="checkbox" /> All Products</label></li>
                <li><label><input type="checkbox" /> Fruits</label></li>
                <li><label><input type="checkbox" /> Vegetables</label></li>
                <li><label><input type="checkbox" /> Dairy</label></li>
                <li><label><input type="checkbox" /> Bakery</label></li>
              </ul>
            </div>
            
            <div className="filter-section">
              <h3 className="filter-title">Price Range</h3>
              <div className="price-inputs">
                <input type="number" placeholder="Min" />
                <span>-</span>
                <input type="number" placeholder="Max" />
              </div>
              <button className="btn btn-primary btn-sm mt-4 full-width">Apply Filter</button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="products-main">
            <div className="products-header">
              <div className="results-count">Showing results for <strong>"All"</strong></div>
              <div className="sort-control">
                <label>Sort by:</label>
                <select className="input-field">
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            <div className="product-grid">
              {MOCK_PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;

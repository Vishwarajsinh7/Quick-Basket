import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import './Products.css';

const MOCK_PRODUCTS = [
  { id: 1, name: "Organic Ooty Carrots", description: "Locally sourced, pesticide-free crunchy carrots from foothills of Ooty.", price: 60, isVegan: true, emoji: "🥕", unit: "kg" },
  { id: 2, name: "Multigrain Bread", description: "Baked fresh this morning with organic whole wheat and ancient grains.", price: 55, emoji: "🍞", unit: "pack" },
  { id: 3, name: "Extra Virgin Olive Oil", description: "Premium imported cold pressed extra virgin olive oil 1L.", price: 95, emoji: "🫒", unit: "pc" },
  { id: 4, name: "Kashmiri Apples", description: "Sweet and crisp apples directly sourced from high-altitude orchards.", price: 180, isVegan: true, emoji: "🍎", unit: "kg" },
  { id: 5, name: "Brown Eggs (12 pcs)", description: "Free-range antibiotic-free nutritious brown eggs from local farms.", price: 110, emoji: "🥚", unit: "pack" },
  { id: 6, name: "Artisan Cheddar", description: "Premium processed cheddar cheese block (200g). Perfect for grating.", price: 135, emoji: "🧀", unit: "pc" },
  { id: 7, name: "Organic Bananas", description: "Freshly harvested organic bananas, naturally ripened.", price: 50, isVegan: true, emoji: "🍌", unit: "kg" },
  { id: 8, name: "Premium Milk", description: "Farm fresh cow milk, pasteurized and homogenized.", price: 70, emoji: "🥛", unit: "liter" }
];

const Products = () => {
  return (
    <div className="products-page">
      <div className="container py-8">
        
        <div className="products-layout">
          {/* Sidebar */}
          <aside className="products-sidebar">
            <div className="filter-header-main">
              <span className="filter-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M7 12H17M10 18H14" stroke="#8C2A24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h2>Filters</h2>
            </div>

            <div className="filter-section">
              <h3 className="filter-title-sub">LOCATION (CITY)</h3>
              <div className="location-dropdown">
                <span>Mumbai, MH</span>
                <ChevronDown size={16} className="dropdown-icon" />
              </div>
            </div>
            
            <div className="filter-section">
              <h3 className="filter-title-sub">CATEGORIES</h3>
              <ul className="categories-list">
                <li className="active">
                  <span>All Products</span>
                  <span className="badge">43</span>
                </li>
                <li>
                  <span>Fresh Produce</span>
                  <span className="badge">12</span>
                </li>
                <li>
                  <span>Bakery & Dairy</span>
                  <span className="badge">4</span>
                </li>
                <li>
                  <span>Pantry Staples</span>
                  <span className="badge">33</span>
                </li>
              </ul>
            </div>
            
            <div className="filter-section">
              <h3 className="filter-title-sub">PRICE RANGE</h3>
              <div className="price-slider-container">
                 <div className="price-slider-track">
                   <div className="price-slider-fill"></div>
                   <div className="price-slider-thumb left"></div>
                   <div className="price-slider-thumb right"></div>
                 </div>
              </div>
              <div className="price-range-labels">
                <span>&#8377;0</span>
                <span>&#8377;2000+</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="products-main">
            <div className="products-header">
              <div className="search-bar-container">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="Search for paneer, spices, fresh fruit..." className="products-search-input" />
              </div>
              <div className="sort-control">
                <label>Sort by:</label>
                <div className="sort-dropdown">
                  <span>Popularity</span>
                  <ChevronDown size={16} className="dropdown-icon" />
                </div>
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

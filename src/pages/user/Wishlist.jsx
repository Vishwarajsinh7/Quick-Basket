import React from 'react';
import ProductCard from '../../components/ProductCard';
import './User.css';

const MOCK_WISHLIST = [
  { id: 1, name: "Organic Crisp Apples", category: "Fruits", price: 120, emoji: "🍎", unit: "kg" },
  { id: 4, name: "Whole Wheat Bread", category: "Bakery", price: 60, emoji: "🍞", unit: "pack" },
  { id: 8, name: "Premium Milk", category: "Dairy", price: 70, emoji: "🥛", unit: "liter" },
];

const Wishlist = () => {
  return (
    <div className="user-page">
      <div className="container py-8">
        <div className="user-layout">
          
          <aside className="user-sidebar">
            <div className="user-info-brief">
              <div className="user-avatar-large">JD</div>
              <h3>John Doe</h3>
              <p>Member since 2023</p>
            </div>
            <nav className="user-nav">
              <a href="/profile">My Profile</a>
              <a href="/orders">Order History</a>
              <a href="/wishlist" className="active">Wishlist</a>
              <a href="/login" className="text-danger">Log Out</a>
            </nav>
          </aside>

          <div className="user-content-area">
            <div className="content-card">
              <h2>My Wishlist</h2>
              <p className="text-secondary mb-4">You have {MOCK_WISHLIST.length} items saved</p>
              
              <div className="wishlist-grid">
                {MOCK_WISHLIST.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wishlist;

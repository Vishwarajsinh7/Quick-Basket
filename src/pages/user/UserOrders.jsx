import React from 'react';
import './User.css';

const MOCK_ORDERS = [
  { 
    id: "QB-8880", 
    date: "15 Feb, 2026", 
    total: 330.75, 
    items: [
      { id: 1, name: "Premium Milk", emoji: "🥛" },
      { id: 2, name: "Whole Wheat Bread", emoji: "🍞" }
    ] 
  },
  { 
    id: "QB-8821", 
    date: "10 Feb, 2026", 
    total: 1250.00, 
    items: [
      { id: 3, name: "Carrots", emoji: "🥕" },
      { id: 4, name: "Broccoli", emoji: "🥦" }
    ] 
  },
];

const UserOrders = () => {
  return (
    <div className="user-page">
      <div className="container py-8">
        <div className="user-layout">
          
          <aside className="user-sidebar">
            <div className="user-info-brief">
              <div className="user-avatar-large">Aa</div>
              <div className="user-welcome-text">
                <p>Welcome,</p>
                <h3>Aarav Sharma</h3>
              </div>
            </div>
            <nav className="user-nav">
              <a href="/profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Personal Details
              </a>
              <a href="/orders" className="active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                My Orders
              </a>
              <a href="/wishlist">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                Wishlist
              </a>
              <a href="/login" className="text-danger">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                Logout
              </a>
            </nav>
          </aside>

          <div className="user-content-area">
            <div className="content-card order-content-card">
              <h2 className="orders-page-title">Order History</h2>
              
              <div className="orders-list">
                {MOCK_ORDERS.map((order) => (
                  <div key={order.id} className="order-item-card">
                    <div className="order-item-header">
                      <div className="order-meta-col">
                        <span className="meta-label">ORDER PLACED</span>
                        <span className="meta-value">{order.date}</span>
                      </div>
                      <div className="order-meta-col">
                        <span className="meta-label">TOTAL</span>
                        <span className="meta-value">&#8377;{order.total.toFixed(2)}</span>
                      </div>
                      <div className="order-meta-col order-number-col">
                        <span className="meta-label">ORDER #</span>
                        <span className="meta-value">{order.id}</span>
                      </div>
                    </div>
                    
                    <div className="order-item-body">
                      <div className="order-items-preview">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="item-thumbnail" title={item.name}>
                            {item.emoji}
                          </div>
                        ))}
                      </div>
                      <div className="order-actions">
                        <button className="btn-outline-action">Buy Again</button>
                        <button className="btn-outline-action">View Invoice</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserOrders;

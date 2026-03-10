import React from 'react';
import { Package, Eye, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './User.css';

const MOCK_ORDERS = [
  { id: "QB-84729-XT", date: "2026-03-10", total: 355.00, status: "Processing", items: 3 },
  { id: "QB-73912-AB", date: "2026-02-24", total: 1240.50, status: "Delivered", items: 8 },
  { id: "QB-65821-CD", date: "2026-01-15", total: 450.00, status: "Delivered", items: 4 },
];

const UserOrders = () => {
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
              <a href="/orders" className="active">Order History</a>
              <a href="/wishlist">Wishlist</a>
              <a href="/login" className="text-danger">Log Out</a>
            </nav>
          </aside>

          <div className="user-content-area">
            <div className="content-card">
              <h2>Order History</h2>
              <p className="text-secondary mb-4">View your recent orders and their status</p>
              
              <div className="orders-list">
                {MOCK_ORDERS.map((order) => (
                  <div key={order.id} className="order-history-card">
                    <div className="order-history-header">
                      <div className="order-id">
                        <Package size={20} className="mr-2 text-primary" />
                        <strong>Order {order.id}</strong>
                      </div>
                      <div className={`order-status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </div>
                    </div>
                    
                    <div className="order-history-body">
                      <div className="order-meta">
                        <span><strong>Date:</strong> {order.date}</span>
                        <span><strong>Items:</strong> {order.items} items</span>
                        <span><strong>Total:</strong> ₹{order.total.toFixed(2)}</span>
                      </div>
                      <Link to={`/order-summary`} className="btn btn-outline btn-sm">
                        <Eye size={16} className="mr-2" /> View Details
                      </Link>
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

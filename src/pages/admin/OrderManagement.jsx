import React, { useState } from 'react';
import { Search, Filter, Eye, Edit, Trash2 } from 'lucide-react';
import './Admin.css';

const MOCK_ORDERS = [
  { id: "#QB-84729", customer: "Sarah Jenkins", date: "Oct 24, 2023", items: 3, total: "355.00", status: "Processing" },
  { id: "#QB-84728", customer: "Michael Brown", date: "Oct 24, 2023", items: 1, total: "120.50", status: "Delivered" },
  { id: "#QB-84727", customer: "Emily Chen", date: "Oct 23, 2023", items: 8, total: "850.00", status: "Delivered" },
  { id: "#QB-84726", customer: "David Wilson", date: "Oct 23, 2023", items: 2, total: "45.00", status: "Shipped" },
  { id: "#QB-84725", customer: "Jessica Miller", date: "Oct 22, 2023", items: 5, total: "410.00", status: "Cancelled" },
];

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const getStatusBadge = (status) => {
    switch(status) {
      case 'Delivered': return 'success';
      case 'Processing': return 'pending';
      case 'Shipped': return 'warning';
      case 'Cancelled': return 'danger';
      default: return 'pending';
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header-row">
        <h1 className="admin-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>Orders Management</h1>
        <p className="admin-subtitle">View and manage customer orders.</p>
      </div>

      <div className="admin-toolbar">
        <div className="admin-search">
          <Search size={16} className="admin-search-icon" />
          <input 
            type="text" 
            placeholder="Search orders..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="action-buttons">
          <button className="btn btn-outline">
            <Filter size={16} className="mr-2" /> Filter
          </button>
        </div>
      </div>

      <div className="admin-card">
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ORDERS.map((order, i) => (
                <tr key={i}>
                  <td><strong>{order.id}</strong></td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.items}</td>
                  <td>₹{order.total}</td>
                  <td><span className={`badge ${getStatusBadge(order.status)}`}>{order.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-icon-btn" title="View"><Eye size={18} /></button>
                      <button className="action-icon-btn" title="Edit"><Edit size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;

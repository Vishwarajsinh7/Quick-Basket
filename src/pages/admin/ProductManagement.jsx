import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import './Admin.css';

const MOCK_PRODUCTS = [
  { id: "PRD-01", name: "Organic Crisp Apples", category: "Fruits", price: "120.00", stock: 150, status: "Active" },
  { id: "PRD-02", name: "Fresh Broccoli", category: "Vegetables", price: "80.00", stock: 45, status: "Active" },
  { id: "PRD-03", name: "Farm Fresh Eggs", category: "Dairy", price: "150.00", stock: 12, status: "Low Stock" },
  { id: "PRD-04", name: "Whole Wheat Bread", category: "Bakery", price: "60.00", stock: 0, status: "Out of Stock" },
  { id: "PRD-05", name: "Premium Milk", category: "Dairy", price: "70.00", stock: 200, status: "Active" },
];

const ProductManagement = () => {
  return (
    <div className="admin-page">
      <div className="admin-header-row">
        <h1 className="admin-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>Products Management</h1>
        <p className="admin-subtitle">Manage your inventory, prices, and stock levels.</p>
      </div>

      <div className="admin-toolbar">
        <div className="admin-search">
          <Search size={16} className="admin-search-icon" />
          <input type="text" placeholder="Search products..." />
        </div>
        <div className="action-buttons">
          <button className="btn btn-primary">
            <Plus size={16} className="mr-2" /> Add Product
          </button>
        </div>
      </div>

      <div className="admin-card">
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PRODUCTS.map((prod, i) => (
                <tr key={i}>
                  <td>{prod.id}</td>
                  <td><strong>{prod.name}</strong></td>
                  <td>{prod.category}</td>
                  <td>₹{prod.price}</td>
                  <td>{prod.stock}</td>
                  <td>
                    <span className={`badge ${prod.status === 'Active' ? 'success' : prod.status === 'Low Stock' ? 'warning' : 'danger'}`}>
                      {prod.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-icon-btn"><Edit size={18} /></button>
                      <button className="action-icon-btn" style={{color: 'var(--danger)'}}><Trash2 size={18} /></button>
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

export default ProductManagement;

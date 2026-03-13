import React from 'react';

function AdminLayout({ children }) {
  return (
    <div className="admin-wrapper">
      <nav className="admin-sidebar" id="adminSidebar">
        <div className="p-4 text-center border-bottom border-white border-opacity-25">
          <i className="fa-solid fa-basket-shopping fa-2x mb-2" />
          <h5 className="fw-bold m-0">Quick Basket</h5>
          <small className="opacity-75">Admin Panel</small>
        </div>
        <div className="py-3 flex-grow-1">
          <a href="/admin/dashboard" className="admin-nav-link">
            <i className="fa-solid fa-chart-line" />
            Dashboard
          </a>
          <a href="/admin/orders" className="admin-nav-link">
            <i className="fa-solid fa-boxes-packing" />
            Orders
          </a>
          <a href="/admin/products" className="admin-nav-link">
            <i className="fa-solid fa-tags" />
            Products
          </a>
          <a href="/admin/users" className="admin-nav-link">
            <i className="fa-solid fa-users" />
            Users
          </a>
          <a href="/admin/messages" className="admin-nav-link">
            <i className="fa-solid fa-envelope" />
            Messages
          </a>
          <a href="/admin/settings" className="admin-nav-link">
            <i className="fa-solid fa-gear" />
            Settings
          </a>
        </div>
        <div className="p-3 border-top border-white border-opacity-25">
          <button
            type="button"
            className="btn btn-outline-light w-100 btn-sm"
          >
            <i className="fa-solid fa-right-from-bracket me-2" />
            Logout
          </button>
        </div>
      </nav>
      <div className="admin-content">
        <div className="d-lg-none mb-3">
          <button className="btn btn-primary shadow-sm" type="button">
            <i className="fa-solid fa-bars me-2" />
            Admin Menu
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;


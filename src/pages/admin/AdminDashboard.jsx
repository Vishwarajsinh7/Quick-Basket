import React from 'react';
import { Users, ShoppingBag, DollarSign, Activity } from 'lucide-react';
import './Admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-page">
      <div className="admin-header-row">
        <h1 className="admin-title">Dashboard Overview</h1>
        <p className="admin-subtitle">Welcome back, here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="admin-stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper bg-blue">
            <DollarSign size={24} />
          </div>
          <div className="stat-details">
            <p className="stat-label">Total Revenue</p>
            <h3 className="stat-value">₹45,231</h3>
            <span className="stat-change positive">+12.5% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper bg-green">
            <ShoppingBag size={24} />
          </div>
          <div className="stat-details">
            <p className="stat-label">Total Orders</p>
            <h3 className="stat-value">1,250</h3>
            <span className="stat-change positive">+5.2% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper bg-purple">
            <Users size={24} />
          </div>
          <div className="stat-details">
            <p className="stat-label">Total Customers</p>
            <h3 className="stat-value">842</h3>
            <span className="stat-change positive">+18.1% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper bg-orange">
            <Activity size={24} />
          </div>
          <div className="stat-details">
            <p className="stat-label">Active Sessions</p>
            <h3 className="stat-value">42</h3>
            <span className="stat-change negative">-2.4% from last hour</span>
          </div>
        </div>
      </div>

      {/* Charts/Tables Grid */}
      <div className="admin-content-grid">
        <div className="admin-card col-span-2">
          <div className="card-header">
            <h3>Recent Orders</h3>
            <button className="btn-link">View All</button>
          </div>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#QB-84729</td>
                  <td>Sarah Jenkins</td>
                  <td>Oct 24, 2023</td>
                  <td>₹355.00</td>
                  <td><span className="badge pending">Processing</span></td>
                </tr>
                <tr>
                  <td>#QB-84728</td>
                  <td>Michael Brown</td>
                  <td>Oct 24, 2023</td>
                  <td>₹120.50</td>
                  <td><span className="badge success">Delivered</span></td>
                </tr>
                <tr>
                  <td>#QB-84727</td>
                  <td>Emily Chen</td>
                  <td>Oct 23, 2023</td>
                  <td>₹850.00</td>
                  <td><span className="badge success">Delivered</span></td>
                </tr>
                <tr>
                  <td>#QB-84726</td>
                  <td>David Wilson</td>
                  <td>Oct 23, 2023</td>
                  <td>₹45.00</td>
                  <td><span className="badge warning">Shipped</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-card">
          <div className="card-header">
            <h3>Top Products</h3>
          </div>
          <div className="top-products-list">
            <div className="top-product-item">
              <div className="tp-icon">🍎</div>
              <div className="tp-info">
                <h4>Organic Apples</h4>
                <p>124 Sales</p>
              </div>
              <div className="tp-price">₹14,880</div>
            </div>
            <div className="top-product-item">
              <div className="tp-icon">🥛</div>
              <div className="tp-info">
                <h4>Premium Milk</h4>
                <p>98 Sales</p>
              </div>
              <div className="tp-price">₹6,860</div>
            </div>
            <div className="top-product-item">
              <div className="tp-icon">🍞</div>
              <div className="tp-info">
                <h4>Wheat Bread</h4>
                <p>85 Sales</p>
              </div>
              <div className="tp-price">₹5,100</div>
            </div>
            <div className="top-product-item">
              <div className="tp-icon">🥦</div>
              <div className="tp-info">
                <h4>Fresh Broccoli</h4>
                <p>72 Sales</p>
              </div>
              <div className="tp-price">₹4,680</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

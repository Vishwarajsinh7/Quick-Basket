import React from 'react';
import './Admin.css';

const Settings = () => {
  return (
    <div className="admin-page">
      <div className="admin-header-row">
        <h1 className="admin-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>Store Settings</h1>
        <p className="admin-subtitle">Configure your application settings.</p>
      </div>

      <div className="admin-content-grid" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <div className="admin-card" style={{ padding: '0' }}>
          <div className="settings-nav">
            <button className="category-btn active">General Settings</button>
            <button className="category-btn">Payment Gateways</button>
            <button className="category-btn">Shipping Zones</button>
            <button className="category-btn">Notifications</button>
            <button className="category-btn">Security</button>
          </div>
        </div>

        <div className="admin-card" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>General Settings</h3>
          
          <div className="form-grid">
            <div className="input-group full-width">
              <label className="input-label">Store Name</label>
              <input type="text" className="input-field" defaultValue="Quick Basket" />
            </div>
            
            <div className="input-group full-width">
              <label className="input-label">Support Email</label>
              <input type="email" className="input-field" defaultValue="support@quickbasket.com" />
            </div>
            
            <div className="input-group full-width">
              <label className="input-label">Contact Phone</label>
              <input type="text" className="input-field" defaultValue="+1 234 567 8900" />
            </div>

            <div className="input-group full-width">
              <label className="input-label">Store Address</label>
              <textarea className="input-field" rows="3" defaultValue="123 Grocery Lane, Fresh City, FC 12345"></textarea>
            </div>
            
            <div className="input-group">
              <label className="input-label">Currency</label>
              <select className="input-field">
                <option>INR (₹)</option>
                <option>USD ($)</option>
              </select>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn btn-primary">Save Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserAvatar, ProfileUserIcon, PackageIcon, HeartIcon, LogoutIcon } from '../../components/ProfileIcons';
import './User.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Aarav',
    lastName: 'Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210'
  });

  return (
    <div className="user-page">
      <div className="container py-8">
        <div className="user-layout">
          
          {/* Sidebar */}
          <aside className="user-sidebar">
            <div className="user-info-brief">
              <div className="user-avatar-large">
                Aa
              </div>
              <div className="user-welcome-text">
                <p>Welcome,</p>
                <h3>Aarav Sharma</h3>
              </div>
            </div>

            <nav className="user-nav">
              <NavLink to="/profile" className="nav-item">
                <ProfileUserIcon size={18} /> Personal Details
              </NavLink>
              <NavLink to="/orders" className="nav-item">
                <PackageIcon size={18} /> My Orders
              </NavLink>
              <NavLink to="/wishlist" className="nav-item">
                <HeartIcon size={18} /> Wishlist
              </NavLink>
              <NavLink to="/login" className="nav-item text-danger">
                <LogoutIcon size={18} /> Logout
              </NavLink>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="user-content-area">
            
            {/* Edit Profile Form */}
            <div className="content-card mb-4">
              <h2 className="card-title-small">Edit Profile</h2>
              
              <div className="profile-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>FIRST NAME</label>
                    <input 
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>LAST NAME</label>
                    <input 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      disabled
                      className="disabled-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <button className="btn btn-maroon btn-save">Save Changes</button>
              </div>
            </div>

            {/* Saved Addresses */}
            <div className="content-card">
              <div className="card-header-flex">
                <h2 className="card-title-small">Saved Addresses</h2>
                <button className="btn-link">+ Add New</button>
              </div>

              <div className="address-card">
                <span className="address-badge">HOME</span>
                <p className="address-name">Aarav Sharma</p>
                <p className="address-text">
                  B-104, Plot 23, Sector 12, Dwarka, Delhi<br/>
                  New Delhi, Delhi - 110075<br/>
                  Ph: +91 98765 43210
                </p>
                <div className="address-actions">
                  <button className="link-action">Edit</button>
                  <button className="link-action danger">Delete</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { LogoBasket } from './FigmaIcons';
import { UserAvatar } from './ProfileIcons';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  // Simulating logged in state for the profile view
  // In a real app this would come from an Auth Context
  const isLoggedIn = location.pathname.includes('/profile') || location.pathname.includes('/orders') || location.pathname.includes('/wishlist') || location.pathname === '/';

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <Link to="/" className="nav-logo">
          <LogoBasket className="logo-icon" size={24} />
          <span>Quick Basket</span>
        </Link>
        
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/products" className="nav-link">Catalog</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/cart" className="nav-cart-btn">
            <ShoppingCart size={20} />
            <span className="cart-badge">2</span>
          </Link>
          
          {isLoggedIn ? (
            <Link to="/profile" className="nav-user-btn">
              <UserAvatar size={16} /> Hi, Aarav ▾
            </Link>
          ) : (
            <Link to="/login" className="nav-login-btn">
              <UserAvatar size={16} /> Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

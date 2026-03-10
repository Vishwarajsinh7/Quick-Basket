import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="/vite.svg" alt="Quick Basket Logo" className="logo-icon" />
            <span className="logo-text">Quick Basket</span>
          </Link>
          <p className="footer-desc">
            Freshness Delivered. Your go-to online grocery store for the best organic produce and daily essentials.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Customer Service</h3>
          <ul className="footer-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/track">Track Order</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>123 Grocery Lane, Fresh City, FC 12345</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+1 (234) 567-8900</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>support@quickbasket.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Quick Basket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Home.css';
import { PromoTruck, FreshProduceIcon, ShopNowBasket } from '../../components/FigmaIcons';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content-box">
            <h1 className="hero-title">Freshness<br />Delivered.</h1>
            <p className="hero-description">
              Premium groceries, organic produce, and daily essentials delivered to your doorstep in under 60 minutes.
            </p>
            
            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-num">10k+</span>
                <span className="stat-text">Products</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">5k+</span>
                <span className="stat-text">Happy Customers</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">1hr</span>
                <span className="stat-text">Fast Delivery</span>
              </div>
            </div>

            <Link to="/products" className="hero-cta">
              <span>Shop Now</span>
              <ShopNowBasket size={20} fill="white" />
            </Link>
          </div>
          
          <div className="hero-image-container">
            <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop" alt="Fresh Produce" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon-box">
              <PromoTruck size={32} fill="#8C2A24" />
            </div>
            <h3>Quick Delivery</h3>
            <p>Get your groceries delivered within an hour of ordering.</p>
          </div>
          
          <div className="feature-card highlighted">
            <div className="feature-icon-box">
              <FreshProduceIcon size={32} fill="white" />
            </div>
            <h3>Healthy Products</h3>
            <p>100% organic and fresh products sourced from local farms.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-box">
              <FreshProduceIcon size={32} fill="#8C2A24" />
            </div>
            <h3>Fresh Items</h3>
            <p>Hand-picked freshness guaranteed with every single item.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

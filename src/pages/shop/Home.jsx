import React from 'react';
import { ShopNowBasket, PromoPercent, PromoTruck, PantryIcon, BakeryIcon, FreshProduceIcon } from '../../components/FigmaIcons';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-box">
        <h1 className="hero-title">Freshness Delivered.</h1>
        <p className="hero-desc">
          Premium groceries, organic produce, and daily essentials delivered to your<br/>
          doorstep in under 60 minutes.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-maroon"><ShopNowBasket size={18} className="btn-icon" fill="white" /> Shop Now</button>
          <button className="btn btn-outline-white"><PromoPercent size={18} className="btn-icon" fill="currentColor" /> View Deals</button>
        </div>
      </div>

      <div className="cards-section">
        <div className="category-card outline">
          <FreshProduceIcon size={32} className="card-icon gold-text" fill="var(--gold-color)" />
          <h3 className="card-title">Fresh Produce</h3>
          <p className="card-desc">Organic fruits and vegetables sourced directly from local farmers.</p>
          <button className="btn btn-outline-maroon full-width">Browse Fresh</button>
        </div>

        <div className="category-card solid-maroon">
          <BakeryIcon size={32} className="card-icon white-text" fill="white" />
          <h3 className="card-title white-text">Bakery</h3>
          <p className="card-desc white-text">Artisan bread, pastries, and cakes baked fresh every morning.</p>
          <button className="btn btn-solid-white full-width">Browse Bakery</button>
        </div>

        <div className="category-card outline">
          <PantryIcon size={32} className="card-icon gold-text" fill="var(--gold-color)" />
          <h3 className="card-title">Pantry</h3>
          <p className="card-desc">Essential staples, spices, and international ingredients for your kitchen.</p>
          <button className="btn btn-outline-maroon full-width">Browse Pantry</button>
        </div>
      </div>

      <div className="promo-banner-gold">
        <PromoTruck size={28} className="banner-icon" fill="white" />
        <div className="banner-text-col">
          <h3>Free Delivery on First Order!</h3>
          <p>Use code <span className="promo-code">FRESH2026</span> at checkout.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

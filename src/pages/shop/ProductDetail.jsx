import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-detail-page bg-white">
      <div className="container py-12">
        <div className="product-detail-layout">
          
          {/* Left Column: Image Area */}
          <div className="pd-image-section">
            <div className="pd-main-image">
              🍎
            </div>
            <div className="pd-thumbnails">
              <div className="pd-thumbnail active">🍎</div>
              <div className="pd-thumbnail">🍎</div>
              <div className="pd-thumbnail">🍎</div>
            </div>
          </div>

          {/* Right Column: Info Area */}
          <div className="pd-info-section">
            <h1 className="pd-title">Organic Crisp Apples</h1>
            <div className="pd-meta">1 kg</div>

            <div className="pd-price-row">
              <span className="pd-current-price">₹120</span>
            </div>

            <div className="pd-description">
              <p>Freshly picked organic apples from the best orchards. Crisp, sweet, and perfect for a healthy snack or baking a delicious pie.</p>
            </div>

            <div className="pd-action-area">
              <div className="quantity-selector">
                <button type="button" onClick={decreaseQuantity}>-</button>
                <input type="number" value={quantity} readOnly />
                <button type="button" onClick={increaseQuantity}>+</button>
              </div>

              <button className="btn btn-primary pd-add-btn">
                <ShoppingCart size={20} className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

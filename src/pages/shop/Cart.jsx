import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="container py-8">
        <h1 className="page-heading">Your Cart</h1>
        
        <div className="cart-layout">
          {/* Cart Items List */}
          <div className="cart-items-section">
            
            <div className="cart-item">
              <div className="cart-item-image">🍎</div>
              <div className="cart-item-details">
                <Link to="/product/1" className="cart-item-title">Organic Crisp Apples</Link>
                <div className="cart-item-meta">1 kg</div>
                <div className="cart-item-price">₹120</div>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-selector small">
                  <button type="button">-</button>
                  <input type="text" value="2" readOnly />
                  <button type="button">+</button>
                </div>
                <button className="remove-item-btn"><Trash2 size={18} /></button>
              </div>
            </div>

            <div className="cart-item">
              <div className="cart-item-image">🥦</div>
              <div className="cart-item-details">
                <Link to="/product/2" className="cart-item-title">Fresh Broccoli</Link>
                <div className="cart-item-meta">1 kg</div>
                <div className="cart-item-price">₹65</div>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-selector small">
                  <button type="button">-</button>
                  <input type="text" value="1" readOnly />
                  <button type="button">+</button>
                </div>
                <button className="remove-item-btn"><Trash2 size={18} /></button>
              </div>
            </div>

          </div>

          {/* Cart Summary */}
          <div className="cart-summary-section">
            <div className="order-summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹305.00</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span>₹50.00</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span className="total-amount">₹355.00</span>
              </div>
              
              <Link to="/checkout" className="btn btn-primary checkout-btn full-width">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

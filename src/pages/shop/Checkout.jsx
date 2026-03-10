import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, CreditCard, ShieldCheck } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order placement
    navigate('/order-summary');
  };

  return (
    <div className="checkout-page">
      <div className="container py-8">
        <h1 className="page-heading">Checkout</h1>
        
        <form className="checkout-layout" onSubmit={handlePlaceOrder}>
          <div className="checkout-form-section">
            <div className="checkout-box">
              <h2 className="box-title"><MapPin size={20} className="mr-2" /> Shipping Details</h2>
              
              <div className="form-grid">
                <div className="input-group">
                  <label className="input-label">First Name</label>
                  <input type="text" name="firstName" className="input-field" required onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label className="input-label">Last Name</label>
                  <input type="text" name="lastName" className="input-field" required onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label className="input-label">Email Address</label>
                  <input type="email" name="email" className="input-field" required onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label className="input-label">Phone Number</label>
                  <input type="tel" name="phone" className="input-field" required onChange={handleChange} />
                </div>
                <div className="input-group full-width">
                  <label className="input-label">Street Address</label>
                  <input type="text" name="address" className="input-field" required onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label className="input-label">City</label>
                  <input type="text" name="city" className="input-field" required onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label className="input-label">Zip/Postal Code</label>
                  <input type="text" name="zipCode" className="input-field" required onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="checkout-box">
              <h2 className="box-title"><CreditCard size={20} className="mr-2" /> Payment Method</h2>
              
              <div className="payment-methods">
                <label className={`payment-option ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} />
                  <span className="option-content">
                    <span className="option-title">Credit / Debit Card</span>
                    <span className="option-desc">Pay securely with your bank card</span>
                  </span>
                </label>
                
                <label className={`payment-option ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input type="radio" name="paymentMethod" value="upi" checked={formData.paymentMethod === 'upi'} onChange={handleChange} />
                  <span className="option-content">
                    <span className="option-title">UPI / Wallet</span>
                    <span className="option-desc">Google Pay, PhonePe, Paytm</span>
                  </span>
                </label>
                
                <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} />
                  <span className="option-content">
                    <span className="option-title">Cash on Delivery</span>
                    <span className="option-desc">Pay when your order arrives</span>
                  </span>
                </label>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="card-details-form form-grid mt-4">
                  <div className="input-group full-width">
                    <label className="input-label">Card Number</label>
                    <input type="text" placeholder="1234 5678 9101 1121" className="input-field" required />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="input-field" required />
                  </div>
                  <div className="input-group">
                    <label className="input-label">CVV</label>
                    <input type="text" placeholder="123" className="input-field" required />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="checkout-summary-section">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="checkout-items">
                <div className="checkout-item-mini">
                  <span className="mini-qty">2x</span>
                  <span className="mini-name">Organic Crisp Apples</span>
                  <span className="mini-price">₹240</span>
                </div>
                <div className="checkout-item-mini">
                  <span className="mini-qty">1x</span>
                  <span className="mini-name">Fresh Broccoli</span>
                  <span className="mini-price">₹65</span>
                </div>
              </div>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹305</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span>₹50</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total to Pay</span>
                <span>₹355</span>
              </div>
              
              <button type="submit" className="btn btn-primary place-order-btn">
                Place Order
              </button>
              
              <div className="secure-checkout">
                <ShieldCheck size={16} /> 256-bit Secure Encryption
              </div>
              
              <p className="terms-text">
                By placing your order, you agree to our <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

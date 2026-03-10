import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Calendar, Download } from 'lucide-react';
import './OrderSummary.css';

const OrderSummary = () => {
  return (
    <div className="order-summary-page">
      <div className="container py-8 success-container">
        
        <div className="success-header animate-fade-in">
          <div className="success-icon-wrapper">
            <CheckCircle className="success-icon" size={64} />
          </div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for shopping with Quick Basket. Your fresh produce is on its way.</p>
        </div>

        <div className="order-details-card">
          <div className="order-meta">
            <div className="meta-item">
              <span className="meta-label">Order Number</span>
              <span className="meta-value">#QB-84729-XT</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Date</span>
              <span className="meta-value">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Total Amount</span>
              <span className="meta-value">₹355.00</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Payment Method</span>
              <span className="meta-value">Credit Card (**** 1234)</span>
            </div>
          </div>

          <div className="delivery-status">
            <div className="status-timeline">
              <div className="timeline-step completed">
                <div className="step-icon"><CheckCircle size={16} /></div>
                <div className="step-text">Order Confirmed</div>
              </div>
              <div className="timeline-line"></div>
              <div className="timeline-step active">
                <div className="step-icon"><Package size={16} /></div>
                <div className="step-text">Processing</div>
              </div>
              <div className="timeline-line disabled"></div>
              <div className="timeline-step disabled">
                <div className="step-icon"><Calendar size={16} /></div>
                <div className="step-text">Out for Delivery</div>
              </div>
            </div>
            <div className="estimated-delivery">
              <strong>Estimated Delivery:</strong> Today, 4:00 PM - 6:00 PM
            </div>
          </div>

          <div className="order-actions">
            <Link to="/orders" className="btn btn-outline">View All Orders</Link>
            <button className="btn btn-outline"><Download size={18} className="mr-2" /> Download Invoice</button>
            <Link to="/" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OrderSummary;

import React, { useState } from 'react';
import EmptyState from '../components/EmptyState';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  
  const hasItems = cartItems.length > 0;
  const subtotal = getCartTotal();
  const gstPercentage = 5;
  const taxAmount = subtotal * (gstPercentage / 100);
  const deliveryCharge = subtotal > 500 ? 0 : 50;
  const total = subtotal + taxAmount + deliveryCharge;

  if (!hasItems) {
    return (
      <div className="container mt-4">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold">
        Shopping Cart ({cartItems.length} Items)
      </h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body">
              {cartItems.map((item) => (
                <div
                  className="d-flex align-items-center mb-4 border-bottom pb-3"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded"
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="flex-grow-1 px-3">
                    <h5 className="mb-1">{item.name}</h5>
                    <small className="text-muted">
                      ₹{item.price.toFixed(2)} each
                    </small>
                  </div>
                  <div className="d-flex align-items-center mx-3">
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <i className="fa-solid fa-minus" />
                    </button>
                    <span
                      className="mx-2 fw-bold"
                      style={{ minWidth: '20px', textAlign: 'center' }}
                    >
                      {item.quantity}
                    </span>
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <i className="fa-solid fa-plus" />
                    </button>
                  </div>
                  <div className="text-end" style={{ width: '120px' }}>
                    <h5 className="mb-0 text-dark">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </h5>
                    <button 
                      className="btn btn-link text-danger text-decoration-none p-0 small"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/catalog" className="btn btn-outline-primary mt-2">
            <i className="fa-solid fa-arrow-left me-2" />
            Continue Shopping
          </Link>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom fw-bold py-3">
              Order Summary
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Delivery</span>
                <span className={deliveryCharge === 0 ? 'text-success' : ''}>
                  {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Tax (GST {gstPercentage}%)</span>
                <span>₹{taxAmount.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-5">Total</span>
                <span
                  className="fw-bold fs-5"
                  style={{ color: 'var(--wad-primary)' }}
                >
                  ₹{total.toFixed(2)}
                </span>
              </div>
              <Link
                to="/checkout"
                className="btn btn-primary w-100 py-2 shadow-sm d-flex align-items-center justify-content-center"
              >
                Proceed to Checkout
                <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
              <div
                className="alert alert-warning small mb-0 d-flex align-items-center mt-3"
                role="alert"
                style={{
                  backgroundColor: '#fff3cd',
                  color: '#664d03',
                  borderColor: '#ffecb5'
                }}
              >
                <i className="fa-solid fa-truck-fast me-2" />
                Delivery by Tomorrow, 10 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

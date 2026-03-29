import React from 'react';
import { useCart } from '../context/CartContext';

function CheckoutPage() {
  const { cartItems, getCartTotal, getCartCount } = useCart();
  
  const subtotal = getCartTotal();
  const gstPercentage = 5;
  const taxAmount = subtotal * (gstPercentage / 100);
  const deliveryCharge = subtotal > 500 ? 0 : 50;
  const total = subtotal + taxAmount + deliveryCharge;
  const cartCount = getCartCount();
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-md-8">
          <h4 className="mb-3 fw-bold">Billing Address</h4>
          <form className="needs-validation">
            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label">First name</label>
                <input className="form-control" required />
              </div>
              <div className="col-sm-6">
                <label className="form-label">Last name</label>
                <input className="form-control" required />
              </div>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Address / House No.</label>
                <input
                  className="form-control"
                  placeholder="e.g. Flat 402, Sunshine Apts"
                  required
                />
              </div>
              <div className="col-md-5">
                <label className="form-label">City</label>
                <input className="form-control" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">State</label>
                <select className="form-select" required>
                  <option value="">Choose...</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Delhi</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Pin Code</label>
                <input className="form-control" required />
              </div>
            </div>
            <hr className="my-4" />
            <h4 className="mb-3 fw-bold">Payment Method</h4>
            <div className="my-3">
              <div className="form-check mb-3">
                <input
                  id="razorpay"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  defaultChecked
                />
                <label className="form-check-label fw-bold" htmlFor="razorpay">
                  Online Payment (Razorpay)
                </label>
                <div className="small text-muted ms-2">
                  UPI, Credit/Debit Cards, NetBanking
                </div>
              </div>
              <div className="form-check">
                <input
                  id="cod"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                />
                <label className="form-check-label fw-bold" htmlFor="cod">
                  Cash on Delivery (COD)
                </label>
              </div>
            </div>
            <hr className="my-4" />
            <button
              className="w-100 btn btn-primary btn-lg py-3 shadow-sm"
              type="button"
            >
              Place Order (₹{total.toFixed(2)})
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm sticky-top"
            style={{ top: '20px' }}
          >
            <div className="card-header bg-white border-bottom fw-bold py-3">
              Your Cart{' '}
              <span className="badge bg-secondary rounded-pill float-end">
                {cartCount}
              </span>
            </div>
            <ul className="list-group list-group-flush">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                  <span className="text-muted">₹{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (INR)</span>
                <strong style={{ color: 'var(--wad-primary)' }}>
                  ₹{total.toFixed(2)}
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;


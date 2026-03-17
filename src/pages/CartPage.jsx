import React from 'react';
import EmptyState from '../components/EmptyState';

// Simple mock cart items; replace with real data later.
const mockCart = [
  {
    id: 1,
    name: 'Organic Apples',
    icon: 'fa-apple-whole',
    price: 199,
    quantity: 2
  }
];

function CartPage() {
  const hasItems = mockCart.length > 0;
  const subtotal = mockCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gstPercentage = 5;
  const taxAmount = subtotal * (gstPercentage / 100);
  const total = subtotal + taxAmount;

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
        Shopping Cart ({mockCart.length} Items)
      </h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body">
              {mockCart.map((item) => (
                <div
                  className="d-flex align-items-center mb-4 border-bottom pb-3"
                  key={item.id}
                >
                  <div
                    className="bg-light rounded d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '80px',
                      height: '80px',
                      color: 'var(--wad-accent)'
                    }}
                  >
                    <i className={`fa-solid ${item.icon} fa-2x`} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.name}</h5>
                    <small className="text-muted">
                      ₹{item.price.toFixed(2)} each
                    </small>
                  </div>
                  <div className="d-flex align-items-center mx-3">
                    <button className="btn btn-sm btn-outline-secondary">
                      <i className="fa-solid fa-minus" />
                    </button>
                    <span
                      className="mx-2 fw-bold"
                      style={{ minWidth: '20px', textAlign: 'center' }}
                    >
                      {item.quantity}
                    </span>
                    <button className="btn btn-sm btn-outline-secondary">
                      <i className="fa-solid fa-plus" />
                    </button>
                  </div>
                  <div className="text-end" style={{ width: '120px' }}>
                    <h5 className="mb-0 text-dark">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </h5>
                    <button className="btn btn-link text-danger text-decoration-none p-0 small">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a href="/catalog" className="btn btn-outline-primary mt-2">
            <i className="fa-solid fa-arrow-left me-2" />
            Continue Shopping
          </a>
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
                <span className="text-success">FREE</span>
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
              <a
                href="/checkout"
                className="btn btn-primary w-100 py-2 shadow-sm d-flex align-items-center justify-content-center"
              >
                Proceed to Checkout
                <i className="fa-solid fa-arrow-right ms-2" />
              </a>
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


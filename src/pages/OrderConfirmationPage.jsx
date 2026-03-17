import React from 'react';

function OrderConfirmationPage() {
  const order = {
    id: 1234,
    firstName: 'Priya',
    totalAmount: 1299,
    status: 'Pending',
    orderDate: new Date(),
    address: 'A-1203, Oberoi Gardens',
    city: 'Mumbai'
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="mb-4 text-success">
            <i className="fa-solid fa-circle-check fa-6x" />
          </div>
          <h1 className="fw-bold mb-3">Order Placed Successfully!</h1>
          <p className="lead text-muted mb-4">
            Thank you for shopping with Quick Basket,{' '}
            <strong>{order.firstName}</strong>. Your fresh groceries are being
            packed with care.
          </p>
          <div
            className="card border-0 shadow-sm p-4 mb-4 text-start mx-auto"
            style={{ maxWidth: '500px' }}
          >
            <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
              <span className="text-muted">Order Number</span>
              <span className="fw-bold text-dark">
                #QB-{order.orderDate.getFullYear()}-
                {order.id.toString().padStart(4, '0')}
              </span>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
              <span className="text-muted">Date</span>
              <span className="fw-bold text-dark">
                {order.orderDate.toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
              <span className="text-muted">Status</span>
              <span className="badge bg-warning text-dark">
                {order.status}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Total Amount</span>
              <span
                className="fw-bold fs-5"
                style={{ color: 'var(--wad-primary)' }}
              >
                ₹{order.totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="alert alert-light border d-inline-block text-start mb-4 px-4 py-3">
            <div className="d-flex align-items-center">
              <i
                className="fa-solid fa-truck-fast fa-2x me-3"
                style={{ color: 'var(--wad-accent)' }}
              />
              <div>
                <div className="fw-bold">Estimated Delivery</div>
                <div className="small text-muted">
                  Tomorrow, 10:00 AM - 12:00 PM
                </div>
                <div className="small text-muted">
                  To: {order.address}, {order.city}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <a href="/" className="btn btn-outline-primary px-4">
              <i className="fa-solid fa-house me-2" />
              Home
            </a>
            <a href="/user/orders" className="btn btn-primary px-4 shadow-sm">
              <i className="fa-solid fa-box-open me-2" />
              Track Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;


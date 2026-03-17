import React from 'react';

import UserProfilePage from './UserProfilePage'; // to reuse sidebar component

const mockOrders = [
  {
    id: 1234,
    date: '12 Mar, 2026',
    total: 1299,
    status: 'Pending'
  }
];

function UserOrdersPage() {
  // reuse the sidebar by rendering it via UserProfilePage's exported sidebar is tricky;
  // instead we inline same layout here for clarity.
  const userName = 'User';

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        {/* Sidebar (same as in profile) */}
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="list-group list-group-flush rounded-3">
                <div className="list-group-item bg-light fw-bold text-muted py-3">
                  <i className="fa-solid fa-user-circle me-2" />
                  Hello, {userName}
                </div>
                <a
                  href="/user/profile"
                  className="list-group-item list-group-item-action text-dark"
                >
                  <i className="fa-solid fa-id-card me-2" />
                  Personal Details
                </a>
                <a
                  href="/user/orders"
                  className="list-group-item list-group-item-action active"
                  style={{
                    backgroundColor: 'var(--wad-primary)',
                    borderColor: 'var(--wad-primary)'
                  }}
                >
                  <i className="fa-solid fa-box me-2" />
                  My Orders
                </a>
                <a
                  href="/user/wishlist"
                  className="list-group-item list-group-item-action text-dark"
                >
                  <i className="fa-solid fa-heart me-2" />
                  Wishlist
                </a>
                <button
                  type="button"
                  className="list-group-item list-group-item-action text-danger border-0 w-100 text-start"
                >
                  <i className="fa-solid fa-right-from-bracket me-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <h4 className="fw-bold mb-4">Order History</h4>
          {mockOrders.length === 0 ? (
            <div className="text-center py-5 my-5 bg-white rounded shadow-sm">
              <i className="fa-solid fa-box-open fa-4x text-muted mb-3 opacity-25" />
              <h5 className="fw-bold">No orders yet</h5>
              <p className="text-muted mb-4">
                Looks like you haven't placed any orders.
              </p>
              <a href="/catalog" className="btn btn-primary px-4">
                Start Shopping
              </a>
            </div>
          ) : (
            mockOrders.map((order) => (
              <div className="card border-0 shadow-sm mb-4" key={order.id}>
                <div className="card-header bg-white py-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
                  <div>
                    <span className="text-muted small">ORDER PLACED</span>
                    <br />
                    <span className="fw-bold">{order.date}</span>
                  </div>
                  <div>
                    <span className="text-muted small">TOTAL</span>
                    <br />
                    <span className="fw-bold">
                      ₹{order.total.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted small">ORDER #</span>
                    <br />
                    <span className="fw-bold">
                      QB-2026-{order.id.toString().padStart(4, '0')}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <h5 className="fw-bold text-warning mb-2">
                        <i className="fa-solid fa-clock me-2" />
                        {order.status}
                      </h5>
                      <p className="text-muted small mb-3">
                        Your items are being packed.
                      </p>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-end gap-2 mt-3 mt-md-0">
                      <a
                        href="/order-confirmation"
                        className="btn btn-outline-primary btn-sm"
                      >
                        View Receipt
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default UserOrdersPage;


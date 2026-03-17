import React from 'react';

function WishlistPage() {
  const userName = 'User';
  const wishlist = [];

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
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
                  className="list-group-item list-group-item-action text-dark"
                >
                  <i className="fa-solid fa-box me-2" />
                  My Orders
                </a>
                <a
                  href="/user/wishlist"
                  className="list-group-item list-group-item-action active"
                  style={{
                    backgroundColor: 'var(--wad-primary)',
                    borderColor: 'var(--wad-primary)'
                  }}
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
          <h4 className="fw-bold mb-4">
            My Wishlist ({wishlist.length} Items)
          </h4>
          {wishlist.length === 0 ? (
            <div className="text-center py-5 bg-white rounded shadow-sm">
              <p className="text-muted">Your wishlist is empty.</p>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* map wishlist items here when wired to data */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;


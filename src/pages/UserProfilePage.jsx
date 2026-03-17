import React from 'react';

function UserSidebar({ active }) {
  const userName = 'User';
  return (
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
              className={
                'list-group-item list-group-item-action ' +
                (active === 'profile'
                  ? 'active'
                  : 'text-dark')
              }
              style={
                active === 'profile'
                  ? {
                      backgroundColor: 'var(--wad-primary)',
                      borderColor: 'var(--wad-primary)'
                    }
                  : undefined
              }
            >
              <i className="fa-solid fa-id-card me-2" />
              Personal Details
            </a>
            <a
              href="/user/orders"
              className={
                'list-group-item list-group-item-action ' +
                (active === 'orders'
                  ? 'active'
                  : 'text-dark')
              }
              style={
                active === 'orders'
                  ? {
                      backgroundColor: 'var(--wad-primary)',
                      borderColor: 'var(--wad-primary)'
                    }
                  : undefined
              }
            >
              <i className="fa-solid fa-box me-2" />
              My Orders
            </a>
            <a
              href="/user/wishlist"
              className={
                'list-group-item list-group-item-action ' +
                (active === 'wishlist'
                  ? 'active'
                  : 'text-dark')
              }
              style={
                active === 'wishlist'
                  ? {
                      backgroundColor: 'var(--wad-primary)',
                      borderColor: 'var(--wad-primary)'
                    }
                  : undefined
              }
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
  );
}

function UserProfilePage() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        <UserSidebar active="profile" />
        <div className="col-md-9">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white py-3 fw-bold">
              Edit Profile
            </div>
            <div className="card-body">
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="user@example.com"
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="user@example.com"
                      disabled
                    />
                  </div>
                </div>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue="Not Provided"
                    />
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;


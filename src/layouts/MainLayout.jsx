import React from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function MainLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.toLowerCase();
  const isFullPage =
    path.startsWith('/auth') || path.startsWith('/admin') || path.startsWith('/delivery');
  
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isFullPage) {
    // For auth, admin, and delivery routes we let each page render its own full layout
    return <>{children}</>;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <i className="fa-solid fa-basket-shopping me-2" />
              Quick Basket
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      'nav-link' + (isActive ? ' active fw-bold' : '')
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/catalog"
                    className={({ isActive }) =>
                      'nav-link' + (isActive ? ' active fw-bold' : '')
                    }
                  >
                    Catalog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      'nav-link' + (isActive ? ' active fw-bold' : '')
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      'nav-link' + (isActive ? ' active fw-bold' : '')
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3">
                <Link
                  to="/cart"
                  className="btn btn-outline-primary position-relative border-0"
                >
                  <i className="fa-solid fa-cart-shopping fa-lg" />
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                    </span>
                  )}
                </Link>
                {user ? (
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-primary dropdown-toggle fw-bold"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-user me-1" />
                      {user.name || user.firstName}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item" to="/user/profile">
                          <i className="fa-solid fa-user me-2" />
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user/orders">
                          <i className="fa-solid fa-box me-2" />
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user/wishlist">
                          <i className="fa-solid fa-heart me-2" />
                          Wishlist
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={handleLogout}
                        >
                          <i className="fa-solid fa-sign-out-alt me-2" />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="d-flex gap-2">
                    <Link
                      to="/auth/login"
                      className="btn btn-outline-primary fw-bold"
                    >
                      Login
                    </Link>
                    <Link
                      to="/auth/register"
                      className="btn btn-primary shadow-sm"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main role="main" className="pb-3">
        <div className="container">{children}</div>
      </main>
      <footer className="footer text-muted">
        <div className="container text-center">
          &copy; {new Date().getFullYear()} - <strong>Quick Basket</strong> - Premium Grocery Platform
          <Link to="/admin/login" className="ms-2 text-muted small">Admin</Link>
        </div>
      </footer>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="quickBasketToast"
          className="toast border-0 shadow"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div
            className="toast-header text-white"
            style={{ backgroundColor: 'var(--wad-primary)' }}
          >
            <i className="fa-solid fa-bell me-2" />
            <strong className="me-auto" id="toastTitle">
              Notification
            </strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body bg-white text-dark" id="toastMessage">
            Action completed successfully!
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;

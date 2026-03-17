import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="auth-layout">
      <div className="auth-card shadow-lg">
        <div className="auth-header">
          <i className="fa-solid fa-user-plus fa-3x mb-2" />
          <h3 className="fw-bold mb-0">Join Quick Basket</h3>
          <p className="mb-0 opacity-75">Create your account today</p>
        </div>
        <div className="p-4">
          <form>
            <div className="row g-2 mb-3">
              <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                  <label>First Name</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                  <label>Last Name</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
              <label>Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <label>Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
              <label>Confirm Password</label>
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
              />
              <label
                className="form-check-label text-muted small"
                htmlFor="terms"
              >
                I agree to the{' '}
                <a href="#" style={{ color: 'var(--wad-primary)' }}>
                  Terms &amp; Conditions
                </a>
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary mb-3 shadow-sm"
              type="button"
            >
              Sign Up
            </button>
            <div className="text-center">
              <p className="text-muted small mb-0">
                Already have an account?
              </p>
              <Link
                to="/auth/login"
                className="fw-bold text-decoration-none"
                style={{ color: 'var(--wad-primary)' }}
              >
                Login here
              </Link>
            </div>
            <hr className="my-4" />
            <Link
              to="/"
              className="btn btn-outline-secondary w-100 btn-sm"
            >
              <i className="fa-solid fa-arrow-left me-2" />
              Back to Store
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;


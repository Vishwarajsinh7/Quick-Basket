import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-card shadow-lg">
        <div className="auth-header">
          <i className="fa-solid fa-basket-shopping fa-3x mb-2" />
          <h3 className="fw-bold mb-0">Login to Quick Basket</h3>
          <p className="mb-0 opacity-75">Welcome Back!</p>
        </div>
        <div className="p-4">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <label>Password</label>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  id="rememberMe"
                  className="form-check-input"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  className="form-check-label text-muted small"
                  htmlFor="rememberMe"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="small text-decoration-none"
                style={{ color: 'var(--wad-primary)' }}
              >
                Forgot password?
              </a>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary mb-3 shadow-sm"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <div className="text-center">
              <p className="text-muted small mb-0">
                Don't have an account?
              </p>
              <Link
                to="/auth/register"
                className="fw-bold text-decoration-none"
                style={{ color: 'var(--wad-primary)' }}
              >
                Create New Account
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

export default LoginPage;

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userData = await login(email, password);
      // Redirect admin to dashboard, regular user to home
      if (userData.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: 'calc(100vh - 160px)', padding: '2rem 1rem' }}
    >
      <div style={{ width: '100%', maxWidth: '440px' }}>
        {/* Logo / Brand */}
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, var(--primary-color), #C0392B)',
              boxShadow: '0 4px 16px rgba(140,42,36,0.3)',
            }}
          >
            <i className="fa-solid fa-basket-shopping fa-xl text-white" />
          </div>
          <h1
            className="fw-bold mb-1"
            style={{
              color: 'var(--primary-color)',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
            }}
          >
            Welcome Back
          </h1>
          <p className="text-muted small">Sign in to your Quick Basket account</p>
        </div>

        {/* Card */}
        <div
          className="card border-0 shadow-sm p-4"
          style={{ borderRadius: '16px', background: '#fff' }}
        >
          {error && (
            <div className="alert alert-danger py-2 small mb-3" role="alert">
              <i className="fa-solid fa-circle-exclamation me-2" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
            {/* Email */}
            <div>
              <label className="form-label fw-semibold small text-muted mb-1">
                Email Address
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="fa-solid fa-envelope fa-sm" />
                </span>
                <input
                  type="email"
                  className="form-control bg-light border-start-0 ps-0"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  style={{ borderRadius: '0 8px 8px 0' }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="form-label fw-semibold small text-muted mb-1">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="fa-solid fa-lock fa-sm" />
                </span>
                <input
                  type="password"
                  className="form-control bg-light border-start-0 ps-0"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  style={{ borderRadius: '0 8px 8px 0' }}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 mt-2 fw-bold"
              disabled={loading}
              style={{
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--primary-color), #C0392B)',
                border: 'none',
                boxShadow: '0 4px 12px rgba(140,42,36,0.3)',
                letterSpacing: '0.3px',
              }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" />
                  Signing in…
                </>
              ) : (
                <>
                  <i className="fa-solid fa-right-to-bracket me-2" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="d-flex align-items-center my-3 gap-2">
            <hr className="flex-grow-1 m-0" />
            <span className="text-muted small">or</span>
            <hr className="flex-grow-1 m-0" />
          </div>

          <p className="text-center text-muted small mb-0">
            Don't have an account?{' '}
            <Link
              to="/auth/register"
              className="fw-bold text-decoration-none"
              style={{ color: 'var(--primary-color)' }}
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Admin hint */}
        <p className="text-center text-muted mt-3" style={{ fontSize: '0.78rem' }}>
          <i className="fa-solid fa-shield-halved me-1" />
          Admin? Use <strong>admin@quickbasket.com</strong> / <strong>admin123</strong>
        </p>
      </div>
    </div>
  );
}
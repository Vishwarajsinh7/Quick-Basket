import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(form.firstName, form.lastName, form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: 'calc(100vh - 160px)', padding: '2rem 1rem' }}
    >
      <div style={{ width: '100%', maxWidth: '460px' }}>
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
            Create Account
          </h1>
          <p className="text-muted small">Join Quick Basket and start shopping</p>
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

          <form onSubmit={handleRegister} className="d-flex flex-column gap-3">
            {/* Name row */}
            <div className="row g-2">
              <div className="col-6">
                <label className="form-label fw-semibold small text-muted mb-1">First Name</label>
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="John"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  required
                  style={{ borderRadius: '8px' }}
                />
              </div>
              <div className="col-6">
                <label className="form-label fw-semibold small text-muted mb-1">Last Name</label>
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  required
                  style={{ borderRadius: '8px' }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="form-label fw-semibold small text-muted mb-1">Email Address</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="fa-solid fa-envelope fa-sm" />
                </span>
                <input
                  type="email"
                  className="form-control bg-light border-start-0 ps-0"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  autoComplete="email"
                  style={{ borderRadius: '0 8px 8px 0' }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="form-label fw-semibold small text-muted mb-1">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="fa-solid fa-lock fa-sm" />
                </span>
                <input
                  type="password"
                  className="form-control bg-light border-start-0 ps-0"
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  minLength={6}
                  autoComplete="new-password"
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
                  Creating account…
                </>
              ) : (
                <>
                  <i className="fa-solid fa-user-plus me-2" />
                  Create Account
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
            Already have an account?{' '}
            <Link
              to="/auth/login"
              className="fw-bold text-decoration-none"
              style={{ color: 'var(--primary-color)' }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AdminLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userData = await login(email, password);
      if (userData.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        setError('Access denied. Admin credentials required.');
      }
    } catch (err) {
      setError(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'stretch',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left Panel — Branding */}
      <div
        style={{
          flex: '0 0 45%',
          background: 'linear-gradient(145deg, #1a0a00 0%, #3d1a0a 50%, #1a0a00 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="d-none d-md-flex"
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'rgba(140,42,36,0.15)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '240px', height: '240px', borderRadius: '50%',
          background: 'rgba(140,42,36,0.1)',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '20px',
            background: 'linear-gradient(135deg, #8C2A24, #C0392B)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
            boxShadow: '0 8px 32px rgba(140,42,36,0.5)',
          }}>
            <i className="fa-solid fa-basket-shopping fa-2x" style={{ color: '#fff' }} />
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.5px' }}>
            Quick Basket
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginBottom: '48px' }}>
            Admin Control Panel
          </p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
            {[
              { icon: 'fa-chart-line', label: 'Real-time analytics & reports' },
              { icon: 'fa-boxes-stacked', label: 'Full product management' },
              { icon: 'fa-users', label: 'User & order management' },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px', textAlign: 'left' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(140,42,36,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <i className={`fa-solid ${icon}`} style={{ color: '#E57373', fontSize: '0.85rem' }} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fafafa',
        padding: '40px 24px',
      }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>

          {/* Mobile logo */}
          <div className="text-center d-md-none mb-4">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #8C2A24, #C0392B)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className="fa-solid fa-basket-shopping" style={{ color: '#fff' }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#1a0a00' }}>Quick Basket</span>
            </div>
          </div>

          {/* Heading */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#8C2A24', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
              Admin Access
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>
              Sign in to Dashboard
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Enter your admin credentials to continue
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              padding: '12px 16px',
              background: '#fee2e2',
              border: '1px solid #fecaca',
              borderRadius: '10px',
              color: '#dc2626',
              fontSize: '0.88rem',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <i className="fa-solid fa-circle-exclamation" />
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.88rem', color: '#374151' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <i className="fa-solid fa-envelope" style={{
                  position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                  color: '#9ca3af', fontSize: '0.85rem',
                }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@quickbasket.com"
                  required
                  style={{
                    width: '100%', padding: '12px 14px 12px 40px',
                    border: '1.5px solid #e5e7eb', borderRadius: '10px',
                    fontSize: '0.9rem', outline: 'none', background: '#fff',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#8C2A24'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.88rem', color: '#374151' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <i className="fa-solid fa-lock" style={{
                  position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                  color: '#9ca3af', fontSize: '0.85rem',
                }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  style={{
                    width: '100%', padding: '12px 44px 12px 40px',
                    border: '1.5px solid #e5e7eb', borderRadius: '10px',
                    fontSize: '0.9rem', outline: 'none', background: '#fff',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#8C2A24'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: 0,
                  }}
                >
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} style={{ fontSize: '0.85rem' }} />
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                background: loading
                  ? '#ccc'
                  : 'linear-gradient(135deg, #8C2A24, #C0392B)',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: loading ? 'none' : '0 4px 16px rgba(140,42,36,0.35)',
                transition: 'opacity 0.2s',
                letterSpacing: '0.3px',
              }}
            >
              {loading ? (
                <>
                  <span style={{
                    width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.4)',
                    borderTopColor: '#fff', borderRadius: '50%',
                    animation: 'spin 0.7s linear infinite', display: 'inline-block',
                  }} />
                  Signing in…
                </>
              ) : (
                <>
                  <i className="fa-solid fa-right-to-bracket" />
                  Sign In to Dashboard
                </>
              )}
            </button>
          </form>

          {/* Credentials hint */}
          <div style={{
            marginTop: '24px',
            padding: '14px 16px',
            background: '#fff8f0',
            border: '1px solid #fde8d0',
            borderRadius: '10px',
            fontSize: '0.82rem',
            color: '#92400e',
          }}>
            <i className="fa-solid fa-circle-info me-2" />
            Use <strong>admin@quickbasket.com</strong> / <strong>admin123</strong>
          </div>

          {/* Back link */}
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link to="/" style={{
              color: '#6b7280', textDecoration: 'none', fontSize: '0.88rem',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
              <i className="fa-solid fa-arrow-left" style={{ fontSize: '0.75rem' }} />
              Back to Website
            </Link>
          </div>
        </div>
      </div>

      {/* Spinner keyframes */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default AdminLoginPage;
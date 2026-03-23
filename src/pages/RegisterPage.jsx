import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!agreedToTerms) {
      setError('Please agree to the Terms & Conditions');
      return;
    }

    setLoading(true);

    try {
      await register(firstName, lastName, email, password);
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
          <i className="fa-solid fa-user-plus fa-3x mb-2" />
          <h3 className="fw-bold mb-0">Join Quick Basket</h3>
          <p className="mb-0 opacity-75">Create your account today</p>
        </div>
        <div className="p-4">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row g-2 mb-3">
              <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
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
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
              <label>Confirm Password</label>
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label
                className="form-check-label text-muted small"
                htmlFor="terms"
              >
                I agree to the{' '}
                <a href="#" style={{ color: 'var(--wad-primary)' }}>
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary mb-3 shadow-sm"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
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

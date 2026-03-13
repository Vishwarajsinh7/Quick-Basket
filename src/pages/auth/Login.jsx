import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { AuthLogoBasket } from '../../components/AuthIcons';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@quickbasket.com') {
      navigate('/admin');
    } else {
      navigate('/products');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card login-variant">
        {/* Header Section */}
        <div className="auth-card-header">
          <div className="auth-icon-wrapper">
            <AuthLogoBasket size={42} />
          </div>
          <h2 className="auth-brand">Quick Basket</h2>
          <p className="auth-subtitle">WELCOME BACK!</p>
        </div>

        {/* Body Section */}
        <div className="auth-card-body">
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <input 
                type="email" 
                className="auth-input" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="auth-form-group">
              <div className="password-input-wrapper">
                <input 
                  type="password" 
                  className="auth-input" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-options">
              <label className="remember-me">
                <input type="radio" name="remember" /> 
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            <button type="submit" className="auth-btn">Sign In</button>
          </form>

          <p className="auth-footer-text">
            Don't have an account? <Link to="/register">Join the club</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

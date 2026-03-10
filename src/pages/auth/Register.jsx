import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { AuthUserAdd } from '../../components/AuthIcons';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Header Section */}
        <div className="auth-card-header">
          <div className="auth-icon-wrapper">
            <AuthUserAdd size={36} />
          </div>
          <h2 className="auth-brand">Create your account today</h2>
          <p className="auth-subtitle">Join our community of organic lovers!</p>
        </div>

        {/* Body Section */}
        <div className="auth-card-body">
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-row">
              <div className="auth-form-group">
                <label className="auth-label">FIRST NAME</label>
                <input 
                  type="text" 
                  className="auth-input" 
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="auth-form-group">
                <label className="auth-label">LAST NAME</label>
                <input 
                  type="text" 
                  className="auth-input" 
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label className="auth-label">EMAIL ADDRESS</label>
              <input 
                type="email" 
                className="auth-input" 
                placeholder="example@organic.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="auth-form-group">
              <label className="auth-label">PASSWORD</label>
              <div className="password-input-wrapper">
                <input 
                  type="password" 
                  className="auth-input" 
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <Eye size={18} className="password-toggle" />
              </div>
            </div>

            <label className="terms-checkbox">
              <input type="radio" required />
              <span>By creating an account, I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link></span>
            </label>

            <button type="submit" className="auth-btn">Sign Up Now</button>
          </form>

          <p className="auth-footer-text">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

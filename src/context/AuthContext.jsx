import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for stored user/admin on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('quickbasket_user');
    const storedAdmin = localStorage.getItem('quickbasket_admin');

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('quickbasket_user');
      }
    }

    if (storedAdmin) {
      try {
        setAdmin(JSON.parse(storedAdmin));
      } catch (e) {
        localStorage.removeItem('quickbasket_admin');
      }
    }

    setLoading(false);
  }, []);

  // Login - handles both regular users and admin
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check for admin credentials first
        if (email === 'admin@quickbasket.com' && password === 'admin123') {
          const adminData = {
            id: 1,
            email: email,
            name: 'Admin',
            role: 'admin'
          };
          // Set both admin and user (admin is also a user)
          setAdmin(adminData);
          setUser(adminData);
          localStorage.setItem('quickbasket_admin', JSON.stringify(adminData));
          localStorage.setItem('quickbasket_user', JSON.stringify(adminData));
          resolve(adminData);
        }
        // Regular user login
        else if (email && password.length >= 6) {
          const userData = {
            id: Date.now(),
            email: email,
            name: email.split('@')[0],
            firstName: 'John',
            lastName: 'Doe',
            role: 'user'
          };
          setUser(userData);
          localStorage.setItem('quickbasket_user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid email or password (must be 6+ characters)'));
        }
      }, 500);
    });
  };

  const register = (firstName, lastName, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password.length >= 6 && firstName && lastName) {
          const userData = {
            id: Date.now(),
            email: email,
            name: `${firstName} ${lastName}`,
            firstName: firstName,
            lastName: lastName,
            role: 'user'
          };
          setUser(userData);
          localStorage.setItem('quickbasket_user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Please fill all fields correctly (password must be 6+ characters)'));
        }
      }, 500);
    });
  };

  // User logout - logs out both user and admin
  const logout = () => {
    setUser(null);
    setAdmin(null);
    localStorage.removeItem('quickbasket_user');
    localStorage.removeItem('quickbasket_admin');
  };

  // Admin specific logout (keeps user logged in)
  const adminLogout = () => {
    setAdmin(null);
    localStorage.removeItem('quickbasket_admin');
  };

  const updateProfile = (userData) => {
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('quickbasket_user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{
      user,
      admin,
      loading,
      login,
      register,
      logout,
      adminLogout,
      updateProfile,
      isAuthenticated: !!user,
      isAdminAuthenticated: !!admin
    }}>
      {children}
    </AuthContext.Provider>
  );
}
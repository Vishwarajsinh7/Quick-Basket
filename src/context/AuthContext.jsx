import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('quickbasket_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('quickbasket_user');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate login - in production, this would call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password.length >= 6) {
          const userData = {
            id: 1,
            email: email,
            name: email.split('@')[0],
            firstName: 'John',
            lastName: 'Doe'
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
    // Simulate registration - in production, this would call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password.length >= 6 && firstName && lastName) {
          const userData = {
            id: Date.now(),
            email: email,
            name: `${firstName} ${lastName}`,
            firstName: firstName,
            lastName: lastName
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem('quickbasket_user');
  };

  const updateProfile = (userData) => {
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('quickbasket_user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      logout,
      updateProfile,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', fontSize: '0.8rem', color: '#888' }}>
        © 2026 - Quick Basket - Premium Grocery Platform
      </footer>
    </div>
  );
};

export default MainLayout;

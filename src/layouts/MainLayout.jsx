import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', fontSize: '0.85rem', color: '#666', borderTop: '1px solid var(--border-light)', backgroundColor: 'var(--bg-cream)' }}>
        © 2026 Quick Basket. Freshness Delivered to Your Doorstep.
      </footer>
    </div>
  );
};

export default MainLayout;

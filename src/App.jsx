import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import NotFoundPage from './pages/NotFoundPage';
import UserProfilePage from './pages/UserProfilePage';
import UserOrdersPage from './pages/UserOrdersPage';
import WishlistPage from './pages/WishlistPage';

import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminMessagePage from "./pages/AdminMessagePage";
import AdminSettingsPage from './pages/AdminSettingsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import DeliveryPage from './pages/DeliveryPage';

function App() {
  return (
    <Routes>

      {/* ADMIN ROUTES */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminLayout><AdminDashboardPage /></AdminLayout></ProtectedAdminRoute>} />
      <Route path="/admin/products" element={<ProtectedAdminRoute><AdminLayout><AdminProductsPage /></AdminLayout></ProtectedAdminRoute>} />
      <Route path="/admin/users" element={<ProtectedAdminRoute><AdminLayout><AdminUsersPage /></AdminLayout></ProtectedAdminRoute>} />
      <Route path="/admin/orders" element={<ProtectedAdminRoute><AdminLayout><AdminOrdersPage /></AdminLayout></ProtectedAdminRoute>} />
      <Route path="/admin/messages" element={<ProtectedAdminRoute><AdminLayout><AdminMessagePage /></AdminLayout></ProtectedAdminRoute>} />
      <Route path="/admin/settings" element={<ProtectedAdminRoute><AdminLayout><AdminSettingsPage /></AdminLayout></ProtectedAdminRoute>} />

      {/* USER ROUTES */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/catalog" element={<MainLayout><CatalogPage /></MainLayout>} />
      <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
      <Route path="/product/:id" element={<MainLayout><ProductDetailsPage /></MainLayout>} />
      <Route path="/checkout" element={<MainLayout><CheckoutPage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      <Route path="/order-confirmation" element={<MainLayout><OrderConfirmationPage /></MainLayout>} />
      <Route path="/user/profile" element={<MainLayout><UserProfilePage /></MainLayout>} />
      <Route path="/user/orders" element={<MainLayout><UserOrdersPage /></MainLayout>} />
      <Route path="/user/wishlist" element={<MainLayout><WishlistPage /></MainLayout>} />
      <Route path="/delivery" element={<MainLayout><DeliveryPage /></MainLayout>} />
      <Route path="/auth/login" element={<MainLayout><LoginPage /></MainLayout>} />
      <Route path="/auth/register" element={<MainLayout><RegisterPage /></MainLayout>} />


      {/* 404 */}
      <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />

    </Routes>
  );
}

export default App;

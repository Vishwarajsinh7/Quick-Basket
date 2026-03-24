import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

// Simple mock data to render cards; replace with real API later.
const mockProducts = [
  {
    id: 1,
    name: 'Organic Apple',
    category: 'Fresh Produce',
    description:
      'Crisp, sweet organic apples sourced directly from local farms. These premium quality apples are hand-picked and carefully sorted to ensure you get the best freshness. Perfect for snacking, salads, or baking.',
    price: 199,
    stockQuantity: 25,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    category: 'Bakery',
    description: 'Freshly baked whole wheat loaf, perfect for healthy sandwiches and toast.',
    price: 79,
    stockQuantity: 30,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'Basmati Rice',
    category: 'Grocery',
    description: 'Premium long-grain basmati rice, aged for perfect texture and aroma.',
    price: 499,
    stockQuantity: 1,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop'
  },
  {
    id: 4,
    name: 'Fresh Milk',
    category: 'Dairy',
    description: 'Organic whole milk, farm fresh and naturally enriched with nutrients.',
    price: 89,
    stockQuantity: 40,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=600&fit=crop'
  },
  {
    id: 5,
    name: 'Greek Yogurt',
    category: 'Dairy',
    description: 'Creamy Greek yogurt, rich in protein and probiotics.',
    price: 120,
    stockQuantity: 20,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop'
  },
  {
    id: 6,
    name: 'Olive Oil',
    category: 'Grocery',
    description: 'Extra virgin olive oil, cold pressed for authentic Mediterranean flavor.',
    price: 350,
    stockQuantity: 25,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop'
  }
];

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      window.location.href = '/auth/login';
      return;
    }
    const qtyInput = document.getElementById('qty');
    const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
    addToCart(product, quantity);
  };

  useEffect(() => {
    // Find the product by ID from URL params
    const productId = parseInt(id);
    const foundProduct = mockProducts.find(p => p.id === productId);
    setProduct(foundProduct || null);
  }, [id]);

  // If product is not found, show error message
  if (!product) {
    return (
      <div className="container mt-5 mb-5">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Product Not Found</h4>
          <p>The product you are looking for does not exist or has been removed.</p>
          <hr />
          <a href="/catalog" className="btn btn-primary">Go to Catalog</a>
        </div>
      </div>
    );
  }

  const inStock = product.stockQuantity > 0;

  return (
    <div className="container mt-5 mb-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/catalog">Catalog</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.category}
          </li>
        </ol>
      </nav>
      <div className="card border-0 shadow-sm p-4 mb-5">
        <div className="row g-5">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-3"
              style={{ height: '400px', width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <div className="mb-2">
              {inStock ? (
                <span className="badge bg-success">
                  In Stock ({product.stockQuantity})
                </span>
              ) : (
                <span className="badge bg-danger">Out of Stock</span>
              )}
              <span className="badge bg-secondary ms-2">
                {product.category}
              </span>
            </div>
            <h1 className="fw-bold display-5 mb-2">{product.name}</h1>
            <h2
              className="fw-bold mb-4"
              style={{ color: 'var(--wad-primary)' }}
            >
              ₹{product.price.toFixed(2)}
              <span className="fs-5 text-muted fw-normal"> / unit</span>
            </h2>
            <p className="lead text-muted mb-4">{product.description}</p>
            <div className="d-flex align-items-center gap-3 mb-4">
              <form className="d-flex gap-3 flex-grow-1">
                <div className="input-group" style={{ width: '140px' }}>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => {
                      const input = document.getElementById('qty');
                      if (input) input.stepDown();
                    }}
                  >
                    <i className="fa-solid fa-minus" />
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    id="qty"
                    className="form-control text-center"
                    defaultValue={1}
                    min={1}
                    max={product.stockQuantity}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => {
                      const input = document.getElementById('qty');
                      if (input) input.stepUp();
                    }}
                  >
                    <i className="fa-solid fa-plus" />
                  </button>
                </div>
                {inStock ? (
                  <button
                    type="button"
                    className="btn btn-primary btn-lg flex-grow-1 shadow-sm"
                    onClick={handleAddToCart}
                  >
                    <i className="fa-solid fa-cart-plus me-2" />
                    Add to Cart
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg flex-grow-1"
                    disabled
                  >
                    Out of Stock
                  </button>
                )}
              </form>
              <button
                type="button"
                className="btn btn-outline-danger btn-lg"
                title="Add to Wishlist"
              >
                <i className="fa-solid fa-heart" />
              </button>
            </div>
            <div className="border-top pt-4">
              <div className="row">
                <div className="col-6 mb-2">
                  <small className="text-muted fw-bold">BATCH NO</small>
                  <div className="fw-bold">QB-PROD-0001</div>
                </div>
                <div className="col-6 mb-2">
                  <small className="text-muted fw-bold">Origin</small>
                  <div className="fw-bold">Rajkot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;


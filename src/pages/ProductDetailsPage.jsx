import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ProductDetailsPage() {
  const product = {
    id: 1,
    name: 'Organic Apples',
    category: 'Fresh Produce',
    description:
      'Crisp, sweet organic apples sourced directly from local farms. These premium quality apples are hand-picked and carefully sorted to ensure you get the best freshness. Perfect for snacking, salads, or baking.',
    price: 199,
    stockQuantity: 25,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=600&fit=crop'
  };

  const inStock = product.stockQuantity > 0;
  const { addToCart } = useCart();

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
                    onClick={() => {
                      const qtyInput = document.getElementById('qty');
                      const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
                      addToCart(product, quantity);
                    }}
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
                  <small className="text-muted fw-bold">SKU</small>
                  <div className="fw-bold">QB-PROD-0001</div>
                </div>
                <div className="col-6 mb-2">
                  <small className="text-muted fw-bold">Origin</small>
                  <div className="fw-bold">Sourced Locally</div>
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


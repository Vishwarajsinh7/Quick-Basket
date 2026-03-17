import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div className="hero-box p-5 mb-5 text-center">
        <div className="py-4">
          <h1 className="display-4 fw-bold mb-3">Freshness Delivered.</h1>
          <p className="col-md-8 fs-4 mx-auto text-muted mb-4">
            Premium groceries, organic produce, and daily essentials delivered to your doorstep in under 60 minutes.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/catalog" className="btn btn-primary btn-lg px-5">
              <i className="fa-solid fa-basket-shopping me-2" /> Shop Now
            </Link>
            <Link to="/catalog" className="btn btn-outline-primary btn-lg px-4">
              <i className="fa-solid fa-percent me-2" /> View Deals
            </Link>
          </div>
        </div>
      </div>

      <div className="row align-items-stretch g-4">
        <div className="col-md-4">
          <div className="card h-100 text-center p-4">
            <div className="card-body">
              <div className="mb-3" style={{ color: 'var(--wad-accent)' }}>
                <i className="fa-solid fa-apple-whole fa-4x" />
              </div>
              <h3>Fresh Produce</h3>
              <p className="text-muted">
                Organic fruits and vegetables sourced directly from local farmers.
              </p>
              <Link
                to="/catalog?categoryId=1"
                className="btn btn-outline-primary mt-2 w-100"
              >
                Browse Fresh
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card h-100 text-center p-4"
            style={{ backgroundColor: 'var(--wad-primary)' }}
          >
            <div className="card-body">
              <div className="mb-3 text-warning">
                <i className="fa-solid fa-bread-slice fa-4x" />
              </div>
              <h3 className="text-white">Bakery</h3>
              <p className="text-white-50">
                Artisan bread, pastries, and cakes baked fresh every morning.
              </p>
              <Link
                to="/catalog?categoryId=2"
                className="btn btn-light text-primary fw-bold mt-2 w-100"
              >
                Browse Bakery
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center p-4">
            <div className="card-body">
              <div className="mb-3" style={{ color: 'var(--wad-accent)' }}>
                <i className="fa-solid fa-bottle-water fa-4x" />
              </div>
              <h3>Pantry</h3>
              <p className="text-muted">
                Essential staples, spices, and international ingredients for your kitchen.
              </p>
              <Link
                to="/catalog?categoryId=3"
                className="btn btn-outline-primary mt-2 w-100"
              >
                Browse Pantry
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div
            className="alert text-center py-4 border-0 shadow-sm"
            role="alert"
            style={{
              backgroundColor: 'var(--wad-accent)',
              color: 'white',
              borderRadius: 'var(--wad-radius)'
            }}
          >
            <h4 className="alert-heading fw-bold">
              <i className="fa-solid fa-truck-fast me-2" />
              Free Delivery on First Order!
            </h4>
            <p className="mb-0">
              Use code <strong>FRESH2026</strong> at checkout.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

import React from 'react';
import EmptyState from '../components/EmptyState';

// Simple mock data to render cards; replace with real API later.
const mockProducts = [
  {
    id: 1,
    name: 'Organic Apples',
    category: 'Fresh Produce',
    description: 'Crisp, sweet apples sourced from local farms.',
    price: 199,
    icon: 'fa-apple-whole'
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    category: 'Bakery & Dairy',
    description: 'Freshly baked whole wheat loaf.',
    price: 79,
    icon: 'fa-bread-slice'
  },
  {
    id: 3,
    name: 'Basmati Rice',
    category: 'Pantry Staples',
    description: 'Premium long-grain basmati rice.',
    price: 499,
    icon: 'fa-bowl-rice'
  }
];

function CatalogPage() {
  const hasProducts = mockProducts.length > 0;

  return (
    <div className="row mt-4">
      <div className="col-md-3 mb-4">
        <div className="card p-3 h-100 border-0 shadow-sm">
          <h5 className="fw-bold mb-3" style={{ color: 'var(--wad-primary)' }}>
            <i className="fa-solid fa-filter me-2" />
            Filters
          </h5>
          <div className="mb-4">
            <label className="form-label fw-bold small text-muted">
              CATEGORIES
            </label>
            <div className="list-group list-group-flush">
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center active fw-bold"
                style={{
                  backgroundColor: 'var(--wad-primary)',
                  borderColor: 'var(--wad-primary)'
                }}
              >
                All Products
                <span className="badge bg-light text-dark rounded-pill">
                  {mockProducts.length}
                </span>
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark"
              >
                Fresh Produce
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark"
              >
                Bakery &amp; Dairy
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark"
              >
                Pantry Staples
              </button>
            </div>
          </div>
          <form className="mb-3">
            <label className="form-label fw-bold small text-muted">
              MAX PRICE: ₹<span id="priceLabel">2000</span>
            </label>
            <input
              type="range"
              className="form-range"
              min="10"
              max="2000"
              step="10"
              defaultValue={2000}
              onInput={(e) => {
                const label = document.getElementById('priceLabel');
                if (label) label.innerText = e.target.value;
              }}
            />
            <button
              type="button"
              className="btn btn-sm btn-outline-primary w-100 mt-2"
            >
              Apply Price Filter
            </button>
          </form>
        </div>
      </div>

      <div className="col-md-9">
        <form className="card p-3 mb-4 d-flex flex-row align-items-center justify-content-between border-0 shadow-sm">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-white border-end-0 text-muted">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Search for paneer, spices..."
            />
            <button type="button" className="btn btn-outline-secondary">
              Search
            </button>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted small">Sort by:</span>
            <select
              className="form-select form-select-sm border-secondary"
              style={{ width: 'auto' }}
            >
              <option value="popularity">Popularity</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </form>

        {!hasProducts ? (
          <EmptyState />
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {mockProducts.map((item) => (
              <div className="col" key={item.id}>
                <div className="card h-100">
                  <a
                    href="/product"
                    className="text-decoration-none"
                  >
                    <div
                      className="d-flex align-items-center justify-content-center bg-light"
                      style={{
                        height: '200px',
                        color: 'var(--wad-accent)'
                      }}
                    >
                      <i className={`fa-solid ${item.icon} fa-4x`} />
                    </div>
                  </a>
                  <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                      <span className="badge bg-success">
                        {item.category}
                      </span>
                    </div>
                    <a
                      href="/product"
                      className="text-decoration-none"
                    >
                      <h5 className="card-title text-dark">{item.name}</h5>
                    </a>
                    <p className="card-text text-muted small">
                      {item.description}
                    </p>
                    <div className="mt-auto d-flex align-items-center justify-content-between">
                      <span
                        className="fs-5 fw-bold"
                        style={{ color: 'var(--wad-primary)' }}
                      >
                        ₹{item.price}
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm rounded-circle p-2 shadow-sm"
                        title="Add 1 to Cart"
                      >
                        <i className="fa-solid fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;


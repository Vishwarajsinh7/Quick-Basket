import React from 'react';
import { Link } from 'react-router-dom';

function EmptyState() {
  return (
    <div className="text-center py-5 my-5">
      <div className="mb-4 position-relative d-inline-block">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: 'var(--wad-bg)'
          }}
        >
          <i
            className="fa-solid fa-basket-shopping fa-4x"
            style={{ color: 'var(--wad-text)', opacity: 0.3 }}
          />
        </div>
        <div
          className="position-absolute top-0 end-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
          style={{ width: '40px', height: '40px' }}
        >
          <i className="fa-solid fa-question text-muted" />
        </div>
      </div>
      <h3 className="fw-bold mb-2">Your Basket is Empty</h3>
      <p
        className="text-muted mb-4 mx-auto"
        style={{ maxWidth: '400px' }}
      >
        Looks like you haven't added anything yet. Discover fresh produce and
        daily essentials in our catalog.
      </p>
      <Link
        to="/catalog"
        className="btn btn-primary btn-lg px-5 shadow-sm rounded-pill"
      >
        <i className="fa-solid fa-carrot me-2" />
        Start Shopping
      </Link>
    </div>
  );
}

export default EmptyState;


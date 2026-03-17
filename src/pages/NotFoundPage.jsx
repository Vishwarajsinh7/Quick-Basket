import React from 'react';

function NotFoundPage() {
  return (
    <div className="container text-center py-5 my-5">
      <div className="mb-4">
        <span className="fa-stack fa-4x">
          <i
            className="fa-solid fa-circle fa-stack-2x"
            style={{ color: 'var(--wad-bg)' }}
          />
          <i
            className="fa-solid fa-compass-slash fa-stack-1x"
            style={{ color: 'var(--wad-primary)' }}
          />
        </span>
      </div>
      <h1 className="fw-bold display-5 mb-3">Oops! Page Not Found.</h1>
      <p
        className="lead text-muted mb-5 mx-auto"
        style={{ maxWidth: '500px' }}
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <a href="/" className="btn btn-primary btn-lg px-4 shadow-sm">
          <i className="fa-solid fa-house me-2" />
          Go Home
        </a>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={() => window.history.back()}
        >
          <i className="fa-solid fa-arrow-left me-2" />
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;


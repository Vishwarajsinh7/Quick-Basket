import React from 'react';

function DeliveryLayout({ children }) {
  return (
    <>
      <header className="delivery-header p-3 shadow-sm d-flex justify-content-between align-items-center sticky-top">
        <h4 className="fw-bold mb-0 fs-5">
          <i className="fa-solid fa-motorcycle me-2" />
          Quick Basket{' '}
          <span className="text-muted fw-normal fs-6">| Driver App</span>
        </h4>
        <button className="btn btn-sm btn-outline-primary" type="button">
          Logout
        </button>
      </header>
      <main className="container py-4">{children}</main>
      <div
        className="toast-container position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 1060 }}
      >
        <div
          id="quickBasketToast"
          className="toast border-0 shadow"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div
            className="toast-header text-white"
            style={{ backgroundColor: 'var(--wad-primary)' }}
          >
            <i className="fa-solid fa-bell me-2" />
            <strong className="me-auto" id="toastTitle">
              Notification
            </strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body bg-white text-dark" id="toastMessage">
            Action completed successfully!
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryLayout;


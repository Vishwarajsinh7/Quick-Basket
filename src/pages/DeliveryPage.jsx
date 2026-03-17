import React from 'react';
import DeliveryLayout from '../layouts/DeliveryLayout';

function DeliveryPage() {
  return (
    <DeliveryLayout>
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-white fw-bold d-flex justify-content-between">
          <span>Order: #QB-2026-8858</span>
          <span>
            Payment: <span className="badge bg-success">PAID</span>
          </span>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <div className="small text-muted">CUSTOMER</div>
            <div className="fs-5 fw-bold">Priya Singh</div>
          </div>
          <div className="mb-3">
            <div className="small text-muted">DELIVER TO</div>
            <div className="fs-5 fw-bold">
              A-1203, Oberoi Gardens, Kandivali East, Mumbai - 400101
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-lg shadow-sm" type="button">
              <i className="fa-solid fa-location-crosshairs me-2" />
              Open in Maps
            </button>
          </div>
        </div>
        <div className="card-footer bg-white d-grid">
          <button
            className="btn btn-lg text-white"
            style={{ backgroundColor: 'var(--wad-accent)' }}
            type="button"
          >
            <i className="fa-solid fa-box-check me-2" />
            Mark as Delivered
          </button>
        </div>
      </div>
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-white fw-bold d-flex justify-content-between">
          <span>Order: #QB-2026-8857</span>
          <span>
            Payment:{' '}
            <span className="badge bg-warning text-dark">
              COD: ₹610.50
            </span>
          </span>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <div className="small text-muted">CUSTOMER</div>
            <div className="fs-5 fw-bold">Rohan Mehta</div>
          </div>
          <div className="mb-3">
            <div className="small text-muted">DELIVER TO</div>
            <div className="fs-5 fw-bold">
              #45, 5th Main, Koramangala, Bangalore - 560034
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-lg shadow-sm" type="button">
              <i className="fa-solid fa-location-crosshairs me-2" />
              Open in Maps
            </button>
          </div>
        </div>
        <div className="card-footer bg-white d-grid">
          <button
            className="btn btn-info btn-lg text-dark"
            type="button"
          >
            <i className="fa-solid fa-people-carry-box me-2" />
            Mark as Picked Up
          </button>
        </div>
      </div>
    </DeliveryLayout>
  );
}

export default DeliveryPage;


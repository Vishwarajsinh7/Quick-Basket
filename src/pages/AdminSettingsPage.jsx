import React from 'react';

function AdminSettingsPage() {
  return (
      <div className="container mt-4">
        <div className="mb-4">
          <h2 className="fw-bold m-0">Store Settings</h2>
          <p className="text-muted small">
            Manage your platform&apos;s global configuration and business rules.
          </p>
        </div>
        <form>
          <div className="row g-4">
            <div className="col-md-8">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white py-3 fw-bold">
                  <i
                    className="fa-solid fa-store me-2"
                    style={{ color: 'var(--wad-primary)' }}
                  />
                  General Information
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <label className="form-label fw-bold small text-muted">
                        StoreName
                      </label>
                      <input className="form-control" defaultValue="Quick Basket" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small text-muted">
                        SupportEmail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="care@quickbasket.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small text-muted">
                        SupportPhone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        defaultValue="+91 1800-456-789"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3 fw-bold">
                  <i
                    className="fa-solid fa-file-invoice-dollar me-2"
                    style={{ color: 'var(--wad-primary)' }}
                  />
                  Tax &amp; Currency
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label fw-bold small text-muted">
                        CURRENCY SYMBOL
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value="₹ (INR)"
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-bold small text-muted">
                        GstPercentage
                      </label>
                      <div className="input-group">
                        <input
                          type="number"
                          step="0.01"
                          className="form-control"
                          defaultValue={5}
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-bold small text-muted">
                        ServiceCharge
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="number"
                          step="0.01"
                          className="form-control"
                          defaultValue={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white py-3 fw-bold">
                  Store Logo
                </div>
                <div className="card-body text-center">
                  <div className="bg-light rounded p-4 mb-3 d-inline-block">
                    <i
                      className="fa-solid fa-basket-shopping fa-4x text-primary"
                      style={{ color: 'var(--wad-primary)' }}
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Update Logo
                    </button>
                  </div>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3 fw-bold">
                  Delivery Settings
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label fw-bold small text-muted">
                      FreeDeliveryThreshold
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">₹</span>
                      <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        defaultValue={499}
                      />
                    </div>
                  </div>
                  <div className="form-check form-switch mt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                      id="allowCod"
                    />
                    <label
                      className="form-check-label fw-bold small"
                      htmlFor="allowCod"
                    >
                      AllowCod
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-primary px-5 shadow-sm py-2"
            >
              <i className="fa-solid fa-floppy-disk me-2" />
              Save All Settings
            </button>
          </div>
        </form>
      </div>
  );
}

export default AdminSettingsPage;


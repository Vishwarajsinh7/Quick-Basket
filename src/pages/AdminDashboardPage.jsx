  import React from 'react';
  import AdminLayout from '../layouts/AdminLayout';

  function AdminDashboardPage() {
    return (
      <AdminLayout>
        <div className="container mt-4">
          <h2 className="fw-bold mb-4">Admin Dashboard</h2>
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card h-100 p-3 shadow-sm border-0">
                <div className="d-flex align-items-center">
                  <div className="bg-light p-3 rounded-3 me-3">
                    <i
                      className="fa-solid fa-indian-rupee-sign fa-2x"
                      style={{ color: 'var(--wad-primary)' }}
                    />
                  </div>
                  <div>
                    <div className="small text-muted">Total Revenue</div>
                    <h4 className="fw-bold mb-0">₹2,45,000.00</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 p-3 shadow-sm border-0">
                <div className="d-flex align-items-center">
                  <div className="bg-light p-3 rounded-3 me-3">
                    <i
                      className="fa-solid fa-box-open fa-2x"
                      style={{ color: 'var(--wad-primary)' }}
                    />
                  </div>
                  <div>
                    <div className="small text-muted">Total Orders</div>
                    <h4 className="fw-bold mb-0">320</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 p-3 shadow-sm border-0">
                <div className="d-flex align-items-center">
                  <div className="bg-light p-3 rounded-3 me-3">
                    <i
                      className="fa-solid fa-users fa-2x"
                      style={{ color: 'var(--wad-primary)' }}
                    />
                  </div>
                  <div>
                    <div className="small text-muted">Total Users</div>
                    <h4 className="fw-bold mb-0">1,120</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 p-3 shadow-sm border-0">
                <div className="d-flex align-items-center">
                  <div className="bg-light p-3 rounded-3 me-3">
                    <i
                      className="fa-solid fa-truck-fast fa-2x"
                      style={{ color: 'var(--wad-primary)' }}
                    />
                  </div>
                  <div>
                    <div className="small text-muted">Pending Deliveries</div>
                    <h4 className="fw-bold mb-0">18</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-8">
              <div className="card h-100 p-3 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Sales Over Time</h5>
                  <div
                    className="bg-light rounded"
                    style={{ height: '260px' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-3 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Top Categories</h5>
                  <div
                    className="bg-light rounded"
                    style={{ height: '260px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  export default AdminDashboardPage;


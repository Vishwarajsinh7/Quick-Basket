import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const mockProducts = [
  {
    id: 1,
    name: 'Organic Apples',
    category: 'Fresh Produce',
    price: 199,
    stock: 25,
    icon: 'fa-apple-whole'
  }
];

function AdminProductsPage() {
  const hasProducts = mockProducts.length > 0;

  return (
    <AdminLayout>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">Product Management</h2>
          <button className="btn btn-primary shadow-sm" type="button">
            <i className="fa-solid fa-plus me-2" />
            Add New Product
          </button>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="ps-4" style={{ width: '10%' }}>
                    Image
                  </th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col" className="text-end pe-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {!hasProducts ? (
                  <tr>
                    <td colSpan={6} className="text-center py-5 text-muted">
                      <i className="fa-solid fa-inbox fa-3x mb-3 opacity-25" />
                      <p>No products found in the database.</p>
                    </td>
                  </tr>
                ) : (
                  mockProducts.map((item) => (
                    <tr key={item.id}>
                      <td className="ps-4">
                        <div
                          className="bg-light rounded d-flex align-items-center justify-content-center"
                          style={{
                            width: '50px',
                            height: '50px',
                            color: 'var(--wad-accent)'
                          }}
                        >
                          <i className={`fa-solid ${item.icon} fa-2x`} />
                        </div>
                      </td>
                      <td>
                        <div className="fw-bold text-dark">{item.name}</div>
                        <div className="small text-muted">
                          ID: #{item.id.toString().padStart(4, '0')}
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-light text-dark border">
                          {item.category}
                        </span>
                      </td>
                      <td className="fw-bold text-dark">
                        ₹{item.price.toFixed(2)}
                      </td>
                      <td>
                        <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3">
                          In Stock ({item.stock})
                        </span>
                      </td>
                      <td className="text-end pe-4">
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-light border"
                            type="button"
                            data-bs-toggle="dropdown"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                            <li>
                              <button className="dropdown-item py-2" type="button">
                                <i className="fa-solid fa-pen-to-square me-2 opacity-75" />
                                Edit Details
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <button
                                className="dropdown-item py-2 text-danger"
                                type="button"
                              >
                                <i className="fa-solid fa-trash-can me-2 opacity-75" />
                                Delete Product
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminProductsPage;


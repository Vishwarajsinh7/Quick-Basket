import React from 'react';

const mockUsers = [
  {
    id: 'abcd1234',
    name: 'user@example.com',
    email: 'user@example.com',
    status: 'Active'
  }
];

function AdminUsersPage() {
  const hasUsers = mockUsers.length > 0;

  return (
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">User Management</h2>
          <button className="btn btn-primary shadow-sm" type="button">
            <i className="fa-solid fa-user-plus me-2" />
            Add Staff Account
          </button>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="ps-4">
                    User Details
                  </th>
                  <th scope="col">User ID</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="text-end pe-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {!hasUsers ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center py-5 text-muted"
                    >
                      No registered users found.
                    </td>
                  </tr>
                ) : (
                  mockUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="ps-4">
                        <div className="d-flex align-items-center">
                          <div
                            className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ width: '40px', height: '40px' }}
                          >
                            <i
                              className="fa-solid fa-user"
                              style={{ color: 'var(--wad-primary)' }}
                            />
                          </div>
                          <div>
                            <div className="fw-bold text-dark">
                              {user.name}
                            </div>
                            <div className="small text-muted">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <code className="small text-muted">
                          {user.id}...
                        </code>
                      </td>
                      <td>
                        {user.status === 'Active' ? (
                          <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3">
                            Active
                          </span>
                        ) : (
                          <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25 px-3">
                            Blocked
                          </span>
                        )}
                      </td>
                      <td className="text-end pe-4">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                        >
                          Block
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default AdminUsersPage;


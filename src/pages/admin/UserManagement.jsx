import React from 'react';
import { Search, MoreVertical } from 'lucide-react';
import './Admin.css';

const MOCK_USERS = [
  { id: "USR-101", name: "John Doe", email: "john@example.com", role: "Customer", joinDate: "Jan 12, 2023", status: "Active" },
  { id: "USR-102", name: "Sarah Jenkins", email: "sarah@example.com", role: "Customer", joinDate: "Feb 05, 2023", status: "Active" },
  { id: "USR-103", name: "Admin Manager", email: "admin@quickbasket.com", role: "Admin", joinDate: "Jan 01, 2023", status: "Active" },
  { id: "USR-104", name: "Michael Brown", email: "mike@example.com", role: "Customer", joinDate: "Mar 10, 2023", status: "Inactive" },
];

const UserManagement = () => {
  return (
    <div className="admin-page">
      <div className="admin-header-row">
        <h1 className="admin-title">User Management</h1>
        <p className="admin-subtitle">View and manage system users and customers.</p>
      </div>

      <div className="admin-toolbar">
        <div className="admin-search">
          <Search size={16} className="admin-search-icon" />
          <input type="text" placeholder="Search users by name or email..." />
        </div>
      </div>

      <div className="admin-card">
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {MOCK_USERS.map((user, i) => (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td><strong>{user.name}</strong></td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`badge ${user.role === 'Admin' ? 'warning' : 'pending'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                  <td>
                    <span className={`badge ${user.status === 'Active' ? 'success' : 'danger'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-icon-btn"><MoreVertical size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

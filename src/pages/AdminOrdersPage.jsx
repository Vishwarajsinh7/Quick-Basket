import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const mockMessages = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Order not delivered',
    message: 'Hi, my order has not been delivered yet.',
    createdAt: '12 Mar 2026, 15:20',
    isRead: false
  }
];

function AdminMessagesPage() {
  const hasMessages = mockMessages.length > 0;
  const unreadCount = mockMessages.filter((m) => !m.isRead).length;

  return (
    <AdminLayout>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">Customer Inquiries</h2>
          <span className="badge bg-primary rounded-pill fs-6 px-3 py-2">
            {unreadCount} Unread
          </span>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="accordion accordion-flush" id="messagesAccordion">
              {!hasMessages ? (
                <div className="text-center py-5 text-muted">
                  <i className="fa-solid fa-inbox fa-3x mb-3 opacity-25" />
                  <p>No messages found.</p>
                </div>
              ) : (
                mockMessages.map((msg, index) => {
                  const collapseId = `collapse${index}`;
                  const headingId = `heading${index}`;
                  return (
                    <div
                      className="accordion-item border-bottom"
                      key={msg.id}
                    >
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className={
                            'accordion-button collapsed ' +
                            (msg.isRead
                              ? 'bg-light text-muted'
                              : 'fw-bold')
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded="false"
                          aria-controls={collapseId}
                        >
                          <div className="d-flex w-100 justify-content-between align-items-center me-3">
                            <div>
                              {!msg.isRead && (
                                <span className="badge bg-danger me-2">
                                  NEW
                                </span>
                              )}
                              {msg.subject}
                            </div>
                            <div className="text-end small">
                              <span className="d-block">{msg.name}</span>
                              <span
                                className="text-muted"
                                style={{ fontSize: '0.8em' }}
                              >
                                {msg.createdAt}
                              </span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className="accordion-collapse collapse"
                        aria-labelledby={headingId}
                        data-bs-parent="#messagesAccordion"
                      >
                        <div className="accordion-body bg-white p-4">
                          <div className="mb-3 pb-3 border-bottom">
                            <span className="text-muted small fw-bold">
                              FROM:
                            </span>{' '}
                            {msg.name} &lt;{msg.email}&gt;
                          </div>
                          <p className="mb-4" style={{ whiteSpace: 'pre-wrap' }}>
                            {msg.message}
                          </p>
                          <div className="d-flex justify-content-end gap-2">
                            <a
                              href={`mailto:${msg.email}`}
                              className="btn btn-outline-primary btn-sm"
                            >
                              <i className="fa-solid fa-reply me-1" />
                              Reply via Email
                            </a>
                            {!msg.isRead && (
                              <button
                                type="button"
                                className="btn btn-success btn-sm text-white"
                              >
                                <i className="fa-solid fa-check-double me-1" />
                                Mark as Read
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminMessagesPage;


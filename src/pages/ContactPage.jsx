import React from 'react';

function ContactPage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row g-5">
        <div className="col-md-5">
          <h1
            className="fw-bold mb-4"
            style={{ color: 'var(--wad-primary)' }}
          >
            Get in Touch
          </h1>
          <p className="text-muted lead mb-5">
            Have a question about your order, our products, or just want to say
            hello? We'd love to hear from you.
          </p>
          <div className="d-flex mb-4">
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
              style={{
                width: '50px',
                height: '50px',
                color: 'var(--wad-primary)'
              }}
            >
              <i className="fa-solid fa-location-dot fa-lg" />
            </div>
            <div>
              <h5 className="fw-bold mb-1">Our Office</h5>
              <p className="text-muted mb-0">
                123 Market Street, Tech Park
                <br />
                Rajkot-360005, Gujarat
              </p>
            </div>
          </div>
          <div className="d-flex mb-4">
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
              style={{
                width: '50px',
                height: '50px',
                color: 'var(--wad-primary)'
              }}
            >
              <i className="fa-solid fa-phone fa-lg" />
            </div>
            <div>
              <h5 className="fw-bold mb-1">Call Us</h5>
              <p className="text-muted mb-0">
                +911800-456-789
                <br />
                <small>Mon-Sat, 9am to 6pm</small>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
              style={{
                width: '50px',
                height: '50px',
                color: 'var(--wad-primary)'
              }}
            >
              <i className="fa-solid fa-envelope fa-lg" />
            </div>
            <div>
              <h5 className="fw-bold mb-1">Email Us</h5>
              <p className="text-muted mb-0">care@quickbasket.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div
            className="card border-0 shadow-lg p-4 p-md-5"
            style={{ borderRadius: 'var(--wad-radius)' }}
          >
            <h3 className="fw-bold mb-4">Send a Message</h3>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">
                    YOUR NAME
                  </label>
                  <input
                    className="form-control bg-light border-0"
                    placeholder="Vishwaraj"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    className="form-control bg-light border-0"
                    placeholder="vishwaraj@example.com"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold text-muted">
                    SUBJECT
                  </label>
                  <input
                    className="form-control bg-light border-0"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold text-muted">
                    MESSAGE
                  </label>
                  <textarea
                    className="form-control bg-light border-0"
                    rows={5}
                    placeholder="Write your message here..."
                  />
                </div>
                <div className="col-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg w-100 shadow-sm"
                  >
                    <i className="fa-solid fa-paper-plane me-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;


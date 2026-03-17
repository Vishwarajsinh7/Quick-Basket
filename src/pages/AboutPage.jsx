import React from 'react';

function AboutPage() {
  return (
    <>
      <div
        className="p-5 mb-5 rounded-3 text-center"
        style={{
          backgroundColor: 'var(--wad-surface)',
          border: '2px solid var(--wad-primary)'
        }}
      >
        <div className="container-fluid py-4">
          <i
            className="fa-solid fa-leaf fa-4x mb-3"
            style={{ color: 'var(--wad-accent)' }}
          />
          <h1
            className="display-5 fw-bold mb-3"
            style={{ color: 'var(--wad-primary)' }}
          >
            Our Story
          </h1>
          <p className="col-md-8 fs-5 mx-auto text-muted">
            Quick Basket was founded with a simple mission: to bring the
            freshest, highest-quality groceries directly to your doorstep,
            faster than ever before.
          </p>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Farm to Table, Redefined.</h2>
            <p className="text-muted lead">
              We believe that everyone deserves access to fresh, nutritious
              food. That's why we partner directly with local farmers and
              trusted suppliers to bypass the traditional supply chain.
            </p>
            <p className="text-muted">
              By cutting out the middlemen, we ensure that our produce spends
              less time in transit and more time on your table. Our
              state-of-the-art logistics network guarantees delivery within 60
              minutes, preserving the natural goodness of every item.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row g-4">
              <div className="col-6">
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <i
                    className="fa-solid fa-tractor fa-3x mb-3"
                    style={{ color: 'var(--wad-primary)' }}
                  />
                  <h5 className="fw-bold">Local Sourcing</h5>
                  <p className="small text-muted mb-0">
                    Supporting local agriculture.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <i
                    className="fa-solid fa-bolt fa-3x mb-3"
                    style={{ color: 'var(--wad-accent)' }}
                  />
                  <h5 className="fw-bold">Fast Delivery</h5>
                  <p className="small text-muted mb-0">
                    From store to door in 60 mins.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <i
                    className="fa-solid fa-shield-halved fa-3x mb-3"
                    style={{ color: 'var(--wad-text)' }}
                  />
                  <h5 className="fw-bold">Quality Assured</h5>
                  <p className="small text-muted mb-0">
                    Rigorous quality checks.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <i
                    className="fa-solid fa-leaf fa-3x mb-3"
                    style={{ color: 'var(--wad-primary)' }}
                  />
                  <h5 className="fw-bold">Eco-Friendly</h5>
                  <p className="small text-muted mb-0">
                    Sustainable packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;


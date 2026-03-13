import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      {product.tag && <span className="tag">{product.tag}</span>}

      <div className="product-icon">
        
      </div>

      <h4>{product.name}</h4>

      <p className="price">${product.price}</p>

      <button className="add-btn">+</button>

    </div>
  );
}
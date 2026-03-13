import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {product?.isVegan && (
        <div className="product-vegan-badge">VEGAN</div>
      )}
      <Link to={`/product/${product?.id || 1}`} className="product-image-link">
        <div className="product-image">
          {product?.emoji || '📦'}
        </div>
      </Link>
      <div className="product-details">
        <Link to={`/product/${product?.id || 1}`} className="product-title-link">
          <h3 className="product-title">{product?.name || 'Product Item'}</h3>
        </Link>
        {product?.description && (
          <p className="product-description">{product.description}</p>
        )}
        
        <div className="product-action-row">
          <div className="product-price">
            ₹{product?.price || '0'} <span className="product-unit-price">/ {product?.unit || 'kg'}</span>
          </div>
          <button className="add-to-cart-btn-circle" title="Add to Cart">
            <Plus size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

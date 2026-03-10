import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product?.id || 1}`} className="product-image-link">
        <div className="product-image">
          {product?.emoji || '📦'}
        </div>
      </Link>
      <div className="product-details">
        <Link to={`/product/${product?.id || 1}`} className="product-title-link">
          <h3 className="product-title">{product?.name || 'Product Item'}</h3>
        </Link>
        <p className="product-unit">1 {product?.unit || 'kg'}</p>
        
        <div className="product-action-row">
          <div className="product-price">
            ₹{product?.price || '0.00'}
          </div>
          <button className="add-to-cart-btn" title="Add to Cart">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

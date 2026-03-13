import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import './User.css';

const MOCK_WISHLIST = [
  { id: 1, name: "Organic Crisp Apples", category: "Fruits", price: 120, emoji: "🍎", unit: "kg" },
  { id: 4, name: "Whole Wheat Bread", category: "Bakery", price: 60, emoji: "🍞", unit: "pack" },
  { id: 8, name: "Premium Milk", category: "Dairy", price: 70, emoji: "🥛", unit: "liter" },
];

const Wishlist = () => {
  return (
    <div className="user-page">
      <div className="container py-8">
        <div className="user-layout">
          
          <aside className="user-sidebar">
            <div className="user-info-brief">
              <div className="user-avatar-large">Aa</div>
              <div className="user-welcome-text">
                <h3>Aarav Sharma</h3>
                <p>Member since Jan 2024</p>
              </div>
            </div>
            <nav className="user-nav">
              <Link to="/profile">My Profile</Link>
              <Link to="/orders">Order History</Link>
              <Link to="/wishlist" className="active">Wishlist</Link>
              <Link to="/login" className="text-danger">Log Out</Link>
            </nav>
          </aside>

          <div className="user-content-area">
            <div className="content-card">
              <h2>My Wishlist</h2>
              <p className="text-secondary mb-4">You have {MOCK_WISHLIST.length} items saved</p>
              
              <div className="wishlist-grid">
                {MOCK_WISHLIST.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wishlist;

import { Link, useNavigate } from "react-router-dom";
import { FaBox, FaUsers, FaCog, FaClipboardList, FaChartLine, FaEnvelope } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const { adminLogout } = useAuth();

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login");
  };

  return (
    <div className="w-64 bg-[#8B2C1C] text-white flex flex-col justify-between p-4">
      
      <div>
        <h2 className="text-lg mb-6">Admin Panel</h2>

        <ul className="space-y-4">
          <li>
            <Link to="/admin/dashboard" className="flex items-center gap-2 bg-[#f5efe6] text-black p-2 rounded">
              <FaChartLine /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="flex items-center gap-2 hover:bg-[#f5efe6] hover:text-black p-2 rounded transition-colors">
              <FaClipboardList /> Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="flex items-center gap-2 hover:bg-[#f5efe6] hover:text-black p-2 rounded transition-colors">
              <FaBox /> Products
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="flex items-center gap-2 hover:bg-[#f5efe6] hover:text-black p-2 rounded transition-colors">
              <FaUsers /> Users
            </Link>
          </li>
          <li>
            <Link to="/admin/messages" className="flex items-center gap-2 hover:bg-[#f5efe6] hover:text-black p-2 rounded transition-colors">
              <FaEnvelope /> Messages
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className="flex items-center gap-2 hover:bg-[#f5efe6] hover:text-black p-2 rounded transition-colors">
              <FaCog /> Settings
            </Link>
          </li>
        </ul>
      </div>

      <button 
        onClick={handleLogout}
        className="border p-2 rounded hover:bg-[#f5efe6] hover:text-black transition-colors"
      >
        Logout
      </button>
    </div>
  );
}

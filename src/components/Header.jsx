import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, adminLogout } = useAuth();

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login");
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#8B2C1C]">
        Admin Dashboard
      </h1>

      {user ? (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
            <div className="bg-[#8B2C1C] text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
              {user.name?.charAt(0)}
            </div>
            <span>{user.name}</span>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/admin/login")}
          className="bg-[#8B2C1C] text-white px-4 py-1 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
}

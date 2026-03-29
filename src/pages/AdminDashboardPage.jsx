import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";
import OrdersTable from "../components/OrdersTable";

import { FaRupeeSign, FaShoppingCart, FaUsers, FaTruck } from "react-icons/fa";

export default function AdminDashboard() {
  return (
    <div className="flex bg-[#2b2b2b] min-h-screen">
      
      

      <div className="flex-1 p-6 bg-[#f5efe6] rounded-l-2xl">


        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <StatCard icon={<FaRupeeSign />} title="Total Revenue" value="₹8,52,450" />
          <StatCard icon={<FaShoppingCart />} title="Total Orders" value="1,245" />
          <StatCard icon={<FaUsers />} title="New Customers" value="82" />
          <StatCard icon={<FaTruck />} title="Pending Deliveries" value="16" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-2 bg-white p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
            <SalesChart />
          </div>

          <div className="bg-white p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Top Categories</h2>
            <CategoryChart />
          </div>
        </div>

        {/* Orders */}
        <div className="mt-6 bg-white p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <OrdersTable />
        </div>

      </div>
    </div>
  );
}
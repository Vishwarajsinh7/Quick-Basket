import { FaBox, FaClipboardList, FaUsers, FaCog } from "react-icons/fa";

export default function AdminOrdersPage() {
  const orders = [
    {
      id: "#QB-2026-8859",
      customer: "Aarav Sharma",
      date: "15 Feb, 2026",
      total: "₹330.75",
      status: "Delivered",
    },
    {
      id: "#QB-2026-8858",
      customer: "Priya Singh",
      date: "15 Feb, 2026",
      total: "₹1,250.00",
      status: "Out for Delivery",
    },
    {
      id: "#QB-2026-8857",
      customer: "Rohan Mehta",
      date: "14 Feb, 2026",
      total: "₹610.50",
      status: "Processing",
    },
    {
      id: "#QB-2026-8856",
      customer: "Anika Desai",
      date: "14 Feb, 2026",
      total: "₹2,100.00",
      status: "Delivered",
    },
    {
      id: "#QB-2026-8855",
      customer: "Vikram Patil",
      date: "13 Feb, 2026",
      total: "₹880.00",
      status: "Cancelled",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-[#8B2C1C] text-white";
      case "Out for Delivery":
        return "bg-[#E3A008] text-white";
      case "Processing":
        return "bg-[#00A3A3] text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#2e2e2e]">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-[#8B2C1C] text-white flex flex-col justify-between p-4">
        <div>
          <div className="flex flex-col items-center mb-8">
            <div className="text-3xl mb-2">📦</div>
            <h2 className="text-sm tracking-wide">ADMIN PANEL</h2>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="opacity-80">Dashboard</li>
            <li className="bg-[#f5efe6] text-black px-3 py-2 rounded">Orders</li>
            <li className="opacity-80">Products</li>
            <li className="opacity-80">Users</li>
            <li className="opacity-80">Settings</li>
          </ul>
        </div>

        <button className="border border-white rounded px-3 py-2 text-sm">
          ⬅ Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 bg-[#f5efe6] p-8 rounded-l-2xl">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-[#8B2C1C]">
            Order Management
          </h1>

          <button className="bg-[#8B2C1C] text-white px-4 py-2 rounded-md text-sm">
            + New Order
          </button>
        </div>

        {/* TABLE CARD */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          
          {/* TABLE HEADER */}
          <div className="grid grid-cols-5 text-gray-500 text-sm font-medium pb-3 border-b">
            <span>ORDER ID</span>
            <span>CUSTOMER</span>
            <span>DATE</span>
            <span>TOTAL</span>
            <span>STATUS</span>
          </div>

          {/* TABLE ROWS */}
          {orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center py-4 border-b text-sm"
            >
              <span className="font-medium">{order.id}</span>
              <span>{order.customer}</span>
              <span className="text-gray-500">{order.date}</span>
              <span>{order.total}</span>

              <span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    order.status
                  )}`}
                >
                  {order.status.toUpperCase()}
                </span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
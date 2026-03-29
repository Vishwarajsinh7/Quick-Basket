export default function OrdersTable() {
  const orders = [
    { id: "#QB-4521", name: "Sarah Jenkins", status: "Delivered", amount: "₹1,250" },
    { id: "#QB-4520", name: "Michael Scott", status: "Processing", amount: "₹3,420" },
    { id: "#QB-4519", name: "Emma Wilson", status: "Shipped", amount: "₹890" },
  ];

  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-gray-500">
          <th>Order ID</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((o, i) => (
          <tr key={i} className="border-t">
            <td>{o.id}</td>
            <td>{o.name}</td>
            <td>
              <span className="px-2 py-1 rounded bg-gray-200 text-sm">
                {o.status}
              </span>
            </td>
            <td>{o.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
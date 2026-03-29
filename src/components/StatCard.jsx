export default function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl flex items-center gap-3">
      <div className="text-[#8B2C1C] text-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="font-bold">{value}</h3>
      </div>
    </div>
  );
}
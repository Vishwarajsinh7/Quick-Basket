import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", sales: 10000 },
  { day: "Tue", sales: 15000 },
  { day: "Wed", sales: 8000 },
  { day: "Thu", sales: 12000 },
  { day: "Fri", sales: 16000 },
  { day: "Sat", sales: 22000 },
  { day: "Sun", sales: 19000 },
];

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#8B2C1C" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
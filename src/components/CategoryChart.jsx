import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Fresh Produce", value: 55 },
  { name: "Pantry", value: 30 },
  { name: "Bakery & Dairy", value: 15 },
];

const COLORS = ["#8B2C1C", "#C89B3C", "#444"];

export default function CategoryChart() {
  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={90}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
}
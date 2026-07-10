import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../styles/PerformanceChart.css";

const data = [
  {
    assessment: "Test 1",
    reading: 65,
    writing: 60,
  },
  {
    assessment: "Test 2",
    reading: 72,
    writing: 67,
  },
  {
    assessment: "Test 3",
    reading: 78,
    writing: 75,
  },
  {
    assessment: "Test 4",
    reading: 88,
    writing: 84,
  },
];

function PerformanceChart() {
  return (
    <div className="chart-card">

      <h2>Performance Analytics</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="assessment" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="reading"
            stroke="#2563eb"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="writing"
            stroke="#10b981"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PerformanceChart;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Week 1",
    Guest: 4000,
    User: 2400,
    pa: 0

  },
  {
    name: "Week 2",
    Guest: 3000,
    User: 1398,
    pa: 0
  },
  {
    name: "Week 3",
    Guest: 2000,
    User: 9800,
    pa: 0
  },
  {
    name: "Week 4",
    Guest: 2780,
    User: 3908,
    pa: 0
  }
];

export default function Chart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Guest" fill="#00aa41" />
      <Bar dataKey="User" fill="#b9533a" />
      <Bar dataKey="pa" fill="#ffffff" />
     
   
    </BarChart>
  );
}

"use client";

import Image from "next/image";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
].map(month => ({
  name: month,
  income: Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000,
  expense: Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000,
}));

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          Students
        </h1>

        <Image
          src={"/moreDark.png"}
          alt="dark"
          width={20}
          height={20}
        />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#D1D5DB" }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#D1D5DB" }}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "lightgray"
            }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
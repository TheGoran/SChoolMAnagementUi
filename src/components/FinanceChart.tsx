"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define the shape of the data item
interface DataItem {
  name: string;
  income: number;
  expenses: number;
  profit?: number; // Profit is calculated
}

// Sample data
const data: DataItem[] = [
  { name: "January", income: 5000, expenses: 1000 },
  { name: "February", income: 5000, expenses: 1000 },
  { name: "March", income: 56500, expenses: 10500 },
  { name: "April", income: 50001, expenses: 10252 },
  { name: "May", income: 5000, expenses: 1000 },
  { name: "June", income: 5000, expenses: 1000 },
  { name: "July", income: 50650, expenses: 100 },
  { name: "August", income: 55100, expenses: 10510 },
  { name: "September", income: 50500, expenses: 15100 },
  { name: "October", income: 90100, expenses: 36500 },
  { name: "November", income: 50000, expenses: 11290 },
  { name: "December", income: 51000, expenses: 91000 },
];

// Adding Profit Field into each object of the data array
const processedData = data.map((item) => ({
  ...item,
  profit: item.income - item.expenses,
}));

// Define color mapping for labels and values
const colorMapLabels: Record<string, string> = {
  income: "gray", // Color for income label
  expenses: "gray", // Color for expenses label
  profit: "gray", // Color for profit label
};

const colorMapValues: Record<string, string> = {
  income: "pink", // Color for income value
  expenses: "red", // Color for expenses value
  profit: "green", // Color for profit value
};

// Define text size for each key (income, expenses, profit)
const mapTextSize: Record<string, string> = {
  income: "text-sm", // Small text for income
  expenses: "text-sm", // Small text for expenses
  profit: "text-4xl", // Large text for profit
};

// Define the tooltip props interface
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

// Custom Tooltip Component
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Extract first data entry from the payload
    const entry = payload[0].payload;

    return (
      <div className="bg-black border border-red-600 rounded p-3 shadow">
        {/* Tooltip title */}
        <p className="text-white text-4xl font-bold">{label}</p>
        {/* Display each data field dynamically */}
        {Object.keys(entry)
          .filter((key) => key !== "name") // Exclude the 'name' field
          .map((key, index) => (
            <p key={index} className="text-white">
              {/* Apply color to labels */}
              <span
                className="font-semibold"
                style={{ color: colorMapLabels[key] || "white" }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </span>{" "}
              {/* Apply color and size to values */}
              <span
                className={`font-bold ${mapTextSize[key] || "text-2xl"}`} // Dynamically apply text size
                style={{ color: colorMapValues[key] || "white" }}
              >
                {entry[key]}
              </span>
            </p>
          ))}
      </div>
    );
  }
  return null;
};

// Rendering the Chart
const FinanceChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}></Image>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={processedData} // Passing the calculated data
          width={500}
          height={300}
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
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {/* Lines for Income, Expenses, and Profit */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#82ca9d"
            name="Expenses"
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#ff7300"
            name="Profit"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Q1", target: 250, achieved: 210 },
  { name: "Q2", target: 300, achieved: 280 },
  { name: "Q3", target: 350, achieved: 310 },
  { name: "Q4", target: 400, achieved: 320 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3 border rounded shadow-sm">
        <p className="label font-medium">{`${label} 2023-24`}</p>
        <p className="text-sm text-blue-600">{`Target: ${payload[0].value} homes`}</p>
        <p className="text-sm text-green-600">{`Achieved: ${payload[1].value} homes`}</p>
      </div>
    );
  }
  return null;
};

const ProgressTracking = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Implementation Progress</CardTitle>
        <CardDescription>Quarterly target vs. achievement of housing construction</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="target" fill="#1e3a8a" name="Target" />
              <Bar dataKey="achieved" fill="#16a34a" name="Achieved" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracking;

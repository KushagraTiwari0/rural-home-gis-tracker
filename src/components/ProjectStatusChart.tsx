
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Completed", value: 480, color: "#16a34a" },
  { name: "In Progress", value: 650, color: "#1e3a8a" },
  { name: "Planning", value: 320, color: "#ea580c" },
  { name: "Delayed", value: 90, color: "#dc2626" }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3 border rounded shadow-sm">
        <p className="font-medium">{`${payload[0].name}: ${payload[0].value} homes`}</p>
      </div>
    );
  }
  return null;
};

const ProjectStatusChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Housing Projects Status</CardTitle>
        <CardDescription>
          Current status of housing projects under Garib Awas Yojana
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: 20 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectStatusChart;

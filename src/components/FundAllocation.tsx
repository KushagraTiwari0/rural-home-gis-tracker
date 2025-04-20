
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface FundCategoryProps {
  title: string;
  allocated: number;
  utilized: number;
  color: string;
}

const FundCategory = ({ title, allocated, utilized, color }: FundCategoryProps) => {
  const percentage = Math.round((utilized / allocated) * 100);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <Progress 
        value={percentage} 
        className={`h-2 ${color}`}
      />
      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
        <span>₹{(utilized / 10000000).toFixed(2)} Cr used</span>
        <span>of ₹{(allocated / 10000000).toFixed(2)} Cr</span>
      </div>
    </div>
  );
};

const FundAllocation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fund Utilization</CardTitle>
        <CardDescription>Financial year 2023-24 budget allocation and utilization</CardDescription>
      </CardHeader>
      <CardContent>
        <FundCategory
          title="Construction Subsidies"
          allocated={2500000000}
          utilized={1750000000}
          color="bg-blue-600"
        />
        <FundCategory
          title="Infrastructure Development"
          allocated={1200000000}
          utilized={950000000}
          color="bg-green-600"
        />
        <FundCategory
          title="Technical Assistance"
          allocated={500000000}
          utilized={320000000}
          color="bg-orange-500"
        />
        <FundCategory
          title="Administrative Expenses"
          allocated={300000000}
          utilized={250000000}
          color="bg-purple-600"
        />
        
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between">
            <span className="font-medium">Total Budget</span>
            <span className="font-medium">₹450 Cr</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Total Utilized</span>
            <span>₹327 Cr (72.67%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FundAllocation;

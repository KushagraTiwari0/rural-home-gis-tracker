
import React from "react";
import { House, Map, MapPin, Route } from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";
import ProjectStatusChart from "@/components/ProjectStatusChart";
import ProgressTracking from "@/components/ProgressTracking";
import FundAllocation from "@/components/FundAllocation";
import MapComponent from "@/components/Map";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rural Housing MIS Dashboard</h1>
        <p className="text-muted-foreground">
          Monitoring and tracking Garib Awas Yojana housing projects
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Beneficiaries"
          value="1,24,568"
          icon={<MapPin />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Houses Completed"
          value="78,435"
          icon={<House />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Projects"
          value="243"
          icon={<Route />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Fund Utilization"
          value="72.67%"
          icon={<Map />}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectStatusChart />
        </div>
        <div>
          <FundAllocation />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProgressTracking />
        <MapComponent />
      </div>
    </div>
  );
};

export default DashboardPage;


import React from "react";
import MapComponent from "@/components/Map";

const MapPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">GIS Mapping</h1>
        <p className="text-muted-foreground">Geographic visualization of housing projects</p>
      </div>
      
      <div className="grid gap-6">
        <MapComponent />
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold mb-2">Map Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-sm">In Progress Projects</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-green-600 mr-2"></div>
                <span className="text-sm">Completed Projects</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>
                <span className="text-sm">Planning Phase</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold mb-2">Map Controls</h3>
            <p className="text-sm text-muted-foreground">
              Use the controls in the top-right corner to zoom, rotate, and navigate the map.
              Click on any marker to view project details.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold mb-2">Map Data Source</h3>
            <p className="text-sm text-muted-foreground">
              The map displays real-time data from the Garib Awas Yojana database. 
              Project locations are updated daily with construction progress and beneficiary details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;

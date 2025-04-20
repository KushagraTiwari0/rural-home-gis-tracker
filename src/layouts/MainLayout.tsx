
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";

export function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 border-r md:block">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}

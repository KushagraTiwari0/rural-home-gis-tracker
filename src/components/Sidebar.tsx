
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { House, Map, MapPin, Route } from "lucide-react";

interface SidebarProps {
  className?: string;
}

interface SidebarItemProps {
  href: string;
  icon: React.ElementType;
  title: string;
  isActive: boolean;
}

const SidebarItem = ({ href, icon: Icon, title, isActive }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{title}</span>
    </Link>
  );
};

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Rural Housing MIS
          </h2>
          <div className="space-y-1">
            <SidebarItem
              href="/"
              icon={House}
              title="Dashboard"
              isActive={pathname === "/"}
            />
            <SidebarItem
              href="/map"
              icon={Map}
              title="GIS Map"
              isActive={pathname === "/map"}
            />
            <SidebarItem
              href="/projects"
              icon={Route}
              title="Projects"
              isActive={pathname === "/projects"}
            />
            <SidebarItem
              href="/beneficiaries"
              icon={MapPin}
              title="Beneficiaries"
              isActive={pathname === "/beneficiaries"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

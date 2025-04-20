
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectStatusChart from "@/components/ProjectStatusChart";
import ProgressTracking from "@/components/ProgressTracking";

const ProjectsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Project Management</h1>
          <p className="text-muted-foreground">Manage and monitor housing projects</p>
        </div>
        <Button>Add New Project</Button>
      </div>
      
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="w-full md:w-2/3">
          <Input placeholder="Search projects..." />
        </div>
        <div className="flex space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="planning">Planning</SelectItem>
              <SelectItem value="delayed">Delayed</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="District" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Districts</SelectItem>
              <SelectItem value="punjab">Punjab</SelectItem>
              <SelectItem value="up">Uttar Pradesh</SelectItem>
              <SelectItem value="rajasthan">Rajasthan</SelectItem>
              <SelectItem value="bihar">Bihar</SelectItem>
              <SelectItem value="mp">Madhya Pradesh</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="planning">Planning</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              title="Kanpur Rural Development" 
              location="Kanpur, Uttar Pradesh"
              status="In Progress"
              homes={120}
              completion={65}
            />
            <ProjectCard 
              title="Barmer Housing Initiative" 
              location="Barmer, Rajasthan"
              status="In Progress"
              homes={85}
              completion={40}
            />
            <ProjectCard 
              title="Patna District Homes" 
              location="Patna, Bihar"
              status="In Progress"
              homes={150}
              completion={25}
            />
            <ProjectCard 
              title="Amritsar Residential Project" 
              location="Amritsar, Punjab"
              status="In Progress"
              homes={95}
              completion={80}
            />
            <ProjectCard 
              title="Indore Rural Housing" 
              location="Indore, Madhya Pradesh"
              status="In Progress"
              homes={110}
              completion={60}
            />
            <ProjectCard 
              title="Varanasi Development" 
              location="Varanasi, Uttar Pradesh"
              status="In Progress"
              homes={70}
              completion={30}
            />
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              title="Jaipur Rural Homes" 
              location="Jaipur, Rajasthan"
              status="Completed"
              homes={65}
              completion={100}
            />
            <ProjectCard 
              title="Lucknow Housing Phase 1" 
              location="Lucknow, Uttar Pradesh"
              status="Completed"
              homes={80}
              completion={100}
            />
            <ProjectCard 
              title="Bhopal District Project" 
              location="Bhopal, Madhya Pradesh"
              status="Completed"
              homes={45}
              completion={100}
            />
          </div>
        </TabsContent>
        <TabsContent value="planning">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              title="Ahmedabad Rural Initiative" 
              location="Ahmedabad, Gujarat"
              status="Planning"
              homes={130}
              completion={0}
            />
            <ProjectCard 
              title="Kochi Housing Development" 
              location="Kochi, Kerala"
              status="Planning"
              homes={90}
              completion={0}
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectStatusChart />
        <ProgressTracking />
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  location: string;
  status: "Completed" | "In Progress" | "Planning" | "Delayed";
  homes: number;
  completion: number;
}

const statusColors = {
  "Completed": "bg-green-100 text-green-800",
  "In Progress": "bg-blue-100 text-blue-800",
  "Planning": "bg-orange-100 text-orange-800",
  "Delayed": "bg-red-100 text-red-800"
};

const ProjectCard = ({ title, location, status, homes, completion }: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Location:</span>
            <span className="text-sm font-medium">{location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Homes:</span>
            <span className="text-sm font-medium">{homes}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Status:</span>
            <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${statusColors[status]}`}>
              {status}
            </span>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-muted-foreground">Completion:</span>
              <span className="text-sm font-medium">{completion}%</span>
            </div>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: `${completion}%` }}
              ></div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-2">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsPage;

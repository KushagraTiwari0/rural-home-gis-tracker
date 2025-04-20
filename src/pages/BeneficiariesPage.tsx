
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BeneficiaryTable from "@/components/BeneficiaryTable";

const BeneficiariesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Beneficiary Management</h1>
          <p className="text-muted-foreground">Manage beneficiary information and tracking</p>
        </div>
        <Button>Add Beneficiary</Button>
      </div>
      
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="w-full md:w-2/3">
          <Input placeholder="Search beneficiaries..." />
        </div>
        <div className="flex space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
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
              <SelectItem value="telangana">Telangana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Beneficiaries</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <BeneficiaryTable />
        </TabsContent>
        <TabsContent value="approved">
          <BeneficiaryTable />
        </TabsContent>
        <TabsContent value="pending">
          <BeneficiaryTable />
        </TabsContent>
        <TabsContent value="completed">
          <BeneficiaryTable />
        </TabsContent>
      </Tabs>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-4">
          <h3 className="font-semibold">Total Registered</h3>
          <p className="text-2xl font-bold mt-2">1,24,568</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <h3 className="font-semibold">Approved</h3>
          <p className="text-2xl font-bold mt-2">92,432</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <h3 className="font-semibold">Pending</h3>
          <p className="text-2xl font-bold mt-2">26,853</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <h3 className="font-semibold">Rejected</h3>
          <p className="text-2xl font-bold mt-2">5,283</p>
        </div>
      </div>
    </div>
  );
};

export default BeneficiariesPage;

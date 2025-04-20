
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type BeneficiaryStatus = "Approved" | "Pending" | "Rejected" | "Completed";

interface Beneficiary {
  id: string;
  name: string;
  village: string;
  district: string;
  applicationDate: string;
  status: BeneficiaryStatus;
  amountSanctioned: number;
  amountDisbursed: number;
}

// Dummy data for demonstration
const beneficiaries: Beneficiary[] = [
  {
    id: "GAYO-001",
    name: "Ramesh Kumar",
    village: "Bhatinda",
    district: "Punjab",
    applicationDate: "2023-10-15",
    status: "Approved",
    amountSanctioned: 150000,
    amountDisbursed: 50000,
  },
  {
    id: "GAYO-002",
    name: "Sunita Devi",
    village: "Kanpur Rural",
    district: "Uttar Pradesh",
    applicationDate: "2023-09-23",
    status: "Completed",
    amountSanctioned: 150000,
    amountDisbursed: 150000,
  },
  {
    id: "GAYO-003",
    name: "Arjun Singh",
    village: "Barmer",
    district: "Rajasthan",
    applicationDate: "2023-11-05",
    status: "Pending",
    amountSanctioned: 150000,
    amountDisbursed: 0,
  },
  {
    id: "GAYO-004",
    name: "Lakshmi Patel",
    village: "Bhilwara",
    district: "Rajasthan",
    applicationDate: "2023-10-28",
    status: "Rejected",
    amountSanctioned: 0,
    amountDisbursed: 0,
  },
  {
    id: "GAYO-005",
    name: "Mohan Reddy",
    village: "Warangal",
    district: "Telangana",
    applicationDate: "2023-09-15",
    status: "Approved",
    amountSanctioned: 150000,
    amountDisbursed: 75000,
  }
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', { 
    style: 'currency', 
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const statusColor = (status: BeneficiaryStatus) => {
  switch(status) {
    case "Approved": return "bg-blue-100 text-blue-800";
    case "Pending": return "bg-yellow-100 text-yellow-800";
    case "Rejected": return "bg-red-100 text-red-800";
    case "Completed": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const BeneficiaryTable = () => {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Beneficiary</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Applied On</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sanctioned</TableHead>
            <TableHead>Disbursed</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {beneficiaries.map((beneficiary) => (
            <TableRow key={beneficiary.id}>
              <TableCell className="font-medium">{beneficiary.id}</TableCell>
              <TableCell>{beneficiary.name}</TableCell>
              <TableCell>{beneficiary.village}, {beneficiary.district}</TableCell>
              <TableCell>{formatDate(beneficiary.applicationDate)}</TableCell>
              <TableCell>
                <Badge className={statusColor(beneficiary.status)}>
                  {beneficiary.status}
                </Badge>
              </TableCell>
              <TableCell>{formatCurrency(beneficiary.amountSanctioned)}</TableCell>
              <TableCell>{formatCurrency(beneficiary.amountDisbursed)}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BeneficiaryTable;

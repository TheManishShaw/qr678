import { columns } from "@/components/common/table/columns";
import { DataTable } from "@/components/common/table/data-table";
import React from "react";

const ClinicList = () => {
  const partners = [
    {
      id: "1",
      name: "City Skin Clinic",
      state: "Maharashtra",
      city: "Mumbai",
      brand: "QR678",
      address: "123 Healthcare Street",
      contact: "+91 98765 43210",
    },
    {
      id: "2",
      name: "Advanced Hair Care",
      state: "Delhi",
      city: "New Delhi",
      brand: "QR678 Neo",
      address: "456 Medical Avenue",
      contact: "+91 98765 43211",
    },
    // Add more partner data as needed
  ];
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl text-primary font-bold tracking-tight">
              Our Partners
            </h1>
            <p className="text-secondary">
              Find a QR678® certified clinic near you
            </p>
          </div>
        </div>
        <DataTable columns={columns} data={partners} />
      </div>
    </div>
  );
};

export default ClinicList;

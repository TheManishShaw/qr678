"use client";
import { columns } from "@/components/common/table/columns";
import { DataTable } from "@/components/common/table/data-table";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { clinicList } from "@/actions/get-request";

const ClinicList = () => {
  const [clinics, setClinics] = useState([]);
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const {
    data: clinicData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["ClinicList"],
    queryFn: () => clinicList(),
    retry: 5,
    refetchOnWindowFocus: true,
  });

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl text-primary font-bold tracking-tight">
              Our Partners
            </h1>
            <p className="text-secondary">
              Find clinic partners offering QR678® hair regrowth therapy near
              you
            </p>
          </div>
        </div>

        <DataTable columns={columns} data={clinicData ? clinicData : []} />
      </div>
    </div>
  );
};

export default ClinicList;

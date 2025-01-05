"use client";
import { columns } from "@/components/common/table/columns";
import { DataTable } from "@/components/common/table/data-table";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ClinicList = () => {
  const [clinics, setClinics] = useState([]);
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch clinics data from API using Axios
  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await axios.get(
          "https://blog.qr678.com/wp-json/wp/v2/clinics"
        );
        const data = response.data;
        setClinics(data);
        setFilteredClinics(data);
        // Extract unique states for filtering
        const uniqueStates = [...new Set(data.map((clinic) => clinic.state))];
        setStates(uniqueStates);
      } catch (error) {
        console.error("Error fetching clinic data:", error);
      }
    };

    fetchClinics();
  }, []);

  // Update cities when state is selected
  useEffect(() => {
    if (selectedState) {
      const filteredCities = [
        ...new Set(
          clinics
            .filter((clinic) => clinic.state === selectedState)
            .map((clinic) => clinic.city)
        ),
      ];
      setCities(filteredCities);
    } else {
      setCities([]);
    }
    setSelectedCity(""); // Reset city selection when state changes
  }, [selectedState, clinics]);

  // Filter clinics based on state and city
  useEffect(() => {
    let data = clinics;
    console.log("data", data);
    if (selectedState) {
      data = data.filter((clinic) => clinic.state === selectedState);
    }
    if (selectedCity) {
      data = data.filter((clinic) => clinic.city === selectedCity);
    }

    setFilteredClinics(data);
  }, [selectedState, selectedCity, clinics]);

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

        <DataTable columns={columns} data={filteredClinics} />
      </div>
    </div>
  );
};

export default ClinicList;

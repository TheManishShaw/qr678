"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export function DataTable({ columns, data }) {
  const [sorting, setSorting] = React.useState([]);
  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedCity, setSelectedCity] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [locations, setLocations] = React.useState([]);
  const [cityLocations, setCityLocations] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(10);

  // Extract unique states and cities from API response
  React.useEffect(() => {
    if (data?.length) {
      const uniqueStates = Array.from(
        new Set(data.map((clinic) => clinic.state.name))
      )
        .filter(Boolean) // Remove empty or null values
        .sort();

      // Get cities based on selected state or all cities if no state is selected
      const filteredData = selectedState
        ? data.filter((clinic) => clinic.state.name === selectedState)
        : data;

      const uniqueCities = Array.from(
        new Set(filteredData.map((clinic) => clinic.city))
      )
        .filter(Boolean) // Remove empty or null values
        .sort();

      setLocations(uniqueStates);
      setCityLocations(uniqueCities);
    }
  }, [data, selectedState]);

  // Filter Data based on selected state, city, and search term
  const filteredData = React.useMemo(() => {
    return data.filter((clinic) => {
      const matchesState = selectedState
        ? clinic.state.name === selectedState
        : true;
      const matchesCity = selectedCity ? clinic.city === selectedCity : true;
      const matchesSearch = searchTerm
        ? clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          clinic.state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          clinic.city.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesState && matchesCity && matchesSearch;
    });
  }, [data, selectedState, selectedCity, searchTerm]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
  });

  // Handle state change
  const handleStateChange = (value) => {
    setSelectedState(value || null); // Convert empty string to null
    setSelectedCity(null); // Reset city when state changes
  };

  // Handle city change
  const handleCityChange = (value) => {
    setSelectedCity(value || null); // Convert empty string to null
  };

  // Clear Filters
  const clearFilters = () => {
    setSelectedState(null);
    setSelectedCity(null);
    setSearchTerm("");
  };

  return (
    <div>
      <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center">
        {/* Search Input */}
        <Input
          placeholder="Search clinic, state, or city..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="max-w-sm"
        />

        {/* Filters Container */}
        <div className="flex flex-wrap gap-2">
          {/* State Filter Dropdown */}
          <Select value={selectedState || ""} onValueChange={handleStateChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* City Filter Dropdown */}
          <Select value={selectedCity || ""} onValueChange={handleCityChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {cityLocations.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear Filter Button */}
          <Button
            variant="outline"
            onClick={clearFilters}
            className="whitespace-nowrap"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead className="text-primary" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="text-primary"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

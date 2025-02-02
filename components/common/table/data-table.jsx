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
  const [selectedState, setSelectedState] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [locations, setLocations] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(10);

  // Extract unique states from API response
  React.useEffect(() => {
    if (data?.length) {
      const uniqueStates = Array.from(
        new Set(data.map((clinic) => clinic.state.name))
      );
      setLocations(uniqueStates);
    }
  }, [data]);

  // Filter Data based on selected state and search term
  const filteredData = React.useMemo(() => {
    return data.filter((clinic) => {
      const matchesState = selectedState
        ? clinic.state.name === selectedState
        : true;
      const matchesSearch = searchTerm
        ? clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          clinic.state.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Now checks state names too!
        : true;
      return matchesState && matchesSearch;
    });
  }, [data, selectedState, searchTerm]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
  });

  // Clear Filters
  const clearFilters = () => {
    setSelectedState("");
    setSearchTerm("");
  };

  return (
    <div>
      <div className="flex flex-col gap-4 py-4 md:flex-row">
        {/* Search Input */}
        <Input
          placeholder="Search clinic or state..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="max-w-sm"
        />

        {/* State Filter Dropdown */}
        <div className="flex gap-2">
          <Select
            value={selectedState}
            onValueChange={(value) => setSelectedState(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location, index) => (
                <SelectItem key={index} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear Filter Button */}
          <Button variant="outline" onClick={clearFilters}>
            Clear Filter
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

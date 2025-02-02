"use client";

import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Copy, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export const columns = [
  {
    accessorKey: "area",
    header: "Clinic Name",
    cell: ({ row }) => {
      const partner = row.original;
      const title = partner?.name || "Unknown Title";
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            width: "150px",
          }}
        >
          <strong>{title}</strong>
        </div>
      );
    },
  },

  {
    accessorKey: "state",
    header: "Location",
    cell: ({ row }) => {
      const location = row.original;
      const stateLocation = location?.state?.name || "Unknown Location";
      return (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
        >
          <p>{stateLocation}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Contact",
    cell: ({ row }) => {
      const phoneNo = row.original.phone;
      return (
        <a
          href={`tel:${phoneNo}`}
          style={{
            whiteSpace: "nowrap",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {phoneNo}
        </a>
      );
    },
  },
  {
    id: "id",
    cell: ({ row }) => {
      const partner = row.original;
      return <CopyButton value={partner.phone} />;
    },
  },
];

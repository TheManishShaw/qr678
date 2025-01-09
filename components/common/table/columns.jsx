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
      const title = partner?.title?.rendered || "Unknown Title";
      const area = partner?.area?.trim();
      return (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
        >
          <strong>{title ? title : area}</strong>
        </div>
      );
    },
  },

  {
    accessorKey: "location_name",
    header: "Location",
  },

  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone_no",
    header: "Contact",
    cell: ({ row }) => {
      const phoneNo = row.original.phone_no;
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
      return <CopyButton value={partner.phone_no} />;
    },
  },
];

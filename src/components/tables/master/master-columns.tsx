/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { CellActionMaster } from "./master-cell-action";
import { Master } from "@/types/master";

export const MasterColumns: ColumnDef<Master>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => row.original.code || '-',
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => row.original.name || '-',
  },
  {
    accessorKey: "parentCode",
    header: "Parent Code",
    cell: ({ row }) => row.original.parentCode || '-',
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => row.original.isActive ? 'Yes' : 'No',
  },
  {
    accessorKey: "sequence",
    header: "Sequence",
    cell: ({ row }) => row.original.sequence || '-',
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActionMaster data={row.original} />,
  },
];

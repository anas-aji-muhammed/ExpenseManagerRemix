// "use client"

import { ColumnDef } from "@tanstack/react-table"
import ExpemseActions from "./expense_actions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Expenses = {
  id: string
  amount: number
  // status: "pending" | "processing" | "success" | "failed"
  description: string
  date: string
  title: string
}

export const columns: ColumnDef<Expenses>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    header: "Actions",

    enableHiding: false,
    cell: ({ row }) => {
      const expense = row.original
 
      return (
       <ExpemseActions id={expense.id}/>
      )
    },
  }
]

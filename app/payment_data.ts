type Expenses = {
    id: string
    amount: number
    // status: "pending" | "processing" | "success" | "failed"
    description: string
    title: string
  }
  
  export const expenses: Expenses[] = [
    {
      id: "728ed52f",
      title: "test",
      amount: 100,
      description: "pending",
    },
    {
      id: "489e1d42",
      amount: 125,
      description: "pending",
      title: "test",

    },
    // ...
  ]
  
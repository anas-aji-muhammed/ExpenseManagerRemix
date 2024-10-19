import { Form, Link, useLoaderData, } from "@remix-run/react";
import {loader} from "~/features/app/expenses/expensesAdd";

function ExpenseForm({actionData}) {
  console.log("Action data", actionData);
  
    const today = new Date().toISOString().slice(0, 10); 
    const expenseData = useLoaderData<typeof loader>();

  const defaultValues = expenseData
  ? {
      title: expenseData.title,
      amount: expenseData.amount,
      date: expenseData.date,
      description: expenseData.description
    }
  : {
      title: '',
      amount: '',
      date: '',
      description: ''
    };
  
    return (
      <Form method="post" className="p-2 grid grid-rows-3 gap-2 " id="expense-form">
        {actionData? <p>{actionData}</p>:<></>}
        <p className="grid grid-cols-2 gap-4 content-end ">
          <label htmlFor="title">Expense Title</label>
          <input type="text" id="title"
            defaultValue={defaultValues.title}
            name="title"
            required maxLength={30} className="border rounded border-black px-2"/>
        </p>
  
          <p className="grid grid-cols-2 gap-4">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0"
              step="0.01"
              required
              defaultValue={defaultValues.amount}

              className="border rounded border-black px-2"
            />
          </p>
        <p className="grid grid-cols-2 gap-4">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" max={today} required 
            defaultValue={
              defaultValues.date ? defaultValues.date.slice(0, 10) : ''
            }
            />
          </p>
          <p className="grid grid-cols-2 gap-4 content-end ">
          <label htmlFor="description">Description</label>
          <input type="description" id="description" name="description" required maxLength={30} className="border rounded border-black px-2"
                        defaultValue={defaultValues.description}
/>
        </p>
        <div className="space-x-2">
          <button className="bg-primary-main rounded p-2 border text-white">{expenseData?'Update Expense' : 'Save Expense'}</button>
          <Link to="..">Cancel</Link>
        </div>
      </Form>
    );
  }
  
  export default ExpenseForm;
  
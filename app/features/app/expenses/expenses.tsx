import { ActionFunctionArgs, json, LoaderFunctionArgs } from '@remix-run/node';
import {isRouteErrorResponse, Outlet, redirect, useLoaderData, useRouteError} from '@remix-run/react';
import ExpensesList from './components/expenses-list'
import { useNavigation } from "@remix-run/react";
import { getExpenses } from '~/.server/expenses.server';
import React from "react";

function ExpensesPage() {
  const expenses = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"? true:false;

  return (
    <div className='flex-1 max-h-full'>
      <ExpensesList expenses={expenses.data} isLoading={isLoading}/>

    </div>
  )
}
export default ExpensesPage;


export const loader = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const expenses = await getExpenses();
  // console.log("expenses",expenses);
  

  return json(expenses);
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 401:
        return (
          <div>
            <p>You don&#39;t have access to this.</p>
          </div>
        );
      case 404:
        return <div>data not found!</div>;
    }

    return (
      <div>
        Something went wrong: {error.status}{" "}
        {error.statusText}
      </div>
    );
  }

  return (
    <div>
      Something went wrong:{" "}
      {error?.message || "Unknown Error"}
    </div>
  );
}

// export async function action({
//   request,
// }: ActionFunctionArgs) {
//   const body = await request.formData();
//   const todo = await fakeCreateTodo({
//     title: body.get("title"),
//   });
//   return redirect(`/todos/${todo.id}`);
// }
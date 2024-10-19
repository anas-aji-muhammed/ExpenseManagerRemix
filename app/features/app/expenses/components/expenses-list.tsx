import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns';
import ExpensesNavbar from './expences-navbar';
import { Outlet } from '@remix-run/react';

function ExpensesList({ expenses, isLoading}) {
  return (
      <div className="flex-1 container py-10  max-h-full overflow-hidden">

          <ExpensesNavbar/>


          <div className=' bg-transparent h-full w-full'>
              <Outlet/>
            {/*{*/}
            {/*  isLoading? "Loading ..." : ""*/}
            {/*}*/}
          </div>
          <DataTable columns={columns} data={expenses}/>
          {/*<div className='z-50'>*/}
          {/*</div>*/}
      </div>
  )
}

export default ExpensesList
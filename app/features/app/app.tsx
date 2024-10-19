import { Outlet } from '@remix-run/react'
import React from 'react'
import AppSideBar from '~/features/app/components/navigation/AppSideBar'


function ExpenseAppLayout() {
  return (
    <div className='flex flex-row justify-between p-4 gap-4 h-screen max-h-full max-w-full'>
        <AppSideBar/>
        <Outlet/>
        
    </div>
  )
}

export default ExpenseAppLayout
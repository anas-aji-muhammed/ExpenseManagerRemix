import { Link, NavLink, Outlet } from '@remix-run/react';
import { RiAddFill } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~/components/ui/dialog";


function ExpensesNavbar() {
  return (

    <div className='flex justify-between m-2'>
      <h1 className=' text-xl font-semibold'>Expenses</h1>
        <Link to="add">
          <div className='flex bg-primary-main w-fit p-2 rounded-md text-white items-center'>
            <RiAddFill />


            <button className=''>
              Add Expense
            </button>

          </div>
        </Link>

    </div>
  )
}

export default ExpensesNavbar
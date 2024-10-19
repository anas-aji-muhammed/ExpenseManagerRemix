import { Link, useNavigate, useNavigation } from '@remix-run/react';
import React from 'react'

function ExpenseActions({id}) {
    const navigate = useNavigate();

  return (
    <div className="flex gap-3">
    <Link to={id}>Edit</Link>
    <button>Delete</button>
   </div>
  )
}

export default ExpenseActions
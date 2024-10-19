import { useLoaderData, useNavigate } from '@remix-run/react';
import React from 'react'
import { getExpense } from '~/.server/expenses.server';
import ExpenseForm from './components/ExpenseForm';
import Modal from '~/components/utils/Modal';

function ExpenceDetailsPage() {
  const navigate = useNavigate();
  

    function onCloseHandler(){
      navigate('..')
  
    }
    return (
      <Modal onClose={onCloseHandler}>
          <ExpenseForm/>
      </Modal>
    )
  
}

export default ExpenceDetailsPage;

export async function loader({params}) {
  console.log(("expense addd"));

  if(params.id){
    const expenseId = params.id;
    const expense = await getExpense(expenseId)
    return expense;
  }
  return null;

}
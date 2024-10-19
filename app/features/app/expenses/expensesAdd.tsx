import Modal from '~/components/utils/Modal'
import ExpenseForm from './components/ExpenseForm'
import {  redirect, useActionData, useNavigate } from '@remix-run/react'
import {ActionFunctionArgs, json} from '@remix-run/node';
import { addExpense, getExpense } from '~/.server/expenses.server';


// export async function loader({params}) {
//     console.log(("expense addd"));
//
//     if(params.id){
//         const expenseId = params.id;
//         const expense = await getExpense(expenseId)
//         return expense;
//     }
//     return null;
//
// }



function AddExpenses() {
  const actionData = useActionData();
    const navigate = useNavigate();
  function onCloseHandler(){
    navigate('..')

  }
  return (

      <Modal onClose={onCloseHandler} >
        <ExpenseForm actionData={actionData}/>
    </Modal>
  )
}

export default AddExpenses;


export async function action({
      request,
    }: ActionFunctionArgs) {
      const body = await request.formData();
      console.log("AddExpenses action data", body);
      const expenseData = Object.fromEntries(body);

      // await storeExpenses(updatedData);
      // try {
      //   validateExpenseInput(expenseData);
      // } catch (error) {
      //   return error;
      // }
    
      const response =  await addExpense(expenseData);
      if(response.status===200){
        return redirect(`/app/expenses`);

      }
      else{
        return json({message:"Something went wrong, try again!"})
      }


    }
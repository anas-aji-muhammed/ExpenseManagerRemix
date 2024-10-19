import {apiRequest} from "./apiConfig.server.ts";
import {json, redirect} from "@remix-run/node";
import axios from "axios";

export async function addExpense(expenseData) {
  console.log("addExpense called with", expenseData);
  try {
     await apiRequest('create-expense', HTTP_Request_Method.POST, expenseData)
    // return axios({
    //   method: 'post',
    //   url: 'http://localhost:8080/create-expense',
    //   data: expenseData
    // });
  } catch (error) {
    console.log(error);
    throw error;
  }

}

export async function getExpenses() {
  console.log(("get expenses called"));
  try {
    return await apiRequest('create-expense', HTTP_Request_Method.GET)
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpense({id}) {
  // try {
  //   const expense = await prisma.expense.findFirst({ where: { id } });
  //   return expense;
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
}
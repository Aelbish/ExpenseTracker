import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //We are expecting the data i.e. enteredExpenseData from ExpenseForm.js
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    //Communicating expense object to App.js from NewExpense.js
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* We are passing our custom function which will grab the new expense data from ExpenseForm.js */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

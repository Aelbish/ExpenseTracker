//This is a stateful component because it handles the input state
import React, { useState } from "react";
import "./ExpenseForm.css";

//We have props since we have passed oyur custom function in a variable from NewExpense.js
const ExpenseForm = (props) => {
  //We can have multiple state items for a component
  //We could define state for each item individually OR
  //We will use this, I find this syntax easier
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // //OR We can define a single state for all the items by passing abn object in useState
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //If individual state items defined
    setEnteredTitle(event.target.value);

    //If a single state item is defineed
    // we use ... to make sure we store all the values of the state or else the one's not used will be dumped
    //Avoid the below approach
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //Use this approach if single state item defined
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    //If individual state items defined
    setEnteredAmount(event.target.value);
    //If a single state item is defineed
    // we use ... to make sure we store all the values of the state or else the one's not used will be dumped
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    //If individual state items defined
    setEnteredDate(event.target.value);
    //If a single state item is defineed
    // we use ... to make sure we store all the values of the state or else the one's not used will be dumped
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    //By default when the form is submitted it will redirect to localhost:3000/ which we are preventing
    //We will lose the data if we redirect so we are preventing the default action of redirecting when a form is submitted
    event.preventDefault();
    const expenseData = {
      //We are creating an object to send
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //This communicates the data from child to parent
    props.onSaveExpenseData(expenseData);

    //After the form has been submitted we need to reset the values
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

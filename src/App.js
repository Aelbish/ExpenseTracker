//We import our first component here, we didn't import it in index.js because we only import one component in index.js
import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//This is the main component in our React app which will have other nested components
const App = () => {
  //We pass this expenses object to ExpenseItem.js, and ExpenseItem.js passes date to ExpenseDate.js
  //Thus we can vizualie a component tree
  //We are using ExpenseItem.js component in App.js and ExpenseItem.js component is using ExpenseDate.js component
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //We are expecting the data i.e. expense from NewExpense.js
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      {/* Like in express we sent objects or values to ejs file here we are sending values to our react component */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

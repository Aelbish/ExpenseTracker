//This is a stateful/smart component because it handles the filter year state

import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

//here the props has the expenses object from App.js
const Expenses = (props) => {
  //This is a react hook (useState), react hooks start with prefix use
  //These should only be called inside a react component i.e. function
  //useState always returns an array with two values, the first one is initial state value (props.title here) and the second one is a function which will change the value
  const [filteredYear, setFilteredYear] = useState("2021");
  //this function will be passed as a prop to ExpenseFilter.js which will grab/lift up the value from ExpenseFilter.js
  const filterChangeHandler = (selectedYear) => {
    //this will set filteredYear to selectedYear
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        {/* the on... is a naming convention and filterChangeHandler is a function passed as a prop to grab value from ExpensesFilter.js */}
        {/* we are doing two way binding by grabbing the value with filterChangeHandler and passing our initial filterYear value using filteredYear */}
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

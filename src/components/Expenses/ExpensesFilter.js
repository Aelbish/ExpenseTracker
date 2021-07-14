//This is a CONTROLLED COMPONENT because Expenses.js controls what values are sent here and received from here
//Expenses.js controls this component, the values are changed and handled by the parent component i.e Expenses.js

import React from "react";

import "./ExpensesFilter.css";

//props contains a function from Expenses.js which grabs the event.target.value from here
const ExpensesFilter = (props) => {
  //the event argument has the value that has been selected
  const dropdownChangeHandler = (event) => {
    //we now call the function sent through props and passing the selected value as argument
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* on change executed dropdownChangeHandler */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

//This is stateless component or dumb/presentational component since it does not handle any state
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//importing css to our component
import "./ExpenseItem.css";

//This function has just one parameter which will be an object with the properties we passed from App.js
const ExpenseItem = (props) => {
  //This is a react hook (useState), react hooks start with prefix use
  //These should only be called inside a react component i.e. function
  //useState always returns an array with two values, the first one is initial state value (props.title here) and the second one is a function which will change the value
  // const [title, setTitle] = useState(props.title);
  //setTitle will be special type of function which will make react reexecute our component function i.e. ExpenseItem, and hence update the values
  // const clickHandler = () => {
  //   //although this will change the value of title, we are not expliclity doing title="Updated"
  //   //but rather React is updating the value of the title, hence we can use const for [title]
  //   setTitle("Updated!");
  // };
  return (
    //Note this looks like HTML but it is JSX so syntax might be a little different
    //   We should only have one root element here only div is the root element, others are nested
    //className not class since this is JSX
    //We can add a className to our custom component too, but check the Card.js component
    //We have added {props.children} which will allow us to use our css in our custom component
    //{props.children will hold} the code between <Card> and </Card>
    <Card className="expense-item">
      {/* Here we have accessed those properties that have been passed from App.js in props */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* we pass function that neeeds to be executed to onclick attribute, we donot execute it just pass the function*/}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;

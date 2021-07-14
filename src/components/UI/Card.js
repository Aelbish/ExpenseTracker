import React from "react";
//This is a wrapper component, it has {props.children}
import "./Card.css";

//We have added {props.children} which will allow us to use our css in our custom component
//{props.children will hold} the code between <Card> and </Card>
const Card = (props) => {
  //card class will always be added for <Card> and props.className will enable us to use whatever css class has been defined to our custom component
  //Since by default we cannot use className in custom component we will have to add props.className to actually enable that class in our custom component
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

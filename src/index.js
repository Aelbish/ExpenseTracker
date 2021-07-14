//This is the file that runs when we do npm start
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

//<App /> is a component
//Render <App /> imported from App.js in the div with id root in index.html(index.html is in public directory)
ReactDOM.render(<App />, document.getElementById("root"));

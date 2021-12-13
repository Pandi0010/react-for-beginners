import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
//import ToDoList from './ToDoList';
import MovieApp from "./MovieApp";
import styles from "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MovieApp />
    {/* <ToDoList /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

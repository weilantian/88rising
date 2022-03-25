import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/*
React framework will be injected to the site in this file.
The reason for using the react framework in the particular tasks is because 
it is a website that carries massive amount of web elements.
React allows me to splint the code into small chunks, and it is easier to maintain.
Different sections of the website will have a separate file for configure the layout, animation and another for the styling.
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

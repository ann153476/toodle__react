import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
//////////////МОЕ///////////////
let color = true;
const body = document.querySelector("body");
const btn = document.querySelector(".switch");
function f (){
  if(color){
    body.style.backgroundColor="red";
    color=false;
  }else{
    body.style.backgroundColor="blue";
    color=true
  }
  
}
btn.addEventListener('click',f)
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { DarkModeContextProvider } from "./context/context";

ReactDOM.render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>,
  document.getElementById("root")
);

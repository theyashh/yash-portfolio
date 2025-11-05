import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router basename="/yash-portfolio"> */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

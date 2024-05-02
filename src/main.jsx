import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StudentProvider from "./contexts/Student.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StudentProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StudentProvider>
);

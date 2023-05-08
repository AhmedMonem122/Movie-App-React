import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MovieProvider from "./context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MovieProvider>
);

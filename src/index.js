// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/home";
// import HTML from "./pages/html";
// import Css from "./pages/css";
// import Javascript from "./pages/javascript";

// const router = createBrowserRouter([
//   {
//     path: "/Home",
//     element: <Home />,
//     errorElement: <h2>Error........</h2>,
//   },

//   {
//     path: "/html",
//     element: <HTML />,
//   },

//   {
//     path: "/css",
//     element: <Css />,
//   },
//   {
//     path: "/javascript",
//     element: <Javascript />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

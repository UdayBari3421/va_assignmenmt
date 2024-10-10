import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="page">
        {/* toast container */}
        <ToastContainer />
        <Outlet />
      </div>
    </div>
  );
};

export default App;

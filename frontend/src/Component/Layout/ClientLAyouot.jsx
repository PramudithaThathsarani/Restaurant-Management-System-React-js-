import React from "react";
import NavigateBar from '../Client/NavigateBar';
import { Outlet } from "react-router";
import Footer from "../Client/Footer";


const ClientLayout = () => {
  return (
    <div>
      <NavigateBar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;

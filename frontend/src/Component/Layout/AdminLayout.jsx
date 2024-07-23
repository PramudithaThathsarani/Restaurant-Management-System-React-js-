import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Admin/Header";
import Side from "../Admin/Side";

const AdminLayout = () => {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>

      <Header />

{/* sidebar */}
      <div style={{
         display: 'flex',
         flex: 1
      }}>
        <Side style={{
           width: '250px', // Adjust the width as needed
           backgroundColor: '#f8f9fa', // Example background color
           position: 'fixed', // Fix the sidebar to the left
           top: 0,
           bottom: 0,
           left: 0,
           overflowY: 'auto' // Add scrolling if the content overflows
        }} />

{/* outlet */}
        <div style={{
           marginLeft: '25px', // Adjust this to match the sidebar width
           padding: '20px',
           flex: 1,
           overflowY: 'auto' // Add scrolling if the content overflows
        }}>
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;

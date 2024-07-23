// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import ClientLayout from "../Component/Layout/ClientLAyouot";
// import Home from "../Client/Pages/Home";
// import Menu from "../Client/Pages/Menu";
// import Reservation from "../Client/Pages/Reservation";
// import Contact from "../Client/Pages/Contact";
// import Order from "../Client/Pages/Order";

// import Login from "../Admin/Login";
// import AdminLayout from "../Component/Layout/AdminLayout";
// import Dash from "../Admin/Dash";
// import ManageClient from "../Admin/ManageClient";
// import ManageItem from "../Admin/ManageItem";
// import Report from "../Admin/Report";

// const Routers = () => {
//   return (
//     <Routes>
//       {/* Client */}
//       <Route path="/" element={<ClientLayout />}>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/order" element={<Order />} />
//       </Route>
//       {/* Admin */}
//       <Route path="/admin/login" element={<Login />} />
//       <Route path="/admin" element={<AdminLayout />}>
//         <Route path="/admin" element={<Navigate to="/admin/dash" />} />
//         <Route path="/admin/dash" element={<Dash />} />
//         <Route path="/admin/manage-client" element={<ManageClient />} />
//         <Route path="/admin/manage-item" element={<ManageItem />} />
//         <Route path="/admin/report" element={<Report />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Routers;
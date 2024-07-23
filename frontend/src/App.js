// app.js

import "./index.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ClientLayout from "../src/Component/Layout/ClientLAyouot";
import Home from "../src/Client/Pages/Home";
import Menu from "../src/Client/Pages/Menu";
import Reservation from "../src/Client/Pages/Reservation";
import Contact from "../src/Client/Pages/Contact";
import RegistrationForm from "../src/Client/Pages/RegistrationForm";
import BookingForm from "../src/Client/Pages/BookingForm";

import Login from "../src/Admin/Login";
import AdminLayout from "../src/Component/Layout/AdminLayout";
import Dash from "../src/Admin/Dash";
import ManageClient from "../src/Admin/ManageClient";
import ManageEmployee from "../src/Admin/ManageEmployee";
import ManageItem from "../src/Admin/ManageItem";
import ManageEvent from "../src/Admin/ManageEvent";
import Feedback from "../src/Admin/Feedback";
import Booking from "./Admin/Booking";
import axios from "axios";
import Bot from "./Client/bot/bot";

axios.defaults.baseURL = "http://localhost:5000"; 
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="registrationForm" element={<RegistrationForm />} />
          <Route path="bookingForm" element={<BookingForm />} />
          <Route path="bot" element={<Bot/>} />
        </Route>

       {/* Admin Routes */}
       <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Login />} />
          <Route path="dash" element={<Dash />} />
          <Route path="manageClient" element={<ManageClient />} />
          <Route path="manageEmployee" element={<ManageEmployee />} />
          <Route path="manageItem" element={<ManageItem />} />
          <Route path="manageEvent" element={<ManageEvent />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

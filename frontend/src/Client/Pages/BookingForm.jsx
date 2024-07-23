import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const navigate = useNavigate(); // Use the useHistory hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingDetails = { name, email, phone, date, time, guests };
    try {
      const response = await axios.post('http://localhost:5000/api/bookings/book-table', bookingDetails);
      if (response.data.success) {
        alert('Booking successful!');
        navigate('/'); // Navigate to the home page after successful booking
      } else {
        alert('Booking failed!');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '0 auto',
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Book a Table</h2>
      <div style={inputStyle}>
        <label style={labelStyle}>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div style={inputStyle}>
        <label style={labelStyle}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div style={inputStyle}>
        <label style={labelStyle}>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>

      <div style={inputStyle}>
        <label style={labelStyle}>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
      
      
     
      </div>

      <div style={inputStyle}>
        <label style={labelStyle}>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>

      <div style={inputStyle}>
        <label style={labelStyle}>Number of Guests:</label>
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required />
      </div>
      <button type="submit" style={buttonStyle}>Book Table</button>
    </form>
  );
};

export default BookingForm;

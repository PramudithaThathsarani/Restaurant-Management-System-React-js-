import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings');
        const data = await response.json();
        if (data.success) {
          setBookings(data.bookings);
        } else {
          alert('Failed to fetch bookings!');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (data.success) {
        setBookings(bookings.filter((booking) => booking._id !== id));
      } else {
        alert('Failed to delete booking!');
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleGetBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`);
      const data = await response.json();
      if (data.success) {
        setSelectedBooking(data.booking);
      } else {
        alert('Failed to fetch booking details!');
      }
    } catch (error) {
      console.error('Error fetching booking details:', error);
    }
  };

  const styles = {
    dashboard: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    header: {
      backgroundColor: '#227442',
      color: 'white',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
    },
    mainContent: {
      flexGrow: 1,
      backgroundColor: '#ecf0f1',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    sectionsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    section: {
      width: '300px',
      height: '300px',
      backgroundColor: '#64E986',
      padding: '20px',
      margin: '10px 0',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      marginBottom: '10px',
    },
  };

  const tableStyle = {
    width: '80%',
    margin: '0 auto',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const buttonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  const viewButtonStyle = {
    cursor: 'pointer',
    background: '#1E90FF',
    padding: '0.625rem 1.25rem',
    transition: '300ms',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: '15px',
    fontWeight: '500',
    color: 'white',
    borderRadius: '9999px',
    border: '1px solid #e5e7eb',
    outline: 'none',
    zIndex: 10,
  };

  const deleteButtonStyle = {
    cursor: 'pointer',
    background: '#E41B17',
    padding: '0.625rem 1.25rem',
    transition: '300ms',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: '15px',
    fontWeight: '500',
    color: 'white',
    borderRadius: '9999px',
    border: '1px solid #e5e7eb',
    outline: 'none',
    zIndex: 10,
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <h1>Booking</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/menu" style={styles.navLink}>Menu</a>
          <a href="/reservation" style={styles.navLink}>Reservations</a>
        </nav>
      </header>
      <main style={styles.mainContent}>
        <div style={styles.sectionsContainer}>
          <div>
            <h2>Booking List</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Phone</th>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Time</th>
                  <th style={thStyle}>Guests</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td style={tdStyle}>{booking.name}</td>
                    <td style={tdStyle}>{booking.email}</td>
                    <td style={tdStyle}>{booking.phone}</td>
                    <td style={tdStyle}>{new Date(booking.date).toLocaleDateString()}</td>
                    <td style={tdStyle}>{booking.time}</td>
                    <td style={tdStyle}>{booking.guests}</td>
                    <td style={tdStyle}>
                      <button style={viewButtonStyle} onClick={() => handleGetBooking(booking._id)}>
                        View Details
                      </button>
                      <button style={deleteButtonStyle} onClick={() => handleDelete(booking._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {selectedBooking && (
              <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h3>Booking Details</h3>
                <p><strong>Name:</strong> {selectedBooking.name}</p>
                <p><strong>Email:</strong> {selectedBooking.email}</p>
                <p><strong>Phone:</strong> {selectedBooking.phone}</p>
                <p><strong>Date:</strong> {new Date(selectedBooking.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {selectedBooking.time}</p>
                <p><strong>Guests:</strong> {selectedBooking.guests}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingTable;

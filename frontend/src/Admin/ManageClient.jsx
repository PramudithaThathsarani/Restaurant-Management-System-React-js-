import React, { useState } from 'react';

const ManageClient = () => {
  const [users, setUsers] = useState([
    { id: 'U_1', username: 'Sumith', fullName: 'Sumith Aruna Shantha', password: '****', phone: '117213250', address: '100/2, kandy road, kadawatha', role: 'Admin', status: 'Active' },
  ]);

  const [form, setForm] = useState({
    id: '',
    username: '',
    fullName: '',
    password: '',
    phone: '',
    address: '',
    role: 'User',
    status: 'Active',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.id) newErrors.id = 'User ID is required';
    if (!form.username) newErrors.username = 'Username is required';
    if (!form.fullName) newErrors.fullName = 'Full name is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.phone) newErrors.phone = 'Telephone number is required';
    if (!form.address) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (action) => {
    if (!validateForm()) return;

    let url;
    let method;
    switch (action) {
      case 'add':
        url = '/api/users'; // Replace with your actual endpoint
        method = 'POST';
        break;
      case 'edit':
        url = `/api/users/${form.id}`; // Replace with your actual endpoint
        method = 'PUT';
        break;
      case 'delete':
        url = `/api/users/${form.id}`; // Replace with your actual endpoint
        method = 'DELETE';
        break;
      default:
        return;
    }

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        const updatedUsers = await response.json();
        setUsers(updatedUsers);
        clearForm();
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearForm = () => {
    setForm({
      id: '',
      username: '',
      fullName: '',
      password: '',
      phone: '',
      address: '',
      role: 'User',
      status: 'Active',
    });
    setErrors({});
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header1}>
        <h1>Manage Client</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/menu" style={styles.navLink}>Menu</a>
          <a href="/reservation" style={styles.navLink}>Reservations</a>
          
        </nav>
      </header>
      <main style={styles.mainContent}>
        <div style={styles.container}>
          <h2 style={styles.header}>Manage Client</h2>
          <div style={styles.userList}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Client Id</th>
                  <th style={styles.th}>C_User Name</th>
                  <th style={styles.th}>C_Full Name</th>
                  <th style={styles.th}>Password</th>
                  <th style={styles.th}>Telephone</th>
                  <th style={styles.th}>Address</th>
                  <th style={styles.th}>Role</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map(client => (
                  <tr key={client.id}>
                    <td style={styles.td}>{client.id}</td>
                    <td style={styles.td}>{client.username}</td>
                    <td style={styles.td}>{client.fullName}</td>
                    <td style={styles.td}>{client.password}</td>
                    <td style={styles.td}>{client.phone}</td>
                    <td style={styles.td}>{client.address}</td>
                    <td style={styles.td}>{client.role}</td>
                    <td style={styles.td}>{client.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </main>
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header1: {
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
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    color: '#1AA260',
  },
  userList: {
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#1AA260',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  },
  td: {
    padding: '10px',
    border: '1px solid #ccc',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '8px',
    margin: '5px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  checkbox: {
    marginLeft: '5px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#2a9d8f',
    color: 'white',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default ManageClient;

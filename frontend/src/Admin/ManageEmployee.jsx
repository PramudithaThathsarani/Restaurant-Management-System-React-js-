import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('User');
  const [status, setStatus] = useState('Active');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { id, username, fullName, password, phone, address, role, status };
    try {
      const response = await axios.post('http://localhost:5000/api/users', userDetails);
      if (response.status === 201) {
        alert('User created successfully!');
        fetchEmployees(); // Refresh employee data after creating a user
        clearForm(); // Clear form after successful submission
      } else {
        alert('Failed to create user!');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/users/${employeeId}`);
        
      if (response.status === 200) {
        alert('User deleted successfully!');
        fetchEmployees(); // Refresh employee data after deleting a user
      } else {
        alert('Failed to delete user!');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/users/${id}`, {
  //       method: 'DELETE',
  //     });
  //     if (response.ok) {
  //       setMenuItems(menuItems.filter(item => item._id !== id));
  //     } else {
  //       console.error('Error:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  const clearForm = () => {
    setId('');
    setUsername('');
    setFullName('');
    setPassword('');
    setPhone('');
    setAddress('');
    setRole('User');
    setStatus('Active');
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <h1>Employee Management</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/menu" style={styles.navLink}>Menu</a>
          <a href="/reservation" style={styles.navLink}>Reservations</a>
        </nav>
      </header>
      <main style={styles.mainContent}>
        <div style={styles.container}>
          <div style={styles.tableContainer}>
            <h2 style={styles.header1}>Employee Data</h2>
            <div style={styles.empList}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Username</th>
                    <th style={styles.th}>Full Name</th>
                    <th style={styles.th}>Phone</th>
                    <th style={styles.th}>Address</th>
                    <th style={styles.th}>Role</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(employee => (
                    <tr key={employee.id}>
                      <td style={styles.td}>{employee.id}</td>
                      <td style={styles.td}>{employee.username}</td>
                      <td style={styles.td}>{employee.fullName}</td>
                      <td style={styles.td}>{employee.phone}</td>
                      <td style={styles.td}>{employee.address}</td>
                      <td style={styles.td}>{employee.role}</td>
                      <td style={styles.td}>{employee.status}</td>
                      <td style={styles.td}>
                      <button style={{ cursor: 'pointer',background:'#E41B17',padding: '0.625rem 1.25rem', transition:'300',marginRight: '0.5rem', marginBottom: '0.5rem',fontSize: '15px',fontWeight: '500',color: 'white',borderRadius: '9999px',border: '1px solid #e5e7eb',outline: 'none',zIndex: 10,}} onClick={() => handleDelete(employee.id)}>Delete</button>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div><br/>
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.formStyle}>
              <h2 style={styles.header1}>Create User</h2>
              <div style={styles.inputStyle}>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
              </div>
              <div style={styles.inputStyle}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div style={styles.inputStyle}>
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div style={styles.inputStyle}>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div style={styles.inputStyle}>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div style={styles.inputStyle}>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>
              <div style={styles.inputStyle}>
                <label>Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div style={styles.inputStyle}>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <button type="submit" style={styles.buttonStyle}>Create User</button>
              <button type="button" style={styles.buttonStyle} onClick={clearForm}>Clear Form</button>
            </form>
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
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  header1: {
    textAlign: 'center',
    color: '#1AA260',
  },
  empList: {
    marginBottom: '20px',
  },
  section: {
    width: '300px', // Set width for square shape
    height: '300px', // Set height for square shape
    backgroundColor: '#64E986',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    marginBottom: '10px',
  },
  formContainer: {
    marginBottom: '20px',
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '0 auto',
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  inputStyle: {
    marginBottom: '15px',
  },
  buttonStyle: {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#2a9d8f',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
    marginRight: '10px',
  },
  tableContainer: {
    margin: '0 auto',
    width: '80%',
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
    padding: '30px',
    border: '1px solid #ccc',
    textAlign: 'left',
  },
};

export default UserForm;

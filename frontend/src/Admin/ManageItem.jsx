import React, { useState, useEffect } from 'react';

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.description) newErrors.description = 'Description is required';
    if (!form.price) newErrors.price = 'Price is required';
    if (!form.image) newErrors.image = 'Image is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('image', form.image);

    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const newMenuItem = await response.json();
        setMenuItems([...menuItems, newMenuItem]);
        clearForm();
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setMenuItems(menuItems.filter(item => item._id !== id));
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearForm = () => {
    setForm({
      name: '',
      description: '',
      price: '',
      image: null,
    });
    setErrors({});
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header1}>
        <h1>Manage Menu</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/menu" style={styles.navLink}>Menu</a>
          <a href="/reservation" style={styles.navLink}>Reservations</a>
         
        </nav>
      </header>
      
      <main style={styles.mainContent}>
        <div style={styles.container}>
          <h2 style={styles.header}>Manage Menu</h2>
          <div style={styles.menuList}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Description</th>
                  <th style={styles.th}>Package</th>
                  <th style={styles.th}>Image</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map(event => (
                  <tr key={event._id}>
                    <td style={styles.td}>{event.name}</td>
                    <td style={styles.td}>{event.description}</td>
                    <td style={styles.td}>{event.package}</td>
                    <td style={styles.td}><img src={`http://localhost:5000/${event.image}`} alt={event.name} style={styles.image} /></td>
                    <td style={styles.td}>
                      <button style={{ cursor: 'pointer',background:'#E41B17',padding: '0.625rem 1.25rem', transition:'300',marginRight: '0.5rem', marginBottom: '0.5rem',fontSize: '15px',fontWeight: '500',color: 'white',borderRadius: '9999px',border: '1px solid #e5e7eb',outline: 'none',zIndex: 10,}} onClick={() => handleDelete(event._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={form.name} onChange={handleChange} style={styles.input} />
              {errors.name && <span style={styles.error}>{errors.name}</span>}
            </label>
            <label>
              Description:
              <input type="text" name="description" value={form.description} onChange={handleChange} style={styles.input} />
              {errors.description && <span style={styles.error}>{errors.description}</span>}
            </label>
            <label>
              package:
              <input type="number" name="price" value={form.price} onChange={handleChange} style={styles.input} />
              {errors.price && <span style={styles.error}>{errors.price}</span>}
            </label>
            <label>
              Image:
              <input type="file" name="image" accept="image/*" onChange={handleImageChange} style={styles.input} />
              {errors.image && <span style={styles.error}>{errors.image}</span>}
            </label>
            <button type="submit" style={styles.button}>Add Event</button>
            <button type="button" onClick={clearForm} style={styles.button}>Clear</button>
          </form>
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
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    color: '#1AA260',
  },
  menuList: {
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
  image: {
    width: '100px',
    height: 'auto',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '16px',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#2a9d8f',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginLeft: '5px',
  },
};

export default ManageMenu;


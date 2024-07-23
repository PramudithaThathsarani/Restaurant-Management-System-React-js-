import React, { useState } from 'react';

const Info2 = () => {
  
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async e => {
      e.preventDefault();
      try {
        const response = await fetch('/submit-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setSubmitted(true);
          // Optionally, you can reset the form after submission
          setFormData({ name: '', email: '', message: '' });
        } else {
          // Handle error
        }
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    };
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px',
      boxSizing: 'border-box',
      background: '#f9f9f9'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '40px', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontFamily: 'Lucida Calligraphy', 
          fontSize: '28px', 
          color: '#333', 
          marginBottom: '20px' 
        }}>
          Feedback
        </h1>
        <p style={{ 
          fontFamily: 'Mongolian Baiti', 
          fontSize: '18px', 
          color: '#555', 
          marginBottom: '30px' 
        }}>
         Give us your opinion!
        </p>
        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ 
              display: 'block', 
              fontFamily: 'Mongolian Baiti', 
              fontSize: '16px', 
              color: '#333', 
              marginBottom: '5px' 
            }}>
              Name
            </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '16px', 
              borderRadius: '5px', 
              border: '1px solid #ddd' 
            }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ 
              display: 'block', 
              fontFamily: 'Mongolian Baiti', 
              fontSize: '16px', 
              color: '#333', 
              marginBottom: '5px' 
            }}>
              Email
            </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '16px', 
              borderRadius: '5px', 
              border: '1px solid #ddd' 
            }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ 
              display: 'block', 
              fontFamily: 'Mongolian Baiti', 
              fontSize: '16px', 
              color: '#333', 
              marginBottom: '5px' 
            }}>
              Message
            </label>
            <textarea name="message" value={formData.message} onChange={handleChange} style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '16px', 
              borderRadius: '5px', 
              border: '1px solid #ddd', 
              height: '100px' 
            }}></textarea>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ 
              padding: '10px 20px', 
              fontSize: '16px', 
              color: '#fff', 
              background: '#333', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Info2;

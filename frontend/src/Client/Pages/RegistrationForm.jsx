import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Handle input change and update form data state
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh on form submission
        try {
            // Send a POST request to the server with form data
            const response = await axios.post('http://localhost:5000/users/register', formData);
            console.log('User registered:', response.data); // Log the response data
        } catch (error) {
            console.error('There was an error registering the user!', error); // Log any errors
        }
    };

    // Inline styles for the form container
    const formStyle = {
        display: 'flex', // Use flexbox for layout
        flexDirection: 'column', // Arrange children in a column
        alignItems: 'center', // Center children horizontally
        maxWidth: '400px', // Max width of the form
        margin: '0 auto', // Center the form horizontally
        padding: '20px', // Padding inside the form
        border: '1px solid #ccc', // Border around the form
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' // Shadow for a subtle effect
    };

    // Inline styles for the input fields
    const inputStyle = {
        marginBottom: '10px', // Space below each input
        padding: '10px', // Padding inside the input
        width: '100%', // Full width of the parent container
        borderRadius: '5px', // Rounded corners
        border: '1px solid #ccc' // Border around the input
    };

    // Inline styles for the submit button
    const buttonStyle = {
        padding: '10px 20px', // Padding inside the button
        borderRadius: '5px', // Rounded corners
        border: 'none', // Remove default border
        backgroundColor: '#28a745', // Background color
        color: '#fff', // Text color
        cursor: 'pointer' // Pointer cursor on hover
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={{ marginBottom: '10px' }}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={inputStyle} // Apply inline styles
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle} // Apply inline styles
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={inputStyle} // Apply inline styles
                />
            </div>
            <button type="submit" style={buttonStyle}>Register</button>
        </form>
    );
};

export default Register;

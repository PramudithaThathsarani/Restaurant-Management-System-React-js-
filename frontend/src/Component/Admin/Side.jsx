import React from "react";

const Side = () => {
 

  // Inline styles for the buttons
  const buttonStyle = {
    backgroundColor: '#3EA055', 
    borderRadius: '8px',
    padding: '15px 0', 
    width: '100%',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease'
  };

  // Inline styles for the buttons on hover
  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#333' // Darker green on hover
  };

  // State to track hover effect
  const [hoveredButton, setHoveredButton] = React.useState(null);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      color: 'white',
      padding: '20px',
      width: '250px',
      height: '100%',
      backgroundColor: '#EEEEEE',
      fontWeight: 'bold',
      textAlign: 'center',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
     
    }}>
      <a href="/admin/dash">
        <button
          style={hoveredButton === 'dash' ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setHoveredButton('dash')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Dashboard
        </button>
      </a>

      <a href="/admin/manageEmployee">
        <button
          style={hoveredButton === 'addUser' ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setHoveredButton('addUser')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Add Employee
        </button>
      </a>
      <a href="/admin/manageItem">
        <button
          style={hoveredButton === 'manageProducts' ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setHoveredButton('manageProducts')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Manage Menu
        </button>
      </a>
      <a href="/admin/ManageEvent">
        <button
          style={hoveredButton === 'manageEvent' ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setHoveredButton('manageEvent')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Manage Event
        </button>
      </a>
      <a href="/admin/Booking">
        <button
          style={hoveredButton === 'Booking' ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setHoveredButton('Booking')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Booking
        </button>
      </a>
      <a href="/admin/Feedback">
        <button
          style={hoveredButton === 'Feedback' ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setHoveredButton('Feedback')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Feedback
        </button>
      </a>
      
    </div>
  );
};

export default Side;

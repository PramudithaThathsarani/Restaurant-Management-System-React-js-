import React from 'react';

const Header = () => {
  const styles = {
    header: {
      backgroundColor: '#f8f9fa',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #dee2e6',
    },
    search: {
      padding: '5px 10px',
      borderRadius: '4px',
      border: '1px solid #ced4da',
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
    },
    profileImg: {
      borderRadius: '50%',
      marginLeft: '10px',
    },
  };

  return (
    <div style={styles.header}>
      <div style={{fontSize:'20px'}}>Welcome, තම්මැන්නා </div>
      
     
    </div>
  );
};

export default Header;

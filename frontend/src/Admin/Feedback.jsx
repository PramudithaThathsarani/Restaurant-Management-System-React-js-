import React from 'react';

const Feedback= () => {
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
      flexWrap: 'wrap', // Enable wrapping
      justifyContent: 'center', // Center items horizontally
      gap: '20px', // Add gap between sections
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
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <h1>Feedback</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/menu" style={styles.navLink}>Menu</a>
          <a href="/reservation" style={styles.navLink}>Reservations</a>
          
        </nav>
      </header>
      <main style={styles.mainContent}>
        <div style={styles.sectionsContainer}>

         
        </div>
        
      </main>
    </div>
  );
}

export default Feedback;


import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const styles = {
  dashboard:{
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
  nav:{
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
    alignItems: 'center'
  }
};
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "",
    top:"40"
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#F5F5F5",
  };

  const inputStyle = {
    marginBottom: "15px",
    padding: "10px",
    width: "100%",
    maxWidth: "300px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    padding: "10px",
    width: "100%",
    maxWidth: "300px",
    fontSize: "16px",
    backgroundColor: "#808080",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const titleStyle = {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <h1>Restaurant Dashboard</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/menu" style={styles.navLink}>Menu</a>
          <a href="/reservation" style={styles.navLink}>Reservations</a>
         
        </nav>
      </header>
      <main style={styles.mainContent}>
      <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={titleStyle}>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={inputStyle}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
      </main>
    </div>
  );
};

export default Login;

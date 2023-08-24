import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleLogin = () => {
    if (username === 'anurag' && password === '1234') {
      setWrongPassword(false);

      // Redirecting to the Google Spreadsheet after successful login
      window.location.href = "https://docs.google.com/spreadsheets/d/1jFTvddQ-tEi7vUoCYJiaJRceuVCHuq0FAeRdxC8qFRY/edit#gid=0";
    } else {
      setWrongPassword(true);
    }
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'white' }}>
      <div style={{ background: '#00df9a', padding: '20px', borderRadius: '5px', textAlign: 'center', border: '2px solid #00bf8f', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: 'black', marginBottom: '20px' }}><strong>Admin Login</strong></h2>
        {wrongPassword && <p style={{ color: 'red', marginBottom: '10px' }}>Wrong password/username. Please try again.</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />
        <button onClick={handleLogin} style={{ background: '#00df9a', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
        <Link to="/Hero" style={{ color: 'white', display: 'block', marginTop: '10px' }}>ContactUs</Link>
      </div>
    </div>
  );
};

export default Login;
 
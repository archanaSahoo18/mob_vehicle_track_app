// Login.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../App.css'; // Ensure this is imported for the CSS styles to take effect

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate =useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
        setError('Please enter both username and password.');
        return;
      }
  
      if (username === 'MobUser' && password === 'mob') {
        setError('Password Validated');
        console.log("Logging in with:", { username, password });
        navigate("/bikeTrack")
        // Successful login logic here (e.g., navigate to another page)
      } else {
        setError('Invalid username or password.');
      }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">EVSPEER</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <span className='smallertext'style={{textAlign:'left',marginLeft:'2%'}}>Email</span>
          <input
            type="text"
            className="login-input"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
           <span className='smallertext'style={{textAlign:'left',marginLeft:'2%'}}>Password</span>
          <input
            type="password"
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <sapn className='smallertext' style={{textAlign:"right"}}>forgot Password?</sapn>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="login-button">Login</button>
          <span className='smallertext' style={{textAlign:"center"}}>Don't have an account?&nbsp;
            <Link to='/register'>Register </Link>
            {/* Register */}
            </span>
          <button type="submit" className="skip-button">Skip</button>
            {/* <Link to='/register'>Register </Link> */}
            <sapn>&nbsp;</sapn>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// Login.js
import React, { useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import '../App.css'; // Ensure this is imported for the CSS styles to take effect

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate =useNavigate();

  const handleLogin=()=>{
    navigate('/')
  }

  const handleRegister = (e) => {
    e.preventDefault();

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Register</h2>
        <form className="login-form" onSubmit={handleRegister}>
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
           <span className='smallertext'style={{textAlign:'left',marginLeft:'2%'}}>Confirm Password</span>
          <input
            type="password"
            className="login-input"
            placeholder="Enter your confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <sapn className='smallertext' style={{textAlign:"right"}}>forgot Password?</sapn>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="login-button">Sign Up</button>
          <span className='smallertext' style={{textAlign:"center"}}>Don't have an account?&nbsp;
          <Link to='/'>Login </Link></span>
          <button type="submit" className="skip-button" onClick={handleLogin}>Login</button>
            {/* <Link to='/register'>Register </Link> */}
            <sapn>&nbsp;</sapn>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

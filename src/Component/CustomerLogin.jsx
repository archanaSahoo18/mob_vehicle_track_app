// src/Login.js
import React, { useState } from 'react';
import ChangePassword from './ChangePassword';

const CustomerLogin = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendOtp = () => {
    alert(`OTP sent to: ${phone}`);
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") { // Using a hardcoded OTP for simplicity
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid OTP');
    }
  };


  return (
    <div className="login-container">
    <div className="login-card">
      <h2 className="app-title">EVSPEER</h2>
      <h3 className="login-title">Customer Login</h3>

      {isLoggedIn ? (
        <>
        <p className="success-message">Welcome, you’re logged in!</p>
       <ChangePassword/></> 
      ) : (
        <div className="login-form">
          <label className="smallertext"style={{textAlign:'left',marginLeft:'2%'}}>Phone Number</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="send-otp-button" onClick={handleSendOtp}>
            Send OTP
          </button>

          <label className="smallertext"style={{textAlign:'left',marginLeft:'2%'}}>Enter OTP</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="verify-otp-button" onClick={handleVerifyOtp}>
            Verify OTP
          </button>

          <div className="social-login">
            <span>Or login with:</span>
            <button className="google-login-button" onClick={() => alert("Login with Google")}>
              Google
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CustomerLogin;

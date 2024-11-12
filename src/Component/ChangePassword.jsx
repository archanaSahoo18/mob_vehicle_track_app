// Login.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../App.css'; // Ensure this is imported for the CSS styles to take effect

const ChangePassword = () => {
  const [username, setUsername] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [error, setError] = useState('');
  const navigate =useNavigate();

  const handleChangePwd = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !cnfPassword) {
      setError('All fields are required.');
      return;
    }

    if (newPassword !== cnfPassword) {
      setError('New password and confirmation password do not match.');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (newPassword === currentPassword) {
      setError('New password should be different from the current password.');
      return;
    }

    // Clear the error message and navigate to the next page if all validations pass
    setError('');
    navigate('/paymentGateway');
  };

  return (
    // <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Please Set Your Password</h2>
        <form className="login-form" onSubmit={handleChangePwd}>
        <span className='smallertext'style={{textAlign:'left',marginLeft:'2%'}}>Current Password</span>
          <input
            type="password"
            className="login-input"
            placeholder="Enter your current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
           <span className='smallertext'style={{textAlign:'left',marginLeft:'2%'}}>New Password</span>
          <input
            type="password"
            className="login-input"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
          />
         <span className='smallertext'style={{textAlign:'left',marginLeft:'2%'}}>Confirm Password</span>
          <input
            type="password"
            className="login-input"
            placeholder="Enter your confirm password"
            value={cnfPassword}
            onChange={(e) => setCnfPassword(e.target.value)}
          />
          <sapn className='smallertext' style={{textAlign:"right"}}>forgot Password?</sapn>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="login-button">Change Password</button>
            {/* <Link to='/register'>Register </Link> */}
            <sapn>&nbsp;</sapn>
        </form>
      </div>
    // </div>
  );
};

export default ChangePassword;

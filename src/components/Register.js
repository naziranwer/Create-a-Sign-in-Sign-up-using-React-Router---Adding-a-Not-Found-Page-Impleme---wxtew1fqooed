import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ handleRegisterSubmit, setNavigate }) {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (newEmail && newPassword) {
      handleRegisterSubmit(newEmail, newPassword);
    }
  };

  const handleRegisterToLogin = () => {
    setNavigate(true);
  };

  return (
    <div id='registerPage'>
      <h1 id='register-tag'>Register</h1>
      <form onSubmit={handleSubmitBtn}>
        <h3>Email</h3>
        <input
          placeholder='abc@gmail.com'
          type="text"
          name='name'
          id='register-email'
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <h3>Password</h3>
        <input
          placeholder='Enter password'
          type="password"
          name='name'
          id='register-password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        /><br />
        <input id='register-submit' type='submit' value='Submit' />
      </form>
      <br />
      <div>
        Already a User?
        <Link to="/"><button id='register-to-login' onClick={handleRegisterToLogin}>Login</button></Link>
      </div>
    </div>
  );
}

export default Register;

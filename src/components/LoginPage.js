/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from './LoginComponent';

const LoginPage = ({ handleChange, handleSubmit }) => (

  <div>
    <h3>Login</h3>
    <p>Enter your details to Login</p>
    <LoginComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
    <span>
or
      {' '}
      <Link to="/signup">Sign Up</Link>
    </span>
  </div>
);

export default LoginPage;

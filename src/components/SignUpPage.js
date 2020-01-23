/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import SignUpComponent from './SignUpComponent';

const SignUpPage = () => (
  <div>
    <h3>Sign Up</h3>
    <p>Enter your details below to sign up</p>
    <SignUpComponent />
    <p>
    Already have an account?
      <span><Link to="/">Login</Link></span>
    </p>
  </div>
);

export default SignUpPage;

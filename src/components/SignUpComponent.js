/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';


const SignUpComponent = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    {/* input for email */}
    <input
      type="text"
      title="Email"
      value=""
      placeholder="Email Address"
      name="email"
      onChange={handleChange}
    />
    {/* Input for password */}
    <input
      type="password"
      title="Password"
      value=""
      placeholder="Password"
      name="password"
      onChange={handleChange}
    />
    {/* Input for firstName */}
    <input
      type="text"
      title="Password"
      value=""
      placeholder="Firstname"
      name="firstName"
      onChange={handleChange}
    />
    {/* Input for lastName */}
    <input
      type="text"
      title="lastName"
      value=""
      placeholder="Lastname"
      name="lastName"
      onChange={handleChange}
    />

    {/* Login button */}
    <input
      type="submit"
      value="Sign Up"
    />
  </form>
);

export default SignUpComponent;

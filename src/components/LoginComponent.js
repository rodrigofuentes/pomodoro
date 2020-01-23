/* eslint-disable react/jsx-filename-extension */
import React from 'react';


const LoginComponent = ({ handleChange, handleSubmit }) => (
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
      type="text"
      title="Password"
      value=""
      placeholder="Password"
      name="password"
      onChange={handleChange}
    />

    {/* Login button */}
    <input
      type="submit"
      value="Login"
    />
  </form>
);

export default LoginComponent;

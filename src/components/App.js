/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import WelcomeContainer from './WelcomeContainer';
import LoginComponent from './LoginComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        isLoggedIn: false,
      },

    };
  }

  render() {
    return (
      <Router>
        <div>
          <LoginPage />
          <SignUpPage />
          <WelcomeContainer />
        </div>
      </Router>

    );
  }
}


// const App = () => (

//   <div className="AppContainer">
//     <WelcomeContainer />
//   </div>

// );

export default App;

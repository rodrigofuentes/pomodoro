import React, { Component } from 'react';
import { TaskList } from './TaskList.js'
import { Provider } from './Context'
import WelcomeContainer from './WelcomeContainer';

const App = ({ url }) => (
  <>
  <Provider>
    <WelcomeContainer />
    <TaskList />
  </Provider>
  </>
);

export default App;

import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { TaskList } from './TaskList.js'
import { Provider } from './Context'
import WelcomeContainer from './WelcomeContainer';

const App = ({ url }) => (
  <>
  <Provider>
    <TestButton />
    <p id="test">React-ing: check out the repo</p>
    <a href={url}>github.com/react-webpack</a>
    <WelcomeContainer />
    <TaskList />

  </Provider>
  </>
);

export default App;

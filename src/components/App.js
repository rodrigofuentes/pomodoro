import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { TaskList } from './TaskList.js'
import { Provider } from './Context'

class App extends Component {
  
  render() {
    return (
      <Provider>
        <div>
          <TaskList></TaskList>
        </div>
      </Provider>
    );
  }
}

export default App;

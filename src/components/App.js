import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import WelcomeContainer from './WelcomeContainer';

const Button = ({ className }) => <button className={className}>TEST STYLE</button>;

const TestButton = styled(Button)`
  ${tw`border border-indigo-500 text-indigo-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-indigo-500 hover:text-white`}
`;

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://github.com/rodrigofuentes/react-webpack',
    };
  }

  render() {
    return (
      <div>
        <TestButton>testings</TestButton>
        <p id="test">React-ing: check out the repo</p>
        <a href={this.state.url}>github.com/react-webpack</a>

      </div>
    );
  }
}

const App = ({ url }) => (
  <>
    <TestButton />
    <p id="test">React-ing: check out the repo</p>
    <a href={url}>github.com/react-webpack</a>
    <WelcomeContainer />
  </>
);

export default App;

import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import WelcomeContainer from './WelcomeContainer';

// const Button = ({ className }) => {
//   const clickIt = () => {
//     console.log('clicked');
//   };
//   return (
//     <button className={className} onClick={clickIt}>
//       style components and Tailwind CSS
//     </button>
//   );
// };

const Button = styled.button`
  ${tw`border border-indigo-500 text-indigo-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-indigo-500 hover:text-white`}
`;

const App = ({ url }) => {
  const test = 'CLICKED!!!!!';
  return (
    <>
      <Button onClick={() => console.log(test)}>
        style components and Tailwind CSS
      </Button>
      <WelcomeContainer />
    </>
  );
};

export default App;

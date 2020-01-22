/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';


const Quote = (props) => {
  const { dailyQuote } = props;
  return (
    <div className="quote">
      {dailyQuote}
    </div>
  );
};


export default Quote;

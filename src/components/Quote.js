/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';


const Quote = (props) => {
  const { quoteText, quoteAuthor } = props;
  return (
    <div className="quote">
      <p>
        {quoteText}
        <span>
          {' '}
            -
          {quoteAuthor}
        </span>
      </p>
    </div>
  );
};


export default Quote;

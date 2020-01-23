/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import Quote from './Quote';
import DateCompo from './Date';


const DateQuoteContainer = ({
  quoteText, quoteAuthor, today, time,
}) => (
  <div className="dateQuote">
    <DateCompo
      today={today}
      time={time}
    />
    <Quote
      quoteText={quoteText}
      quoteAuthor={quoteAuthor}
    />
  </div>
);

export default DateQuoteContainer;

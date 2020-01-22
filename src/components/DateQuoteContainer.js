/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import Quote from './Quote';
import DateCompo from './Date';


const DateQuoteContainer = ({ dailyQuote, today, time }) => (
  <div>
    <DateCompo
      today={today}
      time={time}
    />
    <Quote
      dailyQuote={dailyQuote}
    />
  </div>
);

export default DateQuoteContainer;

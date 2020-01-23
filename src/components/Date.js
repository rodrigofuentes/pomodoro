/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';


const DateCompo = ({ today, time }) => (
  <div className="date">
    <p>
      {today}
      <span>
        {' '}
        {time}
      </span>

    </p>

  </div>
);

export default DateCompo;

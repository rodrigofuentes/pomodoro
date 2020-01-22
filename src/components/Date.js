/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';


const DateCompo = ({ today, time }) => (
  <div className="date">
    <p>{today}</p>
    <p>{time}</p>

  </div>
);

export default DateCompo;

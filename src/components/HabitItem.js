/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const HabitItem = ({
  habitText, habitDate, id, deleteHabit,
}) => (
  <div>
    <p>
      {habitText}
      <span>
        {' '}
        {habitDate}
      </span>
    </p>
    <input type="submit" value="Delete" id={id} onClick={deleteHabit} />
  </div>
);

export default HabitItem;

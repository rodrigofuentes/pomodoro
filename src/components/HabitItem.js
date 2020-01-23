/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const HabitItem = ({
  habitText, habitDate, id, deleteHabit,
}) => (
  <div className="habit">
    <p>
      {habitText}
      <span>
        {' '}
        {/* {habitDate} */}
      </span>
    </p>
    <input type="submit" value="x" className="deleteHabit" id={id} onClick={deleteHabit} />
  </div>
);

export default HabitItem;

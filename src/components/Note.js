/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';


const Note = (props) => {
  const { value, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="noteForm">
      <label htmlFor="Note">
        <p>Note for the Day</p>
        <textarea
          name="Note"
          value={value}
          onChange={handleChange}
          placeholder="Enter Note"
          type="text"
          row="10"
          cols="50"
        />
      </label>
      <input id="saveNote" type="submit" value="Save Note" />
    </form>
  );
};


export default Note;

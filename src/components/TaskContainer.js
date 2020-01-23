import React from 'react';
import { TextField } from './TextField'
import { Checkbox } from './Checkbox'
import { Context, Consumer } from './Context'

export const TaskContainer = () => {
  return (
    <Consumer>
      {({state}) => (
        <div>
          Number {state.priority}
          <Checkbox></Checkbox>
          <TextField></TextField>
        </div>
      )}
    </Consumer>
  );
}

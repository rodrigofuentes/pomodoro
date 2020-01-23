import React from 'react';
import { TextField } from './TextField'
import { Checkbox } from './Checkbox'
import { Context } from './Context'

export const TaskContainer = () => {
  return (
    <Context.Consumer>
      {({state}) => (
        <div>
          Number {state.priority}
          <Checkbox></Checkbox>
          <TextField></TextField>
        </div>
      )}
    </Context.Consumer>
  );
}
{/* <Checkbox completed={completed} toggle={toggle}></Checkbox> */}
{/* <TextField submit={submit} task={task}></TextField> */}
{/* <Checkbox completed={completed}></Checkbox> */}
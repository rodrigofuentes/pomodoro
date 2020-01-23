import React from 'react';
import { TextField } from './TextField'
import { Checkbox } from './Checkbox'
import { Consumer } from './Context'
import { Pomodoros } from './Pom'

export const TaskContainer = ({ priority }) => {
  return (
    <div>
      Task {priority}
      <Checkbox />
      <TextField priority={priority} />
      <Pomodoros />

    </div>
  );
}

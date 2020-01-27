import React from 'react';
import { Consumer } from './Context'

export const Checkbox = ({ priority }) => {
  return (
    <Consumer>
      {({ store, state }) => (
        <div>
          {'Completed: '}
          <input 
            disabled={state.taskArray[priority].disabled}
            className="checkbox" 
            type="checkbox"
            id={state.taskArray[priority].id}
            name={priority}
            priority={priority}
            onChange={(e) => {store.toggleCompleted(e.target)}}
            // defaultChecked
            /><br/>
        </div>
      )}
    </Consumer>
  )
}

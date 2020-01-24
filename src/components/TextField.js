import React from 'react';
import { Consumer } from './Context'

export const TextField = ({ priority }) => {
  return (
    <Consumer>
      {({store, state}) => (
        <div>
          <input
            id={state.taskArray[priority].id}
            type="text" 
            className="task" 
            name={priority}
            priority={priority}
            status={state.taskArray[priority].status}
            placeholder="Enter Next Task"
            value={state.taskArray[priority].task}
            onChange={(e) => store.changeState(priority, 'task', e.target.value)}
            onBlur={(e) => {store.updateTask(e.target)}}
            onKeyPress={(e) => {e.key === "Enter" ? store.updateTask(e.target) : ''}} 
            /><br/>
          <button disabled={state.taskArray[priority].disabled} className="delete" id={state.taskArray[priority].id} name={priority} priority={priority} onClick={(e) => {store.updateTask(e.target)}}>Delete Task</button>
        </div>
      )}
    </Consumer>
  )
}
// store.updateTask(e.target) 
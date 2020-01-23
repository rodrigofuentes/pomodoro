import React from 'react';
import { Consumer } from './Context'

export const TextField = ({ priority }) => {
  return (
    <Consumer>
      {({store, state}) => (
        <div>
          <input 
            id="none"
            type="text" 
            className="task" 
            name={priority}
            priority={priority}
            status='active'
            placeholder="Enter Next Task"
            onBlur={(e) => {store.updateTask(e.target); console.log(e.target.attributes, e.target.attributes.priority.value, 'id :::::' , e.target.id)}}
            onKeyPress={(e) => { e.key === "Enter" ? store.updateTask(e.target) : ''}}   
            /><br/>
          <button className="delete" id="none" name={priority} priority={priority} onClick={(e) => {store.updateTask(e.target); console.log(e.target.attributes.class.value)}}>Delete Task</button>
        </div>
      )}
    </Consumer>
  )
}
// store.updateTask(e.target) 
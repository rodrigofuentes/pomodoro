import React from 'react';
import { Context, Consumer } from './Context'

export const TextField = () => {
  return (
    <Consumer>
      {({store}) => (
        <div>
          <input 
            type="text" 
            name="task" 
            placeholder="Enter Next Task"
            onBlur={(e) => {store.updateTask(e.target.value)}}
            onKeyPress={(e) => { e.key === "Enter" ? store.updateTask(e.target.value) : ''}}   
            /><br/>
        </div>
      )}
    </Consumer>
  )
}
import React from 'react';
import { Context } from './Context'

export const TextField = () => {
  return (
    <Context.Consumer>
      {({updateTask, submit}) => (
        <div>
          <input 
            type="text" 
            name="task" 
            placeholder="Enter Next Task"
            onBlur={(e) => {updateTask(e.target.value); submit()}}
            onKeyPress={(e) => { e.key === "Enter" ? context.updateTask(e.target.value) : ''}}   
            /><br/>
        </div>
      )}
    </Context.Consumer>
  )
}
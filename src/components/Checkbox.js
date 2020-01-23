import React from 'react';
import { Context } from './Context'

export const Checkbox = () => {
  return (
    <Context.Consumer>
      {({store, state}) => (
        <div>
          {'Completed: '}
          <input 
            type="checkbox" 
            name="checkbox"
            onChange={() => {store.toggleCompleted()}}
            onClick={() => {console.log('onClick: task--', state.task)}}
            defaultChecked
            /><br/>
        </div>
      )} 
    </Context.Consumer>
  )
}

// export const Checkbox = ({toggle, completed}) => {
// onClick={toggle()}
{/* {...completed ? checked: ''} */}
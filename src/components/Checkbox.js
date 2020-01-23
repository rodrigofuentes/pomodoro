import React from 'react';
import { Consumer } from './Context'

export const Checkbox = () => {
  return (
    <Consumer>
      {({ store }) => (
        <div>
          {'Completed: '}
          <input 
            type="checkbox" 
            name="checkbox"
            onChange={() => {store.toggleCompleted()}}
            defaultChecked
            /><br/>
        </div>
      )} 
    </Consumer>
  )
}

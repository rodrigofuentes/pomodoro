import React, { Component, useState, useContext } from 'react';
import { TaskContainer } from './TaskContainer.js'

export const Context = React.createContext();
export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numToDo: 5,
      task: '',
      priority: 2,
      completed: true
    }
  }

  submit() {
    console.log("submit");
    console.log(this.state.completed);   
  }

  toggleCompleted() {
    this.setState({
      completed: !this.state.completed
    });
    console.log('toggleCompleted(): ', this.state.completed);   
  }

  updateTask(text) {
    console.log('target value: ', text)
    if (text != this.state.task) {
      this.setState({
        task: text
      });
    }
    console.log('updateTask() complete-status: ', this.state.completed);   
  }
  

  render () {
    return (
      <Context.Provider value={{store: this, state: this.state, 
      submit: () => this.submit(),
      updateTask: (d) => this.updateTask(d)}}>
        {this.props.children}
      </Context.Provider>

    )
  }
}
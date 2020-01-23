import React, { Component, useState, useContext } from 'react';
import { TaskContainer } from './TaskContainer.js'

export const Context = React.createContext();
export const Consumer = Context.Consumer;
export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTasks: 5,
      task: '',
      priority: 2,
      completed: true,
      id: '42',
      loading: false
    }
  }

  submit() {
    console.log("submit");
  }

  toggleCompleted() {
    this.setState({
      completed: !this.state.completed
    });
  };

  async postTask(task, priority) {
    const response = await fetch('/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        task,
        priority
      }
    });
    return await response.json();
  };

  async updateTask(text) {
    if (text != this.state.task) {
      this.setState({
        loading: true,
        task: text
      });
      await postTask(text, this.state.priority)
    } 
  }

  componentDidMount() {

  }

  render () {
    return (
      <Context.Provider value={{store: this, state: this.state}}>
        {this.props.children}
      </Context.Provider>

    )
  }
}
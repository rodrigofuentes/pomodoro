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
      id: null,
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

  updateTask(text) {
    if (text != this.state.task) {
      this.setState({
        loading: true,
        task: text
      });
      if (this.state.id === null) {
        fetch('/task', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            task: text,
            priority: this.state.priority
          })
        })
        .then(response => response.json())
        .then(parsed => {
          this.setState({
            loading: false,
            id: parsed[0].id
          })
          console.log(parsed, this.state.id)})
      } else {
        if (text !== '') {
          fetch('/task', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              task: text,
              id: this.state.id
            })
          })
        } else {
          fetch('/task', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: this.state.id
            })
          })
        }
      }
    }
  };




  render () {
    return (
      <Context.Provider value={{store: this, state: this.state}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
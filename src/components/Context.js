import React, { Component, useState, useContext } from 'react';

export const Context = React.createContext();
export const Consumer = Context.Consumer;

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTasks: 5,
      task: '',
      priority: 3,
      completed: false,
      id: 'none',
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

  updateTask(target) {
    if (target.attributes.class.value === 'task') {
      if (target.value != '') {
        this.setState({
          loading: true,
          task: target.value
        });
        if (target.id === 'none' || target.attributes.status.value === 'deleted') {
          console.log('taget.value: ', target.value, eval(target.attributes.priority.value))
          fetch('/task', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              task: target.value,
              priority: target.attributes.priority.value
            })
          })
          .then(response => response.json())
          .then(parsed => {
            console.log(parsed, this.state.id)
            this.setState({
              loading: false,
            })
            target.id=parsed[0].id
            const deleteButton = document.getElementsByClassName("delete");
            for (let element of deleteButton)
              if (element.name === target.attributes.priority.value) {
                element.setAttribute('id', target.id)
                console.log(element)
              }
            })
        } else {
          fetch('/task', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              task: target.value,
              id: target.id
            })
          })
        }
      }
    } else if (target.attributes.class.value === 'delete') {
      if (target.id !== 'none') {
        fetch('/task', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: target.id
          })
        })
        const textFields = document.getElementsByClassName("task");
        console.log(textFields)
        for (let element of textFields) {
          if (element.name === target.name) {
            element.value = '';
            element.setAttribute('status', 'deleted');
            console.log('DELETD ELEMTN ::', element)
          }
        }
      }
    }
  };

  componentDidMount() {
    let currentDate = new Date;
    currentDate.setUTCHours(5);
    currentDate.setMilliseconds(0);
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0)
    fetch('/task/get'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: currentDate
        })
      }
    )
    .then(response => response.json())
    .then(data => console.log('DATA::::::: ', data))
  }

  render () {
    return (
      <Context.Provider value={{store: this, state: this.state}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
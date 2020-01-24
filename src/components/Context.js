import React, { Component, useState, useContext } from 'react';

export const Context = React.createContext();
export const Consumer = Context.Consumer;

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      taskArray: {
        1: {task: '', priority: 1, completed: false, id: 'none', status: 'active', checked: '', disabled: true},
        2: {task: '', priority: 2, completed: false, id: 'none', status: 'active', checked: '', disabled: true},
        3: {task: '', priority: 3, completed: false, id: 'none', status: 'active', checked: '', disabled: true},
        4: {task: '', priority: 4, completed: false, id: 'none', status: 'active', checked: '', disabled: true},
        5: {task: '', priority: 5, completed: false, id: 'none', status: 'active', checked: '', disabled: true},
        6: {task: '', priority: 6, completed: false, id: 'none', status: 'active', checked: '', disabled: true},
      }
    }
  }
  
  getState(num){
    return {...this.state.taskArray[num]}
  }
  
  changeState(num, attribute, val) {
    this.setState({
      taskArray: {...this.state.taskArray, [num]: {...this.state.taskArray[num], [attribute]: val}}
    });
  };

  clearTaskState(num) {
    this.setState({
      taskArray: {...this.state.taskArray, [num]: {task: '', priority: num, completed: false, id: 'none', status: 'active', checked: '', disabled: true}}});
  }

  addNewTaskState(taskNum = Object.keys(this.state.taskArray).length + 1) {
    this.setState({
      taskArray: {...this.state.taskArray, [taskNum]: {task: '', priority: [taskNum], completed: false, id: 'none', status: 'active', checked: '', disabled: 'true'}}
    });
  }

  deleteTaskState(taskNum = Object.keys(this.state.taskArray).length) {
    const newTaskArray = {...this.state.taskArray}
    delete newTaskArray[taskNum]
    this.setState({
      taskArray: newTaskArray
    })
  }

  toggleCompleted(target) {
    if (target.id !== 'none') {
      fetch('/task/toggleTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: target.id
        })
      })
      this.changeState(target.name, 'complete', !this.getState(target.name).complete)    }
  };

  updateTask(target) {
    if (target.attributes.class.value === 'task') {
      if (target.value !== '') {
        this.setState({
          loading: true,
        });
        // this.changeState(target.name, 'task', target.value)
        console.log('updateTaskState:', this.getState(target.name).task)
        if (target.id === 'none' || this.getState(target.name).status === 'deleted') {
          fetch('/task', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              task: target.value,
              priority: target.name
            })
          })
          .then(response => response.json())
          .then(parsed => {
            this.setState({
              loading: false,
            })
            this.changeState(target.name, 'disabled', false)
            this.changeState(target.name, 'id', parsed[0].id);
            this.changeState(target.name, 'status', 'active')
            // target.id=parsed[0].id
            // target.attributes.status.value = "active";

            // const deleteButton = document.getElementsByClassName("delete");
            // for (let element of deleteButton) {
            //   if (element.name === target.attributes.priority.value) {
            //     element.setAttribute('id', target.id);
            //     // elem.removeAttribute('disabled')
            //   }
            // }
            // const prior = target.attributes.priority.value;
            // const checkBox = document.getElementsByClassName("checkbox");
            // for (let elem of checkBox) {
            //   if (elem.name === prior) {
            //     elem.setAttribute('id', target.id);
            //     // elem.removeAttribute('disabled')
            //     console.log('checkbox element:::', elem)
            //   }
            // }
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
        });
        // const textFields = document.getElementsByClassName("task");
        // for (let element of textFields) {
        //   if (element.name === target.name) {
        //     element.value = '';
        //     element.setAttribute('status', 'deleted');
        //     console.log('DELETD ELEMTN ::', element)
        //   }
        // }
        this.clearTaskState(target.name);
      }
    }
  };

  componentDidMount() {
    // let currentDate = new Date;
    // currentDate.setUTCHours(5);
    // currentDate.setHours(0);
    // currentDate.setMinutes(0);
    // currentDate.setSeconds(0)
    // currentDate.setMilliseconds(0);
    // document.cookie = `day=${JSON.stringify(currentDate)}`
    fetch('/task')
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
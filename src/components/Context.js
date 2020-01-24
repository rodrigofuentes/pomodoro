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
    // if (target.attributes.class.value === 'task') {
      // if (target.value !== '') {
      //   // this.setState({
      //   //   loading: true,
      //   // });
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
            // this.setState({
            //   loading: false,
            // })
            this.changeState(target.name, 'disabled', false)
            this.changeState(target.name, 'id', parsed[0].id);
            this.changeState(target.name, 'status', 'active')
          })
        } else {
          if (target.value !== '') {
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
          } else {
            fetch('/task', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: target.id
              })
            });
            this.clearTaskState(target.name);
          }
        }
      // }
    // } else if (target.attributes.class.value === 'delete') {
    //   if (target.id !== 'none') {
    //     fetch('/task', {
    //       method: 'DELETE',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         id: target.id
    //       })
    //     });
    //     this.clearTaskState(target.name);
    //   }
    // }
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
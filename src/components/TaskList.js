import React, { Component } from 'react';
import { TaskContainer } from './TaskContainer.js'


export class TaskList extends Component {
  
  // ToDoArray = [];
  // populateState = (num = this.state.numToDo, array = this.state.taskInfo) => {
  //   for (let i = 0; i < num; i += 1) {
  //     if (array[i].priority !== i) {
  //       array[i] = {
  //         task = '',
  //         priority: i,
  //         completed: false
  //       };
  //     }
  //   }
  //   ToDoArray = array.map(({priority, completed}) => 
  //     <TaskContainer priority={priority} completed={completed} toggle={toggleCompleted} submit={submit} task={array[i].task}></TaskContainer>);
  // };




  // ToDoArray = [];
  // createTaskContainers = () => {
  //   for (let i = 1; i < this.state.numToDo; i += 1) {
  //     if (i === this.state.taskInfo[i].priority) {
  //       ToDoArray.push((<TaskContainer priority={i} completed={this.state.taskInfo.completed} toggle={toggleCompleted}></TaskContainer>))
  //     } else {
  //       this.state.taskInfo.push ({
  //         priority: i,
  //         completed: false
  //       });
  //       ToDoArray.push((<TaskContainer priority={i} completed={false} toggle={toggleCompleted}></TaskContainer>))
  //     }
  //   }
  //   return ToDoArray;
  // }

  // toDoItem = (<TaskContainer priority={++this.state.taskInfo.numToDo} completed={false} toggle={toggleCompleted}></TaskContainer>);

  // createNewToDo = () => {
  //   // ToDoArray.push(toDoItem);
  //   // or change state by pushing new object into taskInfo.
  //   populateState(++this.state.numToDo, this.state.taskInfo)
  // }

  // removeLastToDO = () => {
  //   this.state.taskInfo.pop();
  // }




  render() {
    return (
      <div>
        <h3>Most important Task of the Day</h3>
        <TaskContainer priority={1} />
        <h3>Other Important Tasks</h3>
        <TaskContainer priority={2} />
        <br/>
        <TaskContainer priority={3} />
        <h3>Additional Tasks</h3>
        <TaskContainer priority={4} />
        <br/>
        <TaskContainer priority={5} />
        <br/>
        <TaskContainer priority={6} />
        <br/>
        <button onClick={() => console.log('clicked Add')}>Add New To Do Item</button>
        <button onClick={() => console.log('clicked Remove')}>Remove Last To Do Item </button>
      </div>
    );
  }
}

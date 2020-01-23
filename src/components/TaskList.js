import React, { Component } from 'react';
import { TaskContainer } from './TaskContainer.js'


export class TaskList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     numToDo: 5,
  //     taskInfo: {  
  //         task: '',
  //         priority: 2,
  //         completed: false
  //       }
  //   };
  // };


  // submit() {
  //   console.log("submit");
  //   console.log(this.state.taskInfo.completed);   
  // }

  // toggleCompleted() {
  //   this.setState({
  //     taskInfo: {completed: !this.state.taskInfo.completed}
  //   });
  //   console.log('toggleCompleted(): ', this.state.taskInfo.completed);   
  // }

  // updateTask(text) {
  //   if (text != this.state.taskInfo.task) {
  //     this.setState({
  //       taskInfo: {task: text}
  //     });
  //   }
  //   console.log('updateTask() complete-status: ', this.state.taskInfo.completed);   
  // }


  
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
    // populateState()    
    return (
      <div>
        <h3>Most important Task of the Day</h3>
        <TaskContainer></TaskContainer>
        <h3>Additional Tasks</h3>
        <button onClick={() => console.log('clicked Add')}>Add New To Do Item</button>
        <button onClick={() => console.log('clicked Remove')}>Remove Last To Do Item </button>
      </div>
    );
  }
}

{/* {ToDoArray[0]} */}
{/* {ToDoArray.slice(1)} */}
{/* <button onClick={createNewToDo()}>Add New To Do Item</button>
<button onClick={removeLastToDO()}>Remove Last To Do Item </button> */}
{/* <TaskContainer priority={this.state.taskInfo[0].priority} completed={this.state.taskInfo[0].completed}></TaskContainer>; */}

{/* <TaskContainer 
priority={this.state.taskInfo.priority} 
submit={() => this.submit()} 
toggle={() => this.toggleCompleted()} 
comp={this.state.taskInfo.completed}
updateTask={(t) => this.updateTask(t)}
task={this.state.taskInfo.task}
></TaskContainer> */}
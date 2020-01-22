import { Component } from 'react';
import { ToDoContainer } from './ToDoContainer.js/index.js'



export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numToDo: 5,
      toDoInfoArray: [
        {  
          task: '',
          priority: 1,
          completed: false
        }
      ]
    };
  };

  // toggleComplete = (e) => {
  //   this.setState({
  //     toDoInfoArray[e.target.getAttribute('priority')]
  //   })
  //   this.state.toDoInfoArray[e.target.getAttribute('priority')].completed = !this.state.toDoInfoArray[e.target.getAttribute('priority')].completed;
  // }

  
  // ToDoArray = [];
  // populateState = (num = this.state.numToDo, array = this.state.toDoInfoArray) => {
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
  //     <ToDoContainer priority={priority} completed={completed} toggle={toggleComplete} submit={submit} task={array[i].task}></ToDoContainer>);
  // };




  // ToDoArray = [];
  // createToDoContainers = () => {
  //   for (let i = 1; i < this.state.numToDo; i += 1) {
  //     if (i === this.state.toDoInfoArray[i].priority) {
  //       ToDoArray.push((<ToDoContainer priority={i} completed={this.state.toDoInfoArray.completed} toggle={toggleComplete}></ToDoContainer>))
  //     } else {
  //       this.state.toDoInfoArray.push ({
  //         priority: i,
  //         completed: false
  //       });
  //       ToDoArray.push((<ToDoContainer priority={i} completed={false} toggle={toggleComplete}></ToDoContainer>))
  //     }
  //   }
  //   return ToDoArray;
  // }

  // toDoItem = (<ToDoContainer priority={++this.state.toDoInfoArray.numToDo} completed={false} toggle={toggleComplete}></ToDoContainer>);

  // createNewToDo = () => {
  //   // ToDoArray.push(toDoItem);
  //   // or change state by pushing new object into toDoInfoArray.
  //   populateState(++this.state.numToDo, this.state.toDoInfoArray)
  // }

  // removeLastToDO = () => {
  //   this.state.toDoInfoArray.pop();
  // }

  // submit = (e) => {
  //   console.log("submit")
  // }


  render() {
    populateState()    
    return (
      <div>
        <h3>Most important Task of the Day</h3>
        <ToDoContainer priority={this.state.toDoInfoArray[0].priority} completed={this.state.toDoInfoArray[0].completed}></ToDoContainer>;
        <h3>Additional Tasks</h3>
        <button onClick={createNewToDo()}>Add New To Do Item</button>
        <button onClick={removeLastToDO()}>Remove Last To Do Item </button>
      </div>
    );
  }
}

{/* {ToDoArray[0]} */}
{/* {ToDoArray.slice(1)} */}
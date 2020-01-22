import { TextField } from './TextField.js';
import { Checkbox } from './TextField.js';


export default ToDoContainer = ({ priority, completed }) => {
  return (
    <div>
      Number {priority}
      {/* <Checkbox completed={completed} toggle={toggle}></Checkbox> */}
      {/* <TextField submit={submit} task={task}></TextField> */}
      <Checkbox completed={completed}></Checkbox>
      <TextField></TextField>
    </div>
  );
}
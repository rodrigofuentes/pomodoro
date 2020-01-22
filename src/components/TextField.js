

export default TextField = ({props}) => {
  return (
    <div>
      <input 
        type="text" 
        name="task" 
        placeholder="Enter Next Task"
        />{task}<br/>
    </div>
  )
}
// onKeyPress={(e) => { e.key === "Enter" ? props.submit() : '' }}   
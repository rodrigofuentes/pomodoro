

export default Checkbox = ({toggle, completed}) => {
  return (
    <div>
      <input 
        type="checkbox" 
        name="checkbox"
        /><br/>
    </div>
  )
}

// onClick={toggle()}
{/* {...completed ? checked: ''} */}
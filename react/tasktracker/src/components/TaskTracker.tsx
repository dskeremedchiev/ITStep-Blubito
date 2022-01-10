import "./TaskTracker.css";

function TaskTracker(props:any){
    const className = "tasktracker "  +  props.className;
    return (     
    <ul className={className}>
        {props.children}
    </ul>
  )
}

export default TaskTracker;
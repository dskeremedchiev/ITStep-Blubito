import './SingleTask.css';
import TaskDate from './TaskDate';

function SingleTask(props: any) {
    const className = "tasktracker-task "  +  props.className;
    return (
        <li className={className}>
            <TaskDate date={props.date} className="card" />
            <div>{props.tasktitle}</div>
            <div>{props.status}</div>
        </li>
    );
}


export default SingleTask;
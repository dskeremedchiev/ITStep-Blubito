import './TaskDate.css';

function TaskDate(props: any) {
    const className = "tasktracker-task__date "  +  props.className;

    return (
        <div className={className}>
            <div>{props.date.toLocaleDateString('de-DE', { month: 'long' })}</div>
            <div>{props.date.toLocaleDateString('de-DE', { day: "2-digit" })}</div>
            <div>{props.date.getFullYear()}</div>
        </div>
    )

}

export default TaskDate;
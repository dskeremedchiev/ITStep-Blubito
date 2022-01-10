import './App.css';
import SingleTask from './components/SingleTask';
import TaskTracker from './components/TaskTracker';
import {tasks} from "./tasks";

function App() {
  return (
    <div className="App card">
      <h1>Task tracker</h1>
      <TaskTracker className="card">
        {tasks.map( (task, index) => ( <SingleTask className="card"
          tasktitle={task.tasktitle}
          date={task.date}
          status={task.status}
          key={index}
        />)
        )}
        {/* <SingleTask className="card"
          tasktitle={tasks[0].tasktitle}
          date={tasks[0].date}
          status={tasks[0].status}
        />
        <SingleTask className="card"
          tasktitle={tasks[1].tasktitle}
          date={tasks[1].date}
          status={tasks[1].status}
        />
        <SingleTask className="card"
          tasktitle={tasks[2].tasktitle}
          date={tasks[2].date}
          status={tasks[2].status}
        /> */}
      </TaskTracker>
    </div>
  );
}

export default App;

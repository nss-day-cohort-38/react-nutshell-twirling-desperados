import React , {useState, useEffect} from "react"
import TaskManger from "../../modules/TaskManger"

const EditTaskForm = (props) => {
    const [task, setTask] = useState ({task:"", completionDate: ""});
    const [isLoading, setIsLoading] = useState (false);
};
const handleFieldChange = evt => {
    const stateToChange ={...task};
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
};
const updateExistingTask = evt => {
evt.preventDefault()
setIsLoading(true);

const editedTask = {
    id :props.match.params.taskId,
    task: task.task,
    completionDate: task.completionDate
};
TaskManger.update(editedTask)
.then(() =>props.history.push("/tasks"));
} 

useEffect(()=>{
    TaskManger.get(props.match.params.taskId)
    .then(task =>{
        setTask(task);
        setIsLoading(true)
    });
},[props.match.params.taskId]);

return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="task"
              value={task.task}
            />
            <label htmlFor="task">Task</label>

            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="completionDate"
              value={task.completionDate}
            />
            <label htmlFor="completionDate">Completion Date</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingTask}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
)


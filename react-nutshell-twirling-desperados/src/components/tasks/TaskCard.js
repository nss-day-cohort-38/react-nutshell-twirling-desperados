import React from 'react'
import TaskManger from '../../modules/TaskManger';

const TaskCard = props => {
  const handleFieldChange = () => {
    TaskManger.completedTask(props.task)
      .then(() => props.getTasks())
  }
  return (
    <div className="taskCard">
      {props.task.isComplete ? null : <div className="taskCard-content">
        <h3>Task: <span className="card-taskName">
          {props.task.task}
        </span></h3>
        <p>Completion Date: {props.task.completionDate}</p>
        <button type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        <button type="button" onClick={() => props.history.push(`/task/${props.task.id}/edit`)}>Edit</button>
        <input type="checkbox"
          required
          className="forms-control"
          id="tasks"
          checked={props.task.isComplete}
          onChange={handleFieldChange}
        />
        <label htmlFor="completed">Completed</label>
      </div>}
    </div>
  )
}
export default TaskCard
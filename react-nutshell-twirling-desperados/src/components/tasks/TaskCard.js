import React from 'react'

const TaskCard = props => {
    return (
        <div className="taskCard">
      <div className="taskCard-content">
        <h3>Task: <span className="card-taskName">
          {props.task.task}
        </span></h3>
        <p>Completion Date: {props.task.completionDate}</p>
        <button type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        <button type="button" onClick={()=> props.history.push(`/task/${props.task.id}/edit`)}>Edit</button>
      </div>
    </div>
    )
}
export default TaskCard
import React, { useState, useEffect, useImperativeHandle } from "react";
import TaskManger from "../../modules/TaskManger";

const userNow = parseInt(sessionStorage.getItem("userCredentials"));

const EditTaskForm = props => {
  const [task, setTask] = useState({
    task: "",
    completionDate: "",
    isComplete: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };
  const updateExistingTask = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedTask = {
      id: props.match.params.taskId,
      task: task.task,
      completionDate: task.completionDate,
      userId: userNow
    };
    TaskManger.update(editedTask).then(() => props.history.push("/tasks"));
  };

  useEffect(() => {
    TaskManger.get(props.match.params.taskId).then(task => {
      setTask(task);
      setIsLoading(false);
    });
  }, [props.match.params.taskId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="task">Task: </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="task"
              value={task.task}
            />
            <label htmlFor="completionDate">Completion Date: </label>
            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="completionDate"
              value={task.completionDate}
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingTask}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
export default EditTaskForm;

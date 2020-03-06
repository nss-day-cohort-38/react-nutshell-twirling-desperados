import React, { useState } from 'react';
import TaskManager from '../../modules/TaskManger';

const AddTaskForm = (props) => {
    const [task, setTask] = useState({ task: "", completionDate: "" });
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };
    const constructNewTask = evt => {
        evt.preventDefault();
        if (task.task == "" || task.completionDate == "") {
            window.alert("Please enter task and expected completion date");
        } else {
            setIsLoading(true);
            TaskManager.post(task)
                .then(props.history.push("/tasks"));
        };
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text"
                                required
                                onChange={handleFieldChange}
                                id="task"
                                placeholder="taskName" />
                            <label htmlFor="task">Task</label>
                            <input type="text"
                                required
                                onChange={handleFieldChange}
                                id="completionDate"
                                placeholder="completionDate" />
                            <label htmlFor="completionDate">Completion Date</label>
                        </div>
                        <div className="alignRight">
                            <button type="button"
                                disabled={isLoading}
                                onClick={constructNewTask}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
};
export default AddTaskForm
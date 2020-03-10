import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard'
import TaskManager from '../../modules/TaskManger';

const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        return TaskManager.getAll().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    };
    useEffect(() => {
        getTasks();
    }, []);
    const deleteTask = (id) => {
        TaskManager.delete(id)
            .then(() => TaskManager.getAll().then(setTasks))
    }
    return (
        <React.Fragment>
            <section className="task-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/tasks/addtask") }}>
                    New Task
  </button>
            </section>
            <div className="container-taskCards">
                {tasks.map(task =>
                    <TaskCard
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        getTasks={getTasks}
                        {...props} />)}
            </div>
        </React.Fragment>
    )
}
export default TaskList

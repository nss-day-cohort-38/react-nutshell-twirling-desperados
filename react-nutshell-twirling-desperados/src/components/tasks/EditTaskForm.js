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
const updateExistingTask =

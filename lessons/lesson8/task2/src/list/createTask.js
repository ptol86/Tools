import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector(".task-input");
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }

    taskTitleInputElem.value = "";
    
    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString(),
        
    }
    createTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem("tasksList", newTasksList);
            renderTasks();
        });
 
    
};

// 1. Prepare data 
// 2. Write data to Data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update Ui based on new data
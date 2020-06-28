import { renderTasks } from "./renderer.js";
import { setItem } from "./storage.js";
import { deleteTask, getTasksList } from "./tasksGateway.js";

export const onDeleteTask = (el) => {
    const deleteBtn = el.target.classList.contains("list-item__delete-btn");
    
    if (!deleteBtn) {
        return;
    }
    
    const taskId = el.target
        .closest(".list-item")
        .querySelector(".list-item__checkbox")
        .dataset.id;

    deleteTask(taskId)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem("tasksList", newTasksList);
            renderTasks();
        })
 
    
};
const baseUrl = 'https://5ef08e01ad6d71001617a596.mockapi.io/api/v1/tasks';

const mapTasks = tasks =>
    tasks.map(({ id, ...rest }) => ({ ...rest, id: id }));

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks));
}

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(taskData)
    })
}
export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(updatedTaskData)
    })
}
export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "DELETE",
        
    })
};
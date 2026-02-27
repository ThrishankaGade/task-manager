const API_URL = 'http://localhost:8080/tasks';

export const getAllTasks = () => {
    return fetch(API_URL).then(res => res.json());
};

export const createTask = (title) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, completed: false })
    });
};

export const deleteTask = (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
};
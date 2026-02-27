import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { getAllTasks, createTask, deleteTask } from './services/TaskService';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        getAllTasks().then(data => setTasks(data));
    };

    const handleTaskAdded = (title) => {
        createTask(title).then(() => fetchTasks());
    };

    const handleDelete = (id) => {
        deleteTask(id).then(() => fetchTasks());
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskInput onTaskAdded={handleTaskAdded} />
            <TaskList tasks={tasks} onDelete={handleDelete} />
        </div>
    );
}

export default App;
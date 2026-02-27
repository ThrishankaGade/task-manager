import React, { useState } from 'react';

function TaskInput({ onTaskAdded }) {
    const [title, setTitle] = useState('');

    const handleAdd = () => {
        if (title.trim() === '') return;
        onTaskAdded(title);
        setTitle('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter task..."
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
}

export default TaskInput;
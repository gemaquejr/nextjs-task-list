import React from 'react';
import Image from 'next/image';

import './../styles/tasks.scss'

const Tasks = ({ tasks, setTasks }) => {

    return (
        <div className="task-container">
        <div className="task-section">
            <h2>Suas tarefas de hoje</h2>
            <ul>
            {tasks.filter(task => !task.completed).map(task => (
                <li key={task.id}>
                <div className="task-item">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => {
                            setTasks(tasks.map(t => 
                                t.id === task.id ? { ...t, completed: !t.completed } : t
                            ));
                        }}
                    />
                    <span className="task-text">{task.text}</span>
                </div>
                <button onClick={() => openDeleteModal(task.id)}>
                    <Image src="/assets/Icon.png" alt="Lixeira" width={18} height={20} />
                </button>
                </li>
            ))}
            </ul>
        </div>

        <div className="completed-section">
            <h2>Tarefas finalizadas</h2>
            <ul>
            {tasks.filter(task => task.completed).map(task => (
                <li key={task.id} className="completed-task">
                    <div className="task-item">
                        <input
                            type="checkbox"
                            className="completed-checkbox"
                            checked
                            disabled
                        />
                        <span className="task-text">{task.text}</span>
                    </div>
                    <button onClick={() => openDeleteModal(task.id)}>
                        <Image src="/assets/Icon.png" alt="Lixeira" width={18} height={20} />
                    </button>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
};

export default Tasks;
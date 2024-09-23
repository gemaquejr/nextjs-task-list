import React, { useState } from 'react';
import './../styles/addTaskModal.scss';

const addTaskModal = ({ onClose, addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
        addTask(newTask);
        setNewTask('');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Nova tarefa</h2>
        <input
          type="text"
          value={newTask}
          placeholder="Digite"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button"><span className="cancel-button-text">Cancelar</span></button>
          <button onClick={handleSubmit} className="add-button"><span className="add-button-text">Adicionar</span></button>
        </div>
      </div>
    </div>
  );
};

export default addTaskModal;

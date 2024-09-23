import React from 'react';
import './../styles/addTaskButton.scss'

const AddTaskButton = ({ openModal }) => {
  return (
      <button className="add-task-button" onClick={openModal}>
        <span>Adicionar nova tarefa</span>
      </button>
  );
};

export default AddTaskButton;
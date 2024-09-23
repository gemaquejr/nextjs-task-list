'use client';

import React, { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTaskButton from './Add_task_button';
import AddTaskModal from './Add_task_modal';
import defaultTasks from './../../data/defaultTasks';

import './../styles/globals.scss'

const Home_tarefas_desktop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState(defaultTasks);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTask = (newTask) => {
    const newTaskObject = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
    closeModal();
  };

  return (
    <>
      <div className="todo-list-container">
        <Header />

        <Tasks tasks={tasks} setTasks={setTasks} />
        
        <AddTaskButton openModal={openModal} />
      </div>
      {isModalOpen && (
        <AddTaskModal onClose={closeModal} addTask={addTask} />
      )}
    </>
  );
};

export default Home_tarefas_desktop;

'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTaskButton from './Add_task_button';
import AddTaskModal from './Add_task_modal';
import DeleteTaskModal from './Delete_task_modal';
import defaultTasks from './../../data/defaultTasks';

import './../styles/globals.scss'

const Home_tarefas_desktop = () => {
  const [tasks, setTasks] = useState(defaultTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } else {
        setTasks(defaultTasks);
    }
  }
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isClient]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = (taskId) => {
    setTaskToDelete(taskId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => setDeleteModalOpen(false);

  const addTask = (newTask) => {
    const newTaskObject = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
    closeModal();
  };

  const removeTask = () => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskToDelete));
    setDeleteModalOpen(false);
  };

  return (
    <>
      <div className="todo-list-container">
        <Header />

        <Tasks tasks={tasks} setTasks={setTasks} openDeleteModal={openDeleteModal}/>
        
        <AddTaskButton openModal={openModal} />
      </div>
      {isModalOpen && (
        <AddTaskModal onClose={closeModal} addTask={addTask} />
      )}

      {deleteModalOpen && (
        <DeleteTaskModal onClose={closeDeleteModal} onConfirm={removeTask} />
      )}

    </>
  );
};

export default Home_tarefas_desktop;

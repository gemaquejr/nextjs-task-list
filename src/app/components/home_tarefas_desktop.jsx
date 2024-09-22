'use client';

import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTaskButton from './Add_task_button';

import './../styles/globals.scss'

const Home_tarefas_desktop = () => {

  return (
    <>
      <div className="todo-list-container">
        <Header />

        <Tasks />
        
        <AddTaskButton />
      </div>
    </>
  );
};

export default Home_tarefas_desktop;

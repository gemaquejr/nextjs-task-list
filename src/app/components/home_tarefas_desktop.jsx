'use client';

import React from 'react';
import Header from './Header';
import Tasks from './Tasks';

import './../styles/globals.scss'

const Home_tarefas_desktop = () => {

  return (
    <div className="todo-list-container">
      <Header />

      <Tasks />

      <button className="add-task-button">Adicionar nova tarefa</button>
    </div>
  );
};

export default Home_tarefas_desktop;

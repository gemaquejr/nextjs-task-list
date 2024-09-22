'use client';

import React from 'react';
import Image from 'next/image';
import Header from './Header';

const Home_tarefas_desktop = () => {
  return (
    <div className="todo-list-container">
      <Header />

      <div className="task-section">
        <h2>Suas tarefas de hoje</h2>
        <span>Lavar as mãos</span>
        <input type="checkbox" />
        <span>
          <Image src="/assets/Icon.png" alt="Lixeira" width={18} height={20} />
        </span>

        <span>Fazer um bolo</span>
        <input type="checkbox" />
        <span>
          <Image src="/assets/Icon.png" alt="Lixeira" width={18} height={20} />
        </span>

        <span>Lavar a louça</span>
        <input type="checkbox" />
        <span>
          <Image src="/assets/Icon.png" alt="Lixeira" width={18} height={20} />
        </span>
      </div>

      <div className="completed-section">
        <h2>Tarefas finalizadas</h2>
        <span>Levar o lixo para fora</span>
        <input type="checkbox" />
        <span>
          <Image src="/assets/Icon.png" alt="Lixeira" width={18} height={20} />
        </span>
      </div>

      <button className="add-task-button">Adicionar nova tarefa</button>
    </div>
  );
};

export default Home_tarefas_desktop;

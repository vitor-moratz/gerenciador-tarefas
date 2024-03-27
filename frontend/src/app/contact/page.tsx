'use client'
import React, { useState } from 'react';
import '@styles/home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      {/* Coluna esquerda */}
      <div className="sidebar">
        <div>
          <button onClick={() => handleCategoryChange('Profile')}>Meu Perfil</button>
        </div>
        <div>
          <button onClick={() => handleCategoryChange('All')}>All Tasks</button>
        </div>
        <div>
          <button onClick={() => handleCategoryChange('Important')}>Important</button>
        </div>
        <div>
          <button onClick={() => handleCategoryChange('Completed')}>Completed</button>
        </div>
        <div>
          <button onClick={() => handleCategoryChange('DoItNow')}>Do It Now</button>
        </div>
        <div>
          <button onClick={() => handleCategoryChange('Logout')}>Logout</button>
        </div>
      </div>
      {/* Conteúdo principal */}
      <div className="main">
        {/* Aqui você pode renderizar o conteúdo de acordo com a categoria selecionada */}
        {/* Por exemplo: */}
        {selectedCategory === 'All' && <p>Lista de todas as tarefas</p>}
        {selectedCategory === 'Important' && <p>Lista de tarefas importantes</p>}
        {selectedCategory === 'Completed' && <p>Lista de tarefas completadas</p>}
        {selectedCategory === 'DoItNow' && <p>Lista de tarefas a serem feitas agora</p>}
        {selectedCategory === 'Profile' && <p>Informações do perfil</p>}
        {selectedCategory === 'Logout' && <p>Desconectado</p>}
      </div>
    </div>
  );
};

export default Home;

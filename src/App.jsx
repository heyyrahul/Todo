import React, { useState } from 'react';
import AddTodo from './components/Addtodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <h1>Todo App</h1>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
};

export default App;

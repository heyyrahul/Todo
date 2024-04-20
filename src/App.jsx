
import React from 'react';
import AddTodo from './components/Addtodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
};

export default App;

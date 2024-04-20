// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { clearTodos } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector((state) => {
    const { todos, filter } = state;
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  });

  const dispatch = useDispatch();

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  const todoCount = todos.length;

  console.log('Filtered todos:', todos); // Ensure filtered todos are correct

  return (
    <div className="todo-list">
      <div className="todo-count">Number of todos: {todoCount}</div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <button onClick={handleClearTodos}>Clear All</button>
    </div>
  );
};

export default TodoList;

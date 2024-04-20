import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { clearTodos } from '../redux/actions';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; // Import icons

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

  return (
    <div
      style={{
        maxWidth: '30rem',
        margin: 'auto',
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '1.5rem', color: '#333', fontWeight: 'bold' }}>Todo List</h1>
        <button
          onClick={handleClearTodos}
          style={{
            padding: '0.5rem',
            backgroundColor: '#d9534f',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaTrashAlt style={{ marginRight: '0.25rem' }} />
          Clear All
        </button>
      </div>
      <div>
        <div style={{ marginBottom: '0.5rem', color: '#666' }}>Number of todos: <span style={{ fontWeight: 'bold' }}>{todoCount}</span></div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

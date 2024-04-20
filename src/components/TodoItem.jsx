// src/components/TodoItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Dispatch action to update todo text
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedText(todo.text);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {editing ? (
        <input type="text" value={editedText} onChange={handleChange} />
      ) : (
        <div className="text">{todo.text}</div>
      )}
      <div className="actions">
        {!editing ? (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        ) : (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        )}
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      </div>
    </div>
  );
};

export default TodoItem;

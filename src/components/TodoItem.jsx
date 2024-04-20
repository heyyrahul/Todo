import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodoText } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(updateTodoText(todo.id, editedText));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
        style={{ marginRight: '0.5rem' }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          style={{
            flex: '1',
            marginRight: '0.5rem',
            padding: '0.5rem',
            borderRadius: '0.25rem',
            border: '1px solid #ccc',
            backgroundColor: 'var(--input-background)',
            color: 'var(--input-color)', // Adjust font color for dark mode
          }}
        />
      ) : (
        <div style={{ flex: '1', textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#999' : 'inherit' }}>
          {todo.text}
        </div>
      )}
      {isEditing ? (
        <>
          <button
            onClick={handleSaveEdit}
            style={{
              padding: '0.3rem 0.5rem',
              backgroundColor: '#5cb85c',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              marginRight: '0.5rem',
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon icon={faSave} />
          </button>
          <button
            onClick={handleCancelEdit}
            style={{
              padding: '0.3rem 0.5rem',
              backgroundColor: '#d9534f',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleEdit}
            style={{
              padding: '0.3rem 0.5rem',
              backgroundColor: '#337ab7',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              marginRight: '0.5rem',
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            onClick={handleDelete}
            style={{
              padding: '0.3rem 0.5rem',
              backgroundColor: '#d9534f',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;

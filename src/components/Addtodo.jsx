import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px', alignItems: 'center', width: '50%', margin: '0 auto' }}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={handleChange}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginRight: '10px',
          flex: '1',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#6a0dad',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;

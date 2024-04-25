import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter" style={{ marginBottom: '20px', marginTop: '20px' }}>
      <label style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '25px', color: 'black' }}>Filter:</label>
      <select
        onChange={handleFilterChange}
        style={{
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          backgroundColor: 'white',
          cursor: 'pointer'
        }}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Filter;

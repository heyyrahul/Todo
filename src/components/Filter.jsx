// src/components/Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter">
      <label>Filter:</label>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Filter;

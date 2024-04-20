export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});


export const clearTodos = () => ({
  type: CLEAR_TODOS,
});



export const updateTodoText = (id, text) => ({
  type: UPDATE_TODO_TEXT,
  payload: {
    id,
    text,
  },
});

import { ADD_TODO, CLEAR_TODOS, DELETE_TODO, SET_FILTER, TOGGLE_TODO, UPDATE_TODO_TEXT } from './actions';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  filter: 'all', // Default filter
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
        text: action.payload.text,
        completed: false,
      };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case DELETE_TODO: {
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case TOGGLE_TODO: {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case CLEAR_TODOS: {
      localStorage.setItem('todos', JSON.stringify([])); 
      return {
        ...state,
        todos: [], 
      };
    }
    case UPDATE_TODO_TEXT: {
      const { id, text } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload.filter, 
      };
    }
    default:
      return state;
  }
};

export default reducer;

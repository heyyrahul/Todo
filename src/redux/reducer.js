
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
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
    default:
      return state;
  }
};

export default reducer;

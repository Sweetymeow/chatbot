import { combineReducers } from 'redux';
import C from './constact';

const todos = (state = [], action) => {
  switch (action.type) {
    case C.ADD_TODO:
      return [...state, {
        id: action.id,
        text: action.text,
        inputType: action.style,
        completed: false
      }];
    case C.TOGGLE_TODO:
      return state.map( todo => ( todo.id === action.id ? { ...todo, completed: !todo.completed } : todo ));
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case C.SET_VISIBILITY_FILTER:
      console.log("Reducer -> filter action ", action);
      return action.filter;
    default:
      return state;
  }
};

const todoLength = (state = 0, action) => {
  switch (action.type) {
    case C.SET_TODO_LENGTH:
      return action.length;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  visibilityFilter,
  todoLength
});

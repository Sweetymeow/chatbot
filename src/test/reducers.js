import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch (action) {
    case "ADD_TODO":
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }];
    case "TOGGLE_TODO":
      return state.map( todo => ( todo.id === action.id ? { ...todo, completed: !todo.completed } : todo ));
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action) {
    case "SET_VISIBILITY_FILTERE":
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  visibilityFilter
});

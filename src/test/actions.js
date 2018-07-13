import C from './constact';

let nextTodoId = 0;

const addTodo = (text, index) => ({
  type: C.ADD_TODO,
  id: index ? index + 1 : nextTodoId++,
  text
});

const setVisibilityFilter = filter => ({
  type: C.SET_VISIBILITY_FILTER,
  filter
});

const toggleTodo = id => ({
  type: C.TOGGLE_TODO,
  id
});

const setTodoLength = length => ({
  type: C.SET_TODO_LENGTH,
  length
});

const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export { addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters, setTodoLength };

//import React from 'react'
import { connect } from 'react-redux';
//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
import { toggleTodo } from '../actions';
import TodoList from '../TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.fitler(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.fitler(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

//指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
}); //更新 state 中的 todos 内容

//接收 dispatch() 方法, 并返回期望注入到展示组件的 props 中的回调方法dispatch()
const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id));
    //toggleTodo(id) 返回 使用该 id的 "TOGGLE_TODO" 的 action
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
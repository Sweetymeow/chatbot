import React from 'react';
import { connect } from 'react-redux';
import { addTodo, setTodoLength } from './actions';
import './test.css';

const AddTodo = ({ store, dispatch }) => {
  let input, style;
  // console.log("initState: ", initState);
  return (
    <div>
      <h3>Add Todo Form</h3>
      <form onSubmit={e => {
        e.preventDefault();
        const curState = store.getState();
        if (!input.value.trim()) { return; }
        dispatch(addTodo(input.value, style, curState.todos.length - 1)); //发布增加 "ADD_TODO"的 action
        dispatch(setTodoLength(curState.todos.length));
        input.value = '';
      }}>
        <input ref={node => { input = node; }} />
        <select onChange={e => { style = e.target.value; }}>
          <option value="">--Please choose an option--</option>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
          <option value="ButtonGroup">ButtonGroup</option>
          <option value="Card">Card</option>
        </select>
        <button type="submit"> Add Todo </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);

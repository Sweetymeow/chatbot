import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './test.css';

const AddTodo = ({ store, dispatch }) => {
  let input, type;
  const initState = store.getState();
  console.log("initState: ", initState);
  return (
    <div>
      <h3>Add Todo Form</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          // console.log("Input Value", input.value, type);
          dispatch(addTodo(input.value, initState.todoLength)); //发布增加 "ADD_TODO"的 action
          input.value = '';
        }}>
        <input ref={node => { input = node; }} />
        <select onChange={e => { type = e.target.value; }}>
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

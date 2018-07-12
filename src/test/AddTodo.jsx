import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './test.css';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <h3>Add Todo Form</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("AddTodo() value: ", addTodo(input.value));
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value)); //发布增加 "ADD_TODO"的 action
          input.value = '';
        }}>
        <input ref={node => { input = node; }} />
        <button type="submit"> Add Todo </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);

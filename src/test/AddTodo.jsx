import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './test.css';

const AddTodo = ({ store, dispatch }) => {
  let input;
  console.log(store.getState());
  return (
    <div>
      <h3>Add Todo Form</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
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

import React from 'react'
import PropTypes from 'prop-types';

const Todo = (props) => {
  const { onClick, completed, text, id } = props;
  return (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <span>ID: {id}</span>
      <p>{text}</p>
    </li>);
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number
};
export default Todo;
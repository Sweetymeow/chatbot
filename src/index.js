import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApp from './test/TodoApp';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';
//import firebase from './firebase';

ReactDOM.render(
  <TodoApp />, //<App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

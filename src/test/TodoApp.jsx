import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootRducer from './reducers';
//import App from './components/App';

import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './Containers/VisibleTodoList';

const store = createStore(rootRducer);

console.log("init State: ", store.getState());

const unsubscribe = store.subscribe(() => console.log("next state", store.getState()));
unsubscribe();

//console.log(rootRducer);
const TodoApp = () => (
  <Provider store={store}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>
);

export default TodoApp;

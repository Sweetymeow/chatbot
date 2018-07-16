import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import initState from './initState.json';

import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './Containers/VisibleTodoList';

const store = createStore(rootReducer, initState);
//const store = createStore(rootReducer);

const unsubscribe = store.subscribe( () => {
  console.log("next state", store.getState());
});
//unsubscribe();

//console.log(rootRducer);
const TodoApp = () => (
  <Provider store={store}>
    <div>
      <AddTodo store={store} currentIdx={0} />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>
);

export default TodoApp;
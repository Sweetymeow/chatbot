import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import App from './App';

import { fetchWeather } from "./redux/actions";
import appReducer from "./redux/reducers";
import initState from './redux/initState.json';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

const loggerMiddleware = createLogger();

const store = createStore(
  appReducer,
  // initState,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
);

// store.dispatch(fetchWeather('beijing')).then(() => console.log("FETCHWEATHER Successful"));

// const composeStoreWithMiddleware = applyMiddleware(
//   loggerMiddleware,
//   promiseMiddleware()
// )(createStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // <Provider store={
  //     composeStoreWithMiddleware(appReducer, initState)}>
  //   <App />
  // </Provider>,
  document.getElementById('root')
);

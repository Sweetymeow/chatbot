// import React from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import BUBTYPE from '../redux/constbubtype';

//redux
import C from "../redux/constants";
import appReducer from "../redux/reducers";

const store = createStore(appReducer); //,initState
//*Get the current state
const unsubscribeStateUpdate = store.subscribe(() => console.log("next state", store.getState()));

//setTimeout(() => { unsubscribeStateUpdate() }, 3000);

store.dispatch({
  type: C.ADD_BUBBLE,
  payload: imgBub
});
store.dispatch({
  type: C.NEXT_STEP,
  payload: 2
});

const addReduxBubbles = () => {
  //Mutate the state with .dispatch()
  store.dispatch({
    type: C.ADD_BUBBLE,
    payload: textBub
  });
  store.dispatch({
    type: C.NEXT_STEP
  });
};

//指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = state => ({
  // todos: getVisibleTodos(state.todos, state.visibilityFilter)
}); //更新 state 中的 bubble

//接收 dispatch() 方法, 并返回期望注入到展示组件的 props 中的回调方法dispatch()
const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    //toggleTodo(id) 返回 使用该 id的 "TOGGLE_TODO" 的 action
    dispatch(toggleTodo(id));
  }
});

const ChatboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ChatboxContainer;

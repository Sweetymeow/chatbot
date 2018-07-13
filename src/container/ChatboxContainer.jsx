// import React from 'react';
import { connect } from 'react-redux';
import C from "../redux/constants";
import { getNewBubble } from "../redux/actions";
import Chatbox from '../comps/Chatbox';

// const addReduxBubbles = () => {
//   //Mutate the state with .dispatch()
//   store.dispatch({
//     type: C.ADD_BUBBLE,
//     payload: textBub
//   });
//   store.dispatch({
//     type: C.NEXT_STEP
//   });
// };

//指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = state => ({
  // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  allBubbles: state.allBubbles
}); //更新 state 中的 bubble

//接收 dispatch() 方法, 并返回期望注入到展示组件的 props 中的回调方法dispatch()
const mapDispatchToProps = dispatch => ({
  onBubbleClick: bubType => {
    //toggleTodo(id) 返回 使用该 id的 "TOGGLE_TODO" 的 action
    dispatch(getNewBubble(bubType));
  }
});

const ChatboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatbox);

export default ChatboxContainer;

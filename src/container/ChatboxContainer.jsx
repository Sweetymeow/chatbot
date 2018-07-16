// import React from 'react';
import { connect } from 'react-redux';
import C from "../redux/constants";
import { getNewBubble, downloadCV, openNewTab, nextStep } from "../redux/actions";
import Chatbox from '../comps/Chatbox';

//指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = state => ({
  // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  allBubbles: state.allBubbles
}); //更新 state 中的 bubble

//接收 dispatch() 方法, 并返回期望注入到展示组件的 props 中的回调方法dispatch()
const mapDispatchToProps = dispatch => ({
  onBubbleClick: (nextID, bubType) => {
    console.log("Button Click - ID: ", nextID);
    //toggleTodo(id) 返回 使用该 id的 "TOGGLE_TODO" 的 action
    dispatch(nextStep(nextID, bubType));
    dispatch(getNewBubble(nextID, bubType));
  },
  onCardClick: link => {
    //toggleTodo(id) 返回 使用该 id的 "TOGGLE_TODO" 的 action
    dispatch(openNewTab(link));
  },
  onDownloadBtnClick: link => {
    //toggleTodo(id) 返回 使用该 id的 "TOGGLE_TODO" 的 action
    dispatch(downloadCV(link));
  }
});

const ChatboxContainer = connect(
  mapStateToProps, // 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
  mapDispatchToProps // 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去
)(Chatbox);

export default ChatboxContainer;

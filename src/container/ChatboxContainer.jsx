// import React from 'react';
import { connect } from 'react-redux';
// import C from "../redux/constants";
import { getNewBubble, downloadCV, openNewTab, nextStep, updateBoxHeight, updateContainerHeight, updateScrollTop, fetchWeather } from "../redux/actions";
import Chatbox from '../comps/Chatbox';

//指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = state => ({
  allBubbles: state.allBubbles,
  currentStep: state.step,
  boxHeight: state.boxHeight,
  containerHeight: state.containerHeight,
  scrollTop: state.scrollTop
}); //更新 state 中的 bubble

//接收 dispatch() 方法, 并返回期望注入到展示组件的 props 中的回调方法dispatch()
const mapDispatchToProps = dispatch => ({
  onInit: () => {
    dispatch(fetchWeather('beijing'));
  },
  getContainerHeight: height => {
    if (height) {
      dispatch(updateContainerHeight(height));
    }
  },
  getBoxHeight: height => {
    if (height) {
      dispatch(updateBoxHeight(height));
    }
  },
  getScrollTop: height => {
    if (height) {
      dispatch(updateScrollTop(height));
    }
  },
  onBubbleClick: (nextID, bubInfo) => {
    //toggleTodo(id) 返回 使用该 id的 "TOGGLE_TODO" 的 action
    dispatch(nextID ? nextStep(nextID) : nextStep(null, bubInfo.stepId));
    dispatch(getNewBubble(nextID, bubInfo));
  },
  onCheckNextStep: (isGoNextStep, nextStepId) => {
    if (isGoNextStep) {
      dispatch(nextStep(nextStepId));
      dispatch(getNewBubble(nextStepId));
      // goNextAuto = (nextId, isNeedClick)
    }
  },
  onCardClick: link => {
    dispatch(openNewTab(link));
  },
  onDownloadBtnClick: link => {
    dispatch(downloadCV(link));
  }
});

const ChatboxContainer = connect(
  mapStateToProps, // 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
  mapDispatchToProps // 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去
)(Chatbox);

export default ChatboxContainer;

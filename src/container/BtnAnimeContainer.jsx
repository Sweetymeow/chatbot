// import React from 'react';
import { connect } from 'react-redux';
// import C from "../redux/constants";
import { clickBtnInGroup } from "../redux/actions";
import BtnAnimeBubble from '../comps/BtnAnimeBubble';

//指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = state => ({
  showBtnGroup: false,
  activeIndex: [],
  showLabel: true
}); //更新 state 中的 bubble

//接收 dispatch() 方法, 并返回期望注入到展示组件的 props 中的回调方法dispatch()
const mapDispatchToProps = dispatch => ({
  btnToTextBub: (idx, isMoveLeft) => {
    // dispatch(nextID ? nextStep(nextID) : nextStep(null, bubInfo.stepId));
    // dispatch(getNewBubble(nextID, bubInfo));
  }
});

const BtnAnimeContainer = connect(
  mapStateToProps, // 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
  mapDispatchToProps // 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去
)(BtnAnimeBubble);

export default BtnAnimeContainer;

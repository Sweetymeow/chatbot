// import React from 'react';
import { connect } from 'react-redux';
// import C from "../redux/constants";
import { getActiveIndexArray, clickBtnInGroup, toggleVisible, toggleLabelVisible } from "../redux/actions";
import BtnAnimeBubble from '../comps/BtnAnimeBubble';

// const initActiveIndex = groupLength => {
//   const newActiveIdx = [];
//   for (let i = 0; i < groupLength; i++) {
//     newActiveIdx.push(i);
//   }
//   console.log(newActiveIdx);
//   return newActiveIdx;
// };

//指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state, ownProps) => ({
  allBubbles: state.allBubbles,
  showBtnGroup: state.showBtnGroup,
  animeStyle: state.animeStyle,
  activeIndex: state.activeIndex,
  showLabel: state.showLabel
}); //更新 state 中的 bubble

//接收 dispatch() 方法, 并返回期望注入到展示组件的 props 中的回调方法dispatch()
const mapDispatchToProps = dispatch => ({
  initCompVisible: (groupLength) => {
    dispatch(getActiveIndexArray(groupLength));
    // dispatch(clickBtnInGroup(groupLength));
  },
  toggleVisible: (isVisible) => {
    dispatch(toggleVisible(isVisible));
  },
  toggleLabelVisible: (isVisible) => {
    dispatch(toggleLabelVisible(isVisible));
  },
<<<<<<< HEAD
  btnToTextBub: (idx, isMoveLeft) => {
    console.log("btnClick -",idx , clickBtnInGroup(idx));
    console.log("animeStyle: ", getAnimeStyle(idx));
=======
  btnToTextBub: (idx) => {
>>>>>>> 467a829850e4ab0857249007a8ea1db5d3edd28f
    dispatch(clickBtnInGroup(idx));
    // dispatch(getAnimeStyle(isStayButton ? 2 : idx));
    dispatch(toggleLabelVisible(false));
    // dispatch(getNewBubble(nextID, bubInfo));
  }
});

const BtnAnimeContainer = connect(
  mapStateToProps, // 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
  mapDispatchToProps // 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去
)(BtnAnimeBubble);

export default BtnAnimeContainer;

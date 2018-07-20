import { C } from './constants';
import { imgBub0, textBub1, textBub2, btnBub3, textBub4, textBub5, btnBub6, textBub7, inputBub8, textBub9, cardsBub10, textBub11, btnBub12 } from './bubble_sample';

const bubList = [imgBub0, textBub1, textBub2, btnBub3, textBub4, textBub5, btnBub6, textBub7, inputBub8, textBub9, cardsBub10, textBub11, btnBub12];

const moveRightVal = [{ transform: "translate(calc((75vw - 2.4rem) * .5))" }, { transform: "translate(calc((75vw - 2.4rem) * .15))" }, { transform: "translate(calc((75vw - 2.4rem) * -.4))" }];

const removeBubble = bubId => ({
  type: C.REMOVE_BUBBLE,
  bubId
});

const nextStep = (step, bubNextId) => ({
  type: C.NEXT_STEP,
  step: step || bubNextId
});

const getNewBubble = (nextId, bubInfo) => ({
  type: C.ADD_BUBBLE,
  bubble: nextId ? bubList[nextId] : bubInfo,
  // bubble: getByBubType(bubType),
  nextId
});

const downloadCV = link => ({
  type: C.DOWNLOAD_CV,
  link
});

const openNewTab = link => ({
  type: C.SHOW_CARDS,
  link
});

const fetchRequest = (url, status, res) => ({
  type: C.FETCH_USER_PW,
  url,
  status: status || null,
  error: status === "error" ? res : null,
  response: status === "success" ? res : null
});

const goNextAuto = (nextId, isNeedClick) => ({
  type: C.GO_NEXT_AUTO,
  nextId: isNeedClick ? nextId : null
});

/*-------- action for button group --------*/

const getActiveIndexArray = (groupLength) => ({
  type: C.INIT_INDEXARRAY,
  groupLength
});

const clickBtnInGroup = (idx) => ({
  type: C.CHANGE_OPTION,
  idx
});

const getAnimeStyle = (styleIdx) => ({
  type: C.BTN_MOVE,
  style: moveRightVal[styleIdx]
});

const toggleVisible = (isVisible) => ({
  type: C.TOGGLE_VISIBLE,
  isVisible
});

const toggleLabelVisible = (isVisible) => ({
  type: C.TOGGLE_LABEL_VISIBLE,
  isVisible
});

export { getNewBubble, nextStep, removeBubble, downloadCV, openNewTab, fetchRequest, goNextAuto, clickBtnInGroup, getActiveIndexArray, toggleVisible, toggleLabelVisible, getAnimeStyle };

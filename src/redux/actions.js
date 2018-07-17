import { C } from './constants';
import { imgBub0, textBub1, textBub2, btnBub3, textBub4, textBub5, btnBub6, textBub7, inputBub8, textBub9, cardsBub10, textBub11, btnBub12 } from './bubble_sample';

const bubList = [imgBub0, textBub1, textBub2, btnBub3, textBub4, textBub5, btnBub6, textBub7, inputBub8, textBub9, cardsBub10, textBub11, btnBub12];

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

export { getNewBubble, nextStep, removeBubble, downloadCV, openNewTab };

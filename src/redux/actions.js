import { C, CBUB } from './constants';
import { imgBub, textBub, btnBub, btnBub7, textBub4, textBub5, textBub2, textBub8, cardsBub, inputBub9, textBub11, btnBub12 } from './bubble_sample';

const bubList = [imgBub, textBub, textBub2, btnBub, textBub4, textBub5, btnBub7, textBub8, inputBub9, cardsBub, textBub11, btnBub12];

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

// const getVisibleBubbles = allBubbles => ({
//   type: C.INIT_BUBBLE,
//   allBubbles
// });

export { getNewBubble, nextStep, removeBubble, downloadCV, openNewTab };

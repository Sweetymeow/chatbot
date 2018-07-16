import { C, CBUB } from './constants';
import { imgBub, textBub, btnBub, btnBub7, textBub4, textBub5, textBub2, textBub8, cardsBub, inputBub9, textBub11, btnBub12 } from './bubble_sample';

const bubList = [imgBub, textBub, textBub2, btnBub, textBub4, textBub5, btnBub7, textBub8, inputBub9, cardsBub, textBub11, btnBub12];

const getByBubType = (bubType) => {
  switch (bubType) {
    case CBUB.IMAGE_BUBBLE:
      return imgBub;
    case CBUB.TEXT_BUBBLE:
      return textBub;
    case CBUB.BUTTONGROUP_BUBBLE:
      return btnBub;
    case CBUB.INPUTPW_BUBBLE:
      return btnBub;
    default:
      return null;
  }
};

const removeBubble = bubId => ({
  type: C.REMOVE_BUBBLE,
  bubId
});

const nextStep = step => ({
  type: C.NEXT_STEP,
  step
});

const getNewBubble = (nextId, bubType) => ({
  type: C.ADD_BUBBLE,
  bubble: bubList[nextId],
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

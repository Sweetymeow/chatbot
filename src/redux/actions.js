import { C, CBUB } from './constants';
import { imgBub, textBub, btnBub } from './bubble_sample';

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
  bubble: getByBubType(bubType),
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

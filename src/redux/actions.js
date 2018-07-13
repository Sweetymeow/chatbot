import { C, CBUB } from './constants';
import { imgBub, textBub, btnBub } from './bubble_sample';

// const setTodoLength = length => ({
//   type: C.SET_TODO_LENGTH,
//   length
// });

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

const getNewBubble = bubType => ({
  type: C.ADD_BUBBLE,
  bubble: getByBubType(bubType)
});

// const getVisibleBubbles = allBubbles => ({
//   type: C.INIT_BUBBLE,
//   allBubbles
// });

export { getNewBubble, nextStep, removeBubble };

import C from './constants';
import CBUB from './constbubtype';
import { imgBub, textBub, btnBub } from './bubble_sample';

// const setTodoLength = length => ({
//   type: C.SET_TODO_LENGTH,
//   length
// });
const getByBubType = (bubType) => {
  switch (bubType) {
    case "IMAGE":
      return imgBub;
    case "TEXT":
      return textBub;
    case "BUTTON_GROUP":
      return btnBub;
    default:
      return null;
  }
};

const getNewBubble = bubType => ({
  type: C.ADD_BUBBLE,
  bubble: getByBubType(bubType)
});

const ADD_TEXT_BUBBLE = {
  type: CBUB.ADD_TEXT_BUBBLE,
  payload: textBub
};
const ADD_IMAGE_BUBBLE = {
  type: CBUB.ADD_IMAGE_BUBBLE,
  payload: imgBub
};
const ADD_BUTTONGROUP_BUBBLE = {
  type: CBUB.ADD_BUTTONGROUP_BUBBLE,
  payload: btnBub
};
const ADD_INPUTPW_BUBBLE = {
  type: CBUB.ADD_INPUTPW_BUBBLE,
  payload: "NO INPUT SAMPLE"
};

export default {
  getNewBubble,
  ADD_TEXT_BUBBLE,
  ADD_IMAGE_BUBBLE,
  ADD_BUTTONGROUP_BUBBLE,
  ADD_INPUTPW_BUBBLE
};

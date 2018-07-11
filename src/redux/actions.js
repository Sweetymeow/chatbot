// import C from './constants';
import CBUB from './constbubtype';
import { imgBub, textBub, btnBub } from './bubble_sample';

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

const ACTIONS = {
  ADD_TEXT_BUBBLE,
  ADD_IMAGE_BUBBLE,
  ADD_BUTTONGROUP_BUBBLE,
  ADD_INPUTPW_BUBBLE
};

export default ACTIONS;

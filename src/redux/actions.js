import C from './constants';
import CBUB from './constbubtype';

// const goalAction = {
//   type: C.SET_GOAL,
//   payload: 15
// };
//
// const addProdAction = {
//   type: C.ADD_ITEM,
//   payload: {
//     "name": "REDERMIC R WITH RETINOL",
//     "date": "2018-06-18",
//     "purchased": false,
//     "brand": "La Roche-Posay",
//     "price": "56.99",
//     "currency": "usd",
//     "link": "https://www.laroche-posay.us/redermic-r-with-retinol-3337872413063.html?cgid=anti-aging-serum#start=1"
//   }
// }

const newTextBubble = {
  type: CBUB.ADD_TEXT_BUBBLE,
  payload: "TEXT"
};
const newImageBubble = {
  type: CBUB.ADD_IMAGE_BUBBLE,
  payload: "IMAGE"
};
const newBtnGroupBubble = {
  type: CBUB.ADD_BUTTONGROUP_BUBBLE,
  payload: "TEXT"
};
const newPWInputBubble = {
  type: CBUB.ADD_INPUTPW_BUBBLE,
  payload: "TEXT"
};

const ACTIONS = {
  newTxtBubble: newTextBubble,
  newImageBubble: newImageBubble,
  newBtnGroupBubble: newBtnGroupBubble,
  newPWInputBubble: newPWInputBubble,
}

export default ACTIONS;

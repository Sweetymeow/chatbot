import { combineReducers } from 'redux';
import { C } from './constants';

export const step = (state = 0, action) => {
  switch (action.type) {
    case C.INIT_STEP:
      return 0; //return [...state, action.payload]; //return new array with
    case C.NEXT_STEP:
      return action.step ? action.step : state + 1;
    default:
      return state;
  }
};

export const boxHegith = (state = 0, action) => {
  switch (action.type) {
    case C.UPDATE_BOX_HEIGHT:
      return action.step ? action.step : state + 1;
    default:
      return state;
  }
};

export const error = (state = null, action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload]; //return new array with
    case C.CLEAR_ERROR:
      return state.filter(errorMsg => errorMsg !== action.payload);
    default:
      return state;
  }
};

export const fetching = (state = null, action) => {
  switch (action.type) {
    case C.FETCH_USER_PW:
      return action.payload; //true
    case C.CANCEL_FETCHING:
      return action.payload; //false
    default:
      return state;
  }
};

export const activeIndex = (state = [], action) => {
  const newActiveIdx = [];
  if (state.length < 1) {
    for (let i = 0; i < action.groupLength; i++) {
      newActiveIdx.push(i);
    }
  }
  switch (action.type) {
    case C.INIT_INDEXARRAY:
      return newActiveIdx; //true
    case C.CHANGE_OPTION:
      return state.activeIndex.filter(index => index === action.idx); //true
    default:
      return state;
  }
};

export const btnGroupVisibile = (state = false, action) => {
  switch (action.type) {
    case C.TOGGLE_VISIBLE:
      return !action.visible; //true
    default:
      return state;
  }
};

export const allBubbles = (state = [], action) => {
  //let hasProduct = state.some( prod => prod.step_id === action.payload.step_id );
  switch (action.type) {
    case C.INIT_BUBBLE:
      return [...state.allBubbles];
    case C.ADD_BUBBLE:
      return [...state, action.bubble];
    case C.BACK_TO_LAST_BUBBLE:
      return state.slice(0, state.length);
    case C.REMOVED_BUBBLE:
      return state.filter(item => item.step_id !== action.payload.step_id);
    case C.CLEAR_BOX:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  // newBubble,
  allBubbles,
  step,
  error,
  activeIndex,
  btnGroupVisibile,
  userInfo: combineReducers({
    fetching
  })
});

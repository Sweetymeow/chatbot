import { combineReducers } from 'redux';
import { C, TESTC } from './constants';

export const step = (state = 0, action) => {
  switch (action.type) {
    case C.INIT_STEP:
      return 3; //return [...state, action.payload]; //return new array with
    case C.NEXT_STEP:
      return action.step ? action.step : state + 1;
    default:
      return state;
  }
};

export const scrollTop = (state = 0, action) => (action.type === C.UPDATE_SCROLLTOP ? action.height : state);

export const containerHeight = (state = 0, action) => (action.type === C.UPDATE_CONTAINER_HEIGHT ? action.height : state);

export const boxHeight = (state = 0, action) => (action.type === C.UPDATE_BOX_HEIGHT ? action.height : state);

export const getUserEmail = (state = "default@gmail.com", action) => (action.type === C.DEFAULT_USER_EMAIL ? action.defaultEmail : state);

export const getCurrentUser = (state = "", action) => (action.type === TESTC.GET_CUR_USER ? action.user : state);

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

export const weather = (state = {}, action) => (action.type === TESTC.RECEIVE_WEATHER ? {
  ...action.weather,
  city: action.url,
  receivedAt: action.receivedAt
} : state);

export const activeIndex = (state = [], action) => {
  switch (action.type) {
    case C.INIT_INDEXARRAY:
      return action.idxArray; //true
    case C.CHANGE_OPTION:
      return state.filter(index => index === action.idx); //true
    default:
      return state;
  }
};

export const showBtnGroup = (state = false, action) => (action.type === C.TOGGLE_VISIBLE ? action.isVisible : state);

export const inputVisible = (state = false, action) => (action.type === C.TOGGLE_INPUT_VISIBLE ? action.isVisible : state);

export const animeStyle = (state = {}, action) => (action.type === C.BTN_MOVE ? action.style : state);

export const allBubbles = (state = [], action) => {
  //let hasProduct = state.some( prod => prod.step_id === action.payload.step_id );
  switch (action.type) {
    case C.INIT_BUBBLE:
      return [...action.bubbles];
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
  allBubbles,
  step,
  // error,
  boxHeight,
  scrollTop,
  containerHeight,
  inputVisible,
  userInfo: combineReducers({
    getUserEmail,
    fetching,
    weather,
    getCurrentUser
  })
});

import { combineReducers } from 'redux';
import C from './constants';
import CBUB from './constbubtype';

export const step = (state = 0, action) => {
  switch (action.type) {
    case C.INIT_STEP:
      return 0; //return [...state, action.payload]; //return new array with
    case C.NEXT_STEP:
      return action.payload ? action.payload : state + 1;
    default:
      return state;
  }
}; //(action.type === C.NEXT_STEP) ? parseInt(action.payload, 0) + 1 : state

//export const products = (state = null, action) =>
//(action.type === C.ADD_ITEM) ? [...state, action.payload] : state;
//return typeof state === "object" ? state.push(action.payload) : action.payload;

export const newBubble = (state = 'DEFAULT', action) => {
  switch (action.type) {
    case CBUB.ADD_TEXT_BUBBLE:
      return "TEXT"; //return [...state, action.payload]; //return new array with
    case CBUB.ADD_IMAGE_BUBBLE:
      return "IMAGE";
    case CBUB.ADD_INPUTPW_BUBBLE:
      return "BUTTON_GROUP"; //return new array with
    case CBUB.ADD_BUTTONGROUP_BUBBLE:
      return "INPUT_PASSWORD";
    default:
      return state;
  }
};

export const error = (state = null, action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload] //return new array with
    case C.CLEAR_ERROR:
      return state.filter(errorMsg => errorMsg !== action.payload);
    default:
      return state;
  }
};

export const fetching = (state = null, action) => {
  switch (action.type) {
    case C.FETCH_USER_PW:
      return action.payload //true
    case C.CANCEL_FETCHING:
      return action.payload //false
    default:
      return state;
  }
};

export const suggestions = (state = [], action) => {
  switch (action.type) {
    case C.CLEAR_SUGGESTIONS:
      return [];
    case C.CHANGE_SUGGESTIONS:
      return action.payload
    default:
      return state
  }
}

export const allBubbles = (state = [], action) => {
  // let hasProduct = state.some( prod => prod.step_id === action.payload.step_id );
  switch (action.type) {
    case C.ADD_BUBBLE:
      // return hasProduct ? state : [...state, action.payload];
      return [...state, action.payload];
    case C.REMOVED_BUBBLE:
      return state.filter(item => item.step_id !== action.payload.step_id);
    case C.CLEAR_BOX:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  newBubble,
  allBubbles,
  step,
  error,
  userInfo: combineReducers({
    fetching,
    suggestions
  })
});

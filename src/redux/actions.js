import fetch from 'cross-fetch';
import { C, TESTC } from './constants';
import { imgBub0, textBub1, textBub2, btnBub3, textBub4, textBub5, btnBub6, textBub7, inputBub8, textBub9, cardsBub10, textBub11, btnBub12 } from './bubble_sample';
import initState from './initState.json';
import firebase from '../firebase';

const bubList = [imgBub0, textBub1, textBub2, btnBub3, textBub4, textBub5, btnBub6, textBub7, inputBub8, textBub9, cardsBub10, textBub11, btnBub12];

const getWeatherUrl = city => `https://samples.openweathermap.org/data/2.5/forecast?q=${city},USA&appid=50fb41fcba931b8c18c627d47ea8494d`;

const moveRightVal = [{ transform: "translate(calc((75vw - 2.4rem) * .5))" }, { transform: "translate(calc((75vw - 2.4rem) * .15))" }, { transform: "translate(calc((75vw - 2.4rem) * .55))" }];

const initActiveIndex = groupLength => {
  const newActiveIdx = [];
  for (let i = 0; i < groupLength; i++) {
    newActiveIdx.push(i);
  }
  return newActiveIdx;
};

const removeBubble = bubId => ({
  type: C.REMOVE_BUBBLE,
  bubId
});

const nextStep = (step, bubNextId) => ({
  type: C.NEXT_STEP,
  step: step || bubNextId
});

const initBubbles = (bubbles) => ({
  type: C.INIT_BUBBLE,
  bubbles
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

const fetchRequest = (url, status, res) => ({
  type: C.FETCH_USER_PW,
  url,
  status: status || null,
  error: status === "error" ? res : null,
  response: status === "success" ? res : null
});

const getFiredata = (json) => ({
  type: C.FETCH_USER_PW,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
});

const goNextAuto = (nextId, isNeedClick) => ({
  type: C.GO_NEXT_AUTO,
  nextId: isNeedClick ? nextId : null
});

const updateBoxHeight = height => ({
  type: C.UPDATE_BOX_HEIGHT,
  height
});

const updateContainerHeight = height => ({
  type: C.UPDATE_CONTAINER_HEIGHT,
  height
});

const updateScrollTop = height => ({
  type: C.UPDATE_SCROLLTOP,
  height: height + 16
});

const scrollToPosition = pos => ({
  type: C.SCROLL_TO_POS,
  pos
});

/*-------- action for button group --------*/

const getActiveIndexArray = (groupLength) => ({
  type: C.INIT_INDEXARRAY,
  idxArray: initActiveIndex(groupLength)
});

const clickBtnInGroup = (idx) => ({
  type: C.CHANGE_OPTION,
  idx
});

const getAnimeStyle = (styleIdx) => ({
  type: C.BTN_MOVE,
  style: moveRightVal[styleIdx]
});

const toggleVisible = (isVisible) => ({
  type: C.TOGGLE_VISIBLE,
  isVisible
});

const toggInputVisible = (isVisible) => ({
  type: C.TOGGLE_INPUT_VISIBLE,
  isVisible
});

/*-------- action for button group --------*/

const getCurrentUser = () => ({
  type: TESTC.GET_CUR_USER,
  user: firebase.auth().currentUser.uid
});

const requestBubbles = (url) => ({
  type: TESTC.REQUEST_WEATHER,
  url
});

const receiveBubbles = (url, json) => ({
  type: TESTC.RECEIVE_WEATHER,
  url,
  weather: json,
  // posts: json.data.children.map(res => res.data),
  receivedAt: Date.now()
});

// 来看一下我们写的第一个 thunk action 创建函数！
// 使用方法： store.dispatch(fetchPosts('reactjs'))
const fetchWeather = (city) => dispatch => {
  // 首次 dispatch：更新应用的 state 来通知API 请求发起了。
  dispatch(requestBubbles(city));

  // thunk middleware 调用的函数可以有返回值，它会被当作 dispatch 方法的返回值传递。
  return fetch(getWeatherUrl(city))
    .then(
      response => response.json(),
      error => {
        console.log('An error occurred.', error);
      }
    )// 不要使用 catch，因为会捕获
    // 在 dispatch 和渲染中出现的任何错误，导致 'Unexpected batch number' 错误。
    .then(json => dispatch(receiveBubbles(city, json)));
};
// 返回一个等待处理的 promise。这并不是 redux middleware 所必须的

const getInitBubbles = (delay) => dispatch => {
  // dispatch(initBubbles(delay));
  console.log("initState: ", initState);
  return setTimeout(() => {
    dispatch(initBubbles(initState.allBubbles));
  }, delay);
};

const shouldFetchPosts = (state, city) => {
  const posts = state.postsBySubreddit[city];
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate;
}

// 注意这个函数也接收了 getState() 方法, 它让你选择接下来 dispatch 什么。
// 当缓存的值是可用时，减少网络请求很有用。
const fetchPostsIfNeeded = (city) => (dispatch, getState) => {
  return dispatch(fetchWeather(city));
  // if (shouldFetchPosts(getState(), city)) { // 在 thunk 里 dispatch 另一个 thunk！
  //   return dispatch(fetchWeather(city))
  // }
  // // 告诉调用代码不需要再等待。
  // return Promise.resolve();
}

export { getInitBubbles, getNewBubble, nextStep, removeBubble, downloadCV, openNewTab, fetchRequest, getFiredata, goNextAuto, clickBtnInGroup, getActiveIndexArray, toggleVisible, toggInputVisible, getAnimeStyle, updateBoxHeight, updateContainerHeight, updateScrollTop, scrollToPosition, requestBubbles, receiveBubbles, fetchWeather, fetchPostsIfNeeded, getCurrentUser };

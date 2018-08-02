import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import initState from './redux/initState.json';
import appReducer from "./redux/reducers";
import AnimeBackground from './comps/AnimeBackground';
// import Chatbox from './comps/Chatbox';
import Footerlink from './comps/Footerlink';
import ChatboxContainer from './container/ChatboxContainer';

import { fetchWeather } from "./redux/actions";

// import './styles/index.css';

const loggerMiddleware = createLogger();

const store = createStore(
  appReducer,
  initState,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
);

// const unsubscribeStateUpdate = store.subscribe(() => console.log("next state", store.getState()));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: "chatbot"
    };
  }

  componentWillMount() {
    store.dispatch(fetchWeather('beijing'))
      .then(() => console.log("FETCHWEATHER Successful"));
  }

  render() {
    return (
      <Provider store={store}>
        <section className="root-container">
          {/*<Chatbox allBubbles={initialState.allBubbles} />*/}
          <ChatboxContainer />
          <AnimeBackground />
          <Footerlink />
        </section>
      </Provider>
    );
  }
}

export default App;

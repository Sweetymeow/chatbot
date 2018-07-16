import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initState from './redux/initState.json';
import appReducer from "./redux/reducers";
import AnimeBackground from './comps/AnimeBackground';
// import Chatbox from './comps/Chatbox';
import Footerlink from './comps/Footerlink';
import ChatboxContainer from './container/ChatboxContainer';

// import './styles/index.css';

const store = createStore(appReducer, initState);
// const initialState = store.getState();

const unsubscribeStateUpdate = store.subscribe(() => console.log("next state", store.getState()));
//setTimeout(() => { unsubscribeStateUpdate() }, 3000);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: "chatbot"
    };
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

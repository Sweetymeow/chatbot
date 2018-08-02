import React from 'react';
import AnimeBackground from './comps/AnimeBackground';
import Footerlink from './comps/Footerlink';
import ChatboxContainer from './container/ChatboxContainer';

// import './styles/index.css';

// const unsubscribeStateUpdate = store.subscribe(() => console.log("next state", store.getState()));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: "chatbot"
    };
  }

  componentWillMount() {
    // store.dispatch(fetchWeather('beijing'))
    //   .then(() => console.log("FETCHWEATHER Successful"));
  }

  render() {
    return (
      <section className="root-container">
        {/*<Chatbox allBubbles={initialState.allBubbles} />*/}
        <ChatboxContainer />
        <AnimeBackground />
        <Footerlink />
      </section>);
  }
}

export default App;

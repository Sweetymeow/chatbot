import React from 'react';
import { createStore } from 'redux';
//import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import '../styles/Chatbox.css';
import constbubtype from '../redux/constbubtype';

//Bubble Comps
import ImgBubble from './ImgBubble';
import TextBubble from './TextBubble';
import BtnGroupBubble from './BtnGroupBubble';
import PWInput from './PWInput';
//Image
import Gopher from '../res/Gopher.png';

//testText
import { testText, testText2, options } from '../test/testText';

//redux
import C from "../redux/constants";
import appReducer from "../redux/reducers";
//import initState from "../redux/initState";
import { imgBub, textBub, btnBub } from '../redux/bubble_sample';

const store = createStore(appReducer); //,initState
//*Get the current state
const unsubscribeStateUpdate = store.subscribe(() => console.log("next state", store.getState()));

//setTimeout(() => { unsubscribeStateUpdate() }, 3000);

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currentStep: 0,
      testTextArr1: [""],
      testTextArr2: [""],
      bubbleList: []
    };
    this.handleClearBox = this.handleClearBox.bind(this);
    this.addBubbles = this.addBubbles.bind(this);
    this.addReduxBubbles = this.addReduxBubbles.bind(this);
  }

  componentDidMount() {
    this.setState({
      testTextArr1: testText.split("&&"),
      testTextArr2: testText2.split("&&")
    });
    // store.dispatch({
    //   type: C.INIT_STEP
    // });
    store.dispatch({
      type: C.ADD_BUBBLE,
      payload: imgBub
    });
    store.dispatch({
      type: C.NEXT_STEP,
      payload: 2
    });
  }

  handleClearBox() {
    //Clear all Bubble from Box
    console.log("SHOULD CLEAR BOX");
  }

  addReduxBubbles() {
    //Mutate the state with .dispatch()
    store.dispatch({
      type: C.ADD_BUBBLE,
      payload: textBub
    });
    store.dispatch({
      type: C.NEXT_STEP
    });
  }

  addBubbles(e, { type }) {
    const { testTextArr1 } = this.state; // textArr2constbubtype.IMAGE;
    let newBubble;

    switch (type) {
      case "IMAGE":
        newBubble = (<ImgBubble imgSrc={Gopher}/>);
        break;
      case "TEXT":
        newBubble = (<TextBubble text={testTextArr1} type="bot" />);
        break;
      case "BUTTON_GROUP":
        newBubble = (<BtnGroupBubble options={options} label="Choose an option" />);
        break;
      case "INPUT_PASSWORD":
        newBubble = (<PWInput label="Type the Password" enableBack={true} clearBox={this.handleClearBox} />);
        break;
      default:
        newBubble = (<TextBubble text={["NO Content"]} type="bot" />);
    }
    console.log(constbubtype);
    console.log(type, newBubble);
  }

  render() {
    const { testTextArr1, testTextArr2 } = this.state;
    return (
      <section className="chatbox-container">
        <Button onClick={this.addBubbles} type={constbubtype.ADD_TEXT_BUBBLE}>Add Bubble(TEST)</Button>
        <Button onClick={this.addReduxBubbles} type={constbubtype.ADD_TEXT_BUBBLE}>Add Bubble(REDUX)</Button>
        <ImgBubble imgSrc={Gopher}/>
        <TextBubble text={testTextArr1} type="bot" />
        <TextBubble text={testTextArr2} type="user" />
        <BtnGroupBubble options={options} label="Choose an option" />
        <PWInput label="Type the Password" enableBack={true} clearBox={this.handleClearBox} />
      </section>);
  }
}

export default Chatbox;

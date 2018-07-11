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

//redux
import C from "../redux/constants";
import appReducer from "../redux/reducers";
import initState from "../redux/initState";

const testText = "My name is Juan. && I am a UX/UI designer currently working at SAP. ";
const testText2 = "Thanks for your interest in my portfolio!&& May I ask your purpose of visiting today? :)";
const options = [{
  key: 1,
  text: "Recruiting designer",
  val: "RECRUITER"
}, {
  key: 2,
  text: "Just wander around",
  val: "VIEWER"
}];
const store = createStore(appReducer);

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
  }

  componentDidMount() {
    this.setState({
      testTextArr1: testText.split("&&"),
      testTextArr2: testText2.split("&&")
    })
    //Mutate the state with .dispatch()
    store.dispatch({
      type: C.ADD_BUBBLE,
      payload: "TEXT"
    });
    //*Get the current state
    console.log("next state", store.getState());
  }

  handleClearBox() {
    //Clear all Bubble from Box
    console.log("SHOULD CLEAR BOX");
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
        <ImgBubble imgSrc={Gopher}/>
        <TextBubble text={testTextArr1} type="bot" />
        <TextBubble text={testTextArr2} type="user" />
        <BtnGroupBubble options={options} label="Choose an option" />
        <PWInput label="Type the Password" enableBack={true} clearBox={this.handleClearBox} />
      </section>);
  }
}

export default Chatbox;

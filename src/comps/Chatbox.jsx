import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import '../styles/Chatbox.css';
import { CBUB } from '../redux/constants';

//Bubble Comps
import ImgBubble from './ImgBubble';
import TextBubble from './TextBubble';
import BtnGroupBubble from './BtnGroupBubble';
import PWInput from './PWInput';
//Image
import Gopher from '../res/Gopher.png';

//testText
import { testText, testText2, options } from '../test/testText';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testTextArr1: [""],
      testTextArr2: [""]
    };
    this.handleClearBox = this.handleClearBox.bind(this);
    this.addBubbles = this.addBubbles.bind(this);
    this.getTextArr = this.getTextArr.bind(this);
    // this.onBubClick = this.onBubClick.bind(this);
  }

  componentDidMount() {
    console.log("Chatbox Comps Did Mount");
    this.setState({
      testTextArr1: testText.split("&&"),
      testTextArr2: testText2.split("&&")
    });
  }

  getTextArr(text) {
    return text.split("$$");
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
    console.log(CBUB);
    console.log(type, newBubble);
  }

  render() {
    const { allBubbles, onBubbleClick } = this.props;
    const { testTextArr1, testTextArr2 } = this.state;
    return (
      <section className="chatbox-container">
        <Button onClick={this.addBubbles} type={CBUB.TEXT_BUBBLE}>Add Bubble(TEST)</Button>
        {/*<ImgBubble imgSrc={Gopher}/>
        <TextBubble text={testTextArr1} speaker="bot" />
        <TextBubble text={testTextArr2} speaker="user" />
        <BtnGroupBubble options={options} label="Choose an option" />
        <PWInput label="Type the Password" enableBack clearBox={this.handleClearBox} />*/}
        {allBubbles.map((bub, index) => {
          if (bub.bubType === CBUB.TEXT_BUBBLE) {
            return <TextBubble key={bub.stepId} text={this.getTextArr(bub.bubContent.text)} speaker="bot" />;
          }
          if (bub.bubType === CBUB.IMAGE_BUBBLE) {
            console.log(bub);
            return <ImgBubble key={bub.stepId} imgSrc={Gopher}/>;
          }
          if (bub.bubType === CBUB.BUTTONGROUP_BUBBLE) {
            console.log(bub);
            return <BtnGroupBubble key={bub.stepId} options={bub.options} label="Choose an option" />;
          }
          return null;
        })}
      </section>);
  }
}

Chatbox.propTypes = {
  allBubbles: PropTypes.arrayOf(
    PropTypes.shape({
      stepId: PropTypes.number.isRequired,
      requestClick: PropTypes.bool,
      bubType: PropTypes.string,
      bubContent: PropTypes.object
    }).isRequired
  ),
  onBubbleClick: PropTypes.func
};

export default Chatbox;

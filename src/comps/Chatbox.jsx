import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import '../styles/Chatbox.css';
import BUBTYPE from '../redux/constbubtype';

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
  }

  componentDidMount() {
    this.setState({
      testTextArr1: testText.split("&&"),
      testTextArr2: testText2.split("&&")
    });
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
    console.log(BUBTYPE);
    console.log(type, newBubble);
  }

  render() {
    const { allBubbles } = this.props;
    const { testTextArr1, testTextArr2 } = this.state;
    return (
      <section className="chatbox-container">
        <Button onClick={this.addBubbles} type={BUBTYPE.ADD_TEXT_BUBBLE}>Add Bubble(TEST)</Button>
        {/*<Button onClick={this.addReduxBubbles} type={constbubtype.ADD_TEXT_BUBBLE}>Add Bubble(REDUX)</Button>*/}
        <ImgBubble imgSrc={Gopher}/>
        <TextBubble text={testTextArr1} type="bot" />
        <TextBubble text={testTextArr2} type="user" />
        <BtnGroupBubble options={options} label="Choose an option" />
        <PWInput label="Type the Password" enableBack clearBox={this.handleClearBox} />
        {allBubbles.map((bub, index) => {
          if (bub.bubType === BUBTYPE.TEXT_BUBBLE) {
            return <TextBubble text={testTextArr1} type="bot" />;
          }else if (bub.bubType === BUBTYPE.IMAGE_BUBBLE) {
            return <ImgBubble imgSrc={Gopher}/>;
          }else {
            return null;
          }
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
    }).isRequired),
  onBubClick: PropTypes.func.isRequired
};

export default Chatbox;

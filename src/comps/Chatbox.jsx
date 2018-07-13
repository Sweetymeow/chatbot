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
    this.getTextArr = this.getTextArr.bind(this);
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

  render() {
    const { allBubbles, onBubbleClick } = this.props;
    const { testTextArr1, testTextArr2 } = this.state;
    const lastBub = allBubbles[allBubbles.length - 1];
    return (
      <section className="chatbox-container">
        <Button onClick={() => onBubbleClick(lastBub.nextStepId, CBUB.INPUTPW_BUBBLE)} type={CBUB.TEXT_BUBBLE}>Add Bubble(TEST)</Button>
        {/*<ImgBubble imgSrc={Gopher}/>
        <TextBubble text={testTextArr1} speaker="bot" />
        <TextBubble text={testTextArr2} speaker="user" />
        <BtnGroupBubble options={options} label="Choose an option" />
        <PWInput label="Type the Password" enableBack clearBox={this.handleClearBox} />*/}
        {allBubbles.map((bub, index) => {
          // console.log(bub);
          if (bub.bubType === CBUB.TEXT_BUBBLE) {
            return <TextBubble key={bub.stepId} text={this.getTextArr(bub.bubContent.text)} speaker="bot" />;
          }
          if (bub.bubType === CBUB.IMAGE_BUBBLE) {
            return <ImgBubble key={bub.stepId} imgSrc={Gopher}/>;
          }
          if (bub.bubType === CBUB.BUTTONGROUP_BUBBLE) {
            return (
              <BtnGroupBubble
                key={bub.stepId}
                options={bub.options}
                onBtnClick={() => onBubbleClick(bub.nextStepId, CBUB.INPUTPW_BUBBLE)}
                label="Choose an option"
              />);
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

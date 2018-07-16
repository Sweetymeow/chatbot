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

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.getTextArr = this.getTextArr.bind(this);
  }

  componentDidMount() {
    console.log("Chatbox Comps Did Mount");
  }

  getTextArr(text) {
    return text.split("$$");
  }

  render() {
    const { allBubbles, onBubbleClick, onCheckNextStep } = this.props;
    const lastBub = allBubbles[allBubbles.length - 1];
    return (
      <section className="chatbox-container">
        <Button onClick={() => onBubbleClick(lastBub.nextStepId, CBUB.INPUTPW_BUBBLE)} type={CBUB.TEXT_BUBBLE}>Add Bubble(TEST)</Button>
        {/*<ImgBubble imgSrc={Gopher}/>
        <TextBubble text={testTextArr1} speaker="bot" />
        <TextBubble text={testTextArr2} speaker="user" />
        <BtnGroupBubble options={options} label="Choose an option" />
        <PWInput label="Type the Password" enableBack clearBox={this.handleClearBox} />*/}
        {allBubbles.map((bub) => {
          if (bub.bubType === CBUB.TEXT_BUBBLE) {
            return <TextBubble key={bub.stepId} text={this.getTextArr(bub.bubContent.text)} speaker="bot" onNext={onCheckNextStep} />;
          }
          if (bub.bubType === CBUB.IMAGE_BUBBLE) {
            return <ImgBubble key={bub.stepId} imgSrc={Gopher}/>;
          }
          if (bub.bubType === CBUB.BUTTONGROUP_BUBBLE) {
            console.log(bub.options);
            return (
              <BtnGroupBubble
                key={bub.stepId}
                options={bub.options}
                onBtnClick={onBubbleClick}
                label="Choose an option"
              />);
          }
          if (bub.bubType === CBUB.INPUTPW_BUBBLE) {
            console.log("INPUTPW_BUBBLE - ", bub);
            return (<PWInput label="Type the Password" enableBack clearBox={this.handleClearBox} />);
          }
          return null;
        })}
      </section>);
  }
}
// <BtnGroupBubble
//     key={bub.stepId}
//     options={bub.options}
//     onBtnClick={() => onBubbleClick()}
//     label="Choose an option"
//   />

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

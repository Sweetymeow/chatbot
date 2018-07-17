import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import '../styles/Chatbox.css';
import { CBUB } from '../redux/constants';

import { cardsBub10 } from '../redux/bubble_sample';

//Bubble Comps
import ImgBubble from './ImgBubble';
import TextBubble from './TextBubble';
import BtnAnimeBubble from './BtnAnimeBubble';
// import BtnGroupBubble from './BtnGroupBubble';
import PWInput from './PWInput';
import CardsBubble from './CardsBubble';
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
    // Just for test
    const bubInfo = [];
    bubInfo.push(cardsBub10);
    return (
      <section className="chatbox-container">
        {/*<CardsBubble bubInfo={bubInfo[0].options} />*/}
        <Button onClick={() => onBubbleClick(null, cardsBub10)} type={CBUB.CARDS_BUBBLE}>Add Bubble(TEST)</Button>
        {/*TEST BUTTON */}
        {allBubbles.map((bub) => {
          if (bub.bubType === CBUB.TEXT_BUBBLE) {
            return (
              <TextBubble key={bub.stepId}
              checkNextStep={onCheckNextStep(bub.requestClick, bub.nextStepId)}
              text={this.getTextArr(bub.bubContent.text)} speaker="bot" onNext={onCheckNextStep} />);
          }
          if (bub.bubType === CBUB.IMAGE_BUBBLE) {
            return ( <ImgBubble key={bub.stepId}
              checkNextStep={onCheckNextStep}
              imgSrc={Gopher} />
            );
          }
          if (bub.bubType === CBUB.BUTTONGROUP_BUBBLE) {
            // console.log("BUTTONGROUP_BUBBLE - ", bub.options);
            return (
              <BtnAnimeBubble
                key={bub.stepId}
                options={bub.options}
                onBtnClick={onBubbleClick}
                checkNextStep={onCheckNextStep}
                label="Choose an option"
              />);
          }
          if (bub.bubType === CBUB.INPUTPW_BUBBLE) {
            // console.log("INPUTPW_BUBBLE - ", bub);
            return (
              <PWInput checkNextStep={onCheckNextStep}
              label="Type the Password" enableBack clearBox={this.handleClearBox} />);
          }
          if (bub.bubType === CBUB.CARDS_BUBBLE) {
            console.log("CARDS_BUBBLE - ", bub);
            return (
              <CardsBubble key={bub.stepId}
                checkNextStep={onCheckNextStep}
                bubInfo={bub.options} />);
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
  onBubbleClick: PropTypes.func,
  onCheckNextStep: PropTypes.func
};

export default Chatbox;

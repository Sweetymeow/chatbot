import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chatbox.css';
import { CBUB } from '../redux/constants';

//Bubble Comps
import ImgBubble from './ImgBubble';
import TextBubble from './TextBubble';
import BtnAnimeBubble from './BtnAnimeBubble';
// import BtnAnimeContainer from '../container/BtnAnimeContainer';
import PWInput from './PWInput';
import CardsBubble from './CardsBubble';
//Image
import Gopher from '../res/Gopher.png';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holderHeight: 200
    };
    this.getTextArr = this.getTextArr.bind(this);
  }

  // componentDidMount() {  }
  // componentDidUpdate() {  }

  getTextArr(text) {
    return text.split("$$");
  }

  render() {
    const { allBubbles, onBubbleClick, onCheckNextStep, getBoxHeight, getContainerHeight } = this.props;
    const { holderHeight } = this.state;
    let eleHeight = 0;
    return (
      <section className="chatbox-container" ref={ele => {
        getContainerHeight(ele ? ele.offsetHeight : 0);
      }}>
        <div ref={ele => {
          eleHeight = ele ? ele.offsetHeight : 0;
          // if (!this.state.chatbox && ele) {
          //   this.setState({
          //     chatbox: ele
          //   });
          // }
          getBoxHeight(eleHeight);
        }}>
        {/*<CardsBubble bubInfo={bubInfo[0].options} />*/}
          {allBubbles.map((bub, idx) => {
            if (bub.bubType === CBUB.TEXT_BUBBLE) {
              return (
                <TextBubble key={bub.stepId}
                  delayTimer={bub.delayTimer || 600 * idx}
                  isGoNextStep={bub.isGoNextAuto}
                  nextStepId={bub.nextStepId}
                  onCheckNextAuto={onCheckNextStep}
                  text={this.getTextArr(bub.bubContent.text)} speaker="bot" />);
            }
            if (bub.bubType === CBUB.IMAGE_BUBBLE) {
              return ( <ImgBubble key={bub.stepId}
                delayTimer={bub.delayTimer || 600}
                checkNextStep={onCheckNextStep}
                imgSrc={Gopher} />
              );
            }
            if (bub.bubType === CBUB.BUTTONGROUP_BUBBLE) {
              return (
              // <BtnAnimeContainer key={bub.stepId}
              //   delayTimer={bub.delayTimer || 600} options={bub.options}
              //   currentBub={bub} onBtnClick={onBubbleClick}
              //   nextStepId={bub.nextStepId}  checkNextStep={onCheckNextStep}
              //   label={bub.label} />);
              <BtnAnimeBubble
                key={bub.stepId}
                delayTimer={bub.delayTimer || 600}
                options={bub.options}
                onBtnClick={onBubbleClick}
                isGoNextStep={bub.isGoNextAuto}
                nextStepId={bub.nextStepId}
                checkNextStep={onCheckNextStep}
                label={bub.label}
              />);
            }
            if (bub.bubType === CBUB.INPUTPW_BUBBLE) {
              // console.log("INPUTPW_BUBBLE - ", bub);
              return (
                <PWInput
                  key={bub.stepId}
                  onLogin={onBubbleClick}
                  nextStepId={bub.nextStepId}
                  label={bub.label} enableBack clearBox={this.handleClearBox} />);
            }
            if (bub.bubType === CBUB.CARDS_BUBBLE) {
              return (
                <CardsBubble key={bub.stepId}
                  checkNextStep={onCheckNextStep}
                  bubInfo={bub.options} />);
            }
            return null;
          })
        }
        </div>
        <div className="heightHolder" style={{ height: `${holderHeight}px` }}>..</div>
      </section>);
  }
}

Chatbox.propTypes = {
  getBoxHeight: PropTypes.func,
  getContainerHeight: PropTypes.func,
  onBoxExpand: PropTypes.func,
  allBubbles: PropTypes.arrayOf(
    PropTypes.shape({
      stepId: PropTypes.number.isRequired,
      isGoNextAuto: PropTypes.bool,
      bubType: PropTypes.string,
      bubContent: PropTypes.object,
      delayTimer: PropTypes.number
    }).isRequired
  ),
  onBubbleClick: PropTypes.func,
  onCheckNextStep: PropTypes.func
};

export default Chatbox;

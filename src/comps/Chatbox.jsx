import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chatbox.css';
import { CBUB } from '../redux/constants';
// import firebase from '../firebase';

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
      holderHeight: 200,
      element: null,
      container: null
    };
    this.getTextArr = this.getTextArr.bind(this);
  }

  componentWillMount() {
    this.props.onInit();
  }

  componentDidUpdate() {
    const { scrollTop } = this.props;
    // console.log("Ele State - TOP: ", this.state.element.getBoundingClientRect().top);
    setTimeout(() => {
      console.log(`@@@UPDATE SCROLL TOP @@@ - ${scrollTop}`);
      this.state.container.scrollTop = scrollTop;
    }, 3000);
  }

  getTextArr(text) {
    return text.split("$$");
  }

  render() {
    const { allBubbles, onBubbleClick, onCheckNextStep, getBoxHeight, getContainerHeight, containerHeight, getScrollTop } = this.props;
    const { holderHeight, element, container } = this.state;
    let eleHeight = 0;
    // let parentRef = null;
    return (
      <section className="chatbox-container" ref={ele => {
        getContainerHeight(ele ? ele.offsetHeight : 0);
        if (!container && ele) {
          this.setState({
            container: ele
          });
        }
      }} id="chatbox-outer">
        <div id="chatbox-inner" ref={ele => {
          eleHeight = ele ? ele.offsetHeight : 0;
          getBoxHeight(eleHeight);
          if (!element && ele) {
            this.setState({
              element: ele
            });
          }
        }}>
        {/*<CardsBubble bubInfo={bubInfo[0].options} />*/}
          {allBubbles.map((bub, idx) => {
            if (bub.bubType === CBUB.TEXT_BUBBLE) {
              return (
                <TextBubble id={`bubble-${bub.stepId}`}
                  key={bub.stepId}
                  delayTimer={bub.delayTimer || 600 * idx}
                  isGoNextStep={bub.isGoNextAuto}
                  nextStepId={bub.nextStepId}
                  onCheckNextAuto={onCheckNextStep}
                  text={this.getTextArr(bub.bubContent.text)} speaker="bot" />);
            }
            if (bub.bubType === CBUB.IMAGE_BUBBLE) {
              return ( <ImgBubble id={`bubble-${bub.stepId}`}
                key={bub.stepId}
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
                id={`bubble-${bub.stepId}`}
                key={bub.stepId}
                delayTimer={bub.delayTimer || 600}
                options={bub.options}
                onBtnClick={onBubbleClick}
                isGoNextStep={bub.isGoNextAuto}
                nextStepId={bub.nextStepId}
                checkNextStep={onCheckNextStep}
                getScrollTop={getScrollTop}
                parentRect={element ? element.getBoundingClientRect() : null}
                label={bub.label}
              />);
            }
            if (bub.bubType === CBUB.INPUTPW_BUBBLE) {
              // console.log("INPUTPW_BUBBLE - ", bub);
              return (
                <PWInput key={bub.stepId}
                  id={`bubble-${bub.stepId}`}
                  onLogin={onBubbleClick}
                  nextStepId={bub.nextStepId}
                  label={bub.label} enableBack clearBox={this.handleClearBox} />);
            }
            if (bub.bubType === CBUB.CARDS_BUBBLE) {
              return (
                <CardsBubble key={bub.stepId}
                  id={`bubble-${bub.stepId}`}
                  checkNextStep={onCheckNextStep}
                  bubInfo={bub.options} />);
            }
            return null;
          })
        }
        </div>
        <div className="heightHolder" style={{ height: `${Math.floor(containerHeight / 2)}px` }}>..</div>
      </section>);
  }
}

Chatbox.propTypes = {
  getScrollTop: PropTypes.func,
  getBoxHeight: PropTypes.func,
  getContainerHeight: PropTypes.func,
  allBubbles: PropTypes.arrayOf(
    PropTypes.shape({
      stepId: PropTypes.number.isRequired,
      isGoNextAuto: PropTypes.bool,
      bubType: PropTypes.string,
      bubContent: PropTypes.object,
      delayTimer: PropTypes.number
    }).isRequired
  ),
  scrollTop: PropTypes.number,
  containerHeight: PropTypes.number,
  onInit: PropTypes.func,
  onBubbleClick: PropTypes.func,
  onCheckNextStep: PropTypes.func
};

export default Chatbox;

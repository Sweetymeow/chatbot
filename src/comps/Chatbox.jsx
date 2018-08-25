import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chatbox.css';
import { Image } from 'semantic-ui-react';
import { CBUB, DELAY_TIMER } from '../redux/constants';
import scrollAnime from './scrollAnime';
//Bubble Comps
import ImgBubble from './ImgBubble';
import TextBubble from './TextBubble';
import BtnAnimeBubble from './BtnAnimeBubble';
// import BtnAnimeContainer from '../container/BtnAnimeContainer';
import PWInput from './PWInput';
import CardsBubble from './CardsBubble';
import { Gopher, successText, fadeImg1 } from '../res/imgBundle';

const innerBoxId = "chatbox-inner";

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: null
    };
    this.getTextArr = this.getTextArr.bind(this);
    // this.scrollAnime = this.scrollAnime.bind(this);
    this.scrollToPosition = this.scrollToPosition.bind(this);
  }

  componentWillMount() {
    this.props.onInit();
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    // this.scrollAnime(startTime, 3000, "linear");
  }

  componentDidUpdate() {
    const { getBoxHeight } = this.props;

    const innerBox = document.getElementById(innerBoxId);
    getBoxHeight(innerBox.offsetHeight);

    // Scroll To Right Position
    this.scrollToPosition();
  }

  getTextArr(text) {
    return text.split("$$");
  }

  scrollToPosition() {
    const { scrollTop } = this.props;
    const { container } = this.state;

    setTimeout(() => {
      if ( scrollTop - container.scrollTop > 0 ) {
        // console.log(`${container.scrollTop} -> Scroll to -> ${scrollTop}`);
        scrollAnime(container, container.scrollTop, scrollTop, 10);
      }
    }, 1);
  }

  render() {
    const { allBubbles, onBubbleClick, onCheckNextStep, getContainerHeight, getScrollTop, onContainerScroll } = this.props; // containerHeight, getBoxHeight
    const { container } = this.state;
    return (
      <div id="testId">
        <section className="chatbox-container" ref={ele => {
          getContainerHeight(ele ? ele.offsetHeight : 0);
          if (!container && ele) {
            this.setState({
              container: ele
            });
          }
        }} id="chatbox-outer">
          <Image src={fadeImg1} size="medium" disabled id="fade-top-img" />
          <Image src={fadeImg1} size="medium" disabled id="fade-bottom-img" />
          <div id={innerBoxId}>
          {/* <CardsBubble bubInfo={bubInfo[0].options} /> */}
          {allBubbles.map((bub) => {
            if (bub.isTriggerAnime) {
              onContainerScroll(bub.targetId, bub.delayTimer * 2);
            }
            if (bub.bubType === CBUB.TEXT_BUBBLE) {
              return (
                <TextBubble id={`bubble-${bub.stepId}`}
                  key={bub.stepId}
                  delayTimer={bub.delayTimer || 600}
                  isGoNextStep={bub.isGoNextAuto}
                  nextStepId={bub.nextStepId}
                  onCheckNextAuto={onCheckNextStep}
                  link={bub.bubContent.link}
                  text={this.getTextArr(bub.bubContent.text)} speaker="bot" />);
            }
            if (bub.bubType === CBUB.IMAGE_BUBBLE) {
              console.log("Image bub: ", bub);
              return ( <ImgBubble id={`bubble-${bub.stepId}`}
                key={bub.stepId}
                delayTimer={bub.delayTimer || 600}
                checkNextStep={onCheckNextStep}
                imgSrc={bub.bubContent.imgSrc === "Gopher" ? Gopher : successText}
                imgSize={bub.bubContent.imgSize}
                isScroll={bub.bubContent.isScroll} />
              );
            }
            if (bub.bubType === CBUB.BUTTONGROUP_BUBBLE) {
              return (
              <BtnAnimeBubble
                id={`bubble-${bub.stepId}`}
                key={bub.stepId}
                delayTimer={bub.delayTimer || 600}
                options={bub.options}
                onBtnClick={onBubbleClick}
                isGoNextStep={bub.isGoNextAuto}
                nextStepId={bub.nextStepId}
                checkNextStep={onCheckNextStep}
                label={bub.label}
              />);
              // getScrollTop={getScrollTop}
            }
            if (bub.bubType === CBUB.INPUTPW_BUBBLE) {
              return (<PWInput key={bub.stepId}
                  id={`bubble-${bub.stepId}`}
                  options={bub.options}
                  delayTimer={bub.delayTimer || 600}
                  onBtnClick={onBubbleClick}
                  nextStepId={bub.nextStepId}
                  label={bub.label} enableBack clearBox={this.handleClearBox} />
              );
            }
            if (bub.bubType === CBUB.CARDS_BUBBLE) {
              return (
                <CardsBubble key={bub.stepId}
                  id={`bubble-${bub.stepId}`}
                  delayTimer={bub.delayTimer || 600}
                  checkNextStep={onCheckNextStep}
                  getScrollTop={getScrollTop}
                  bubInfo={bub.options} />);
            }
            return null;
          })
        }
          </div>
          <div className="heightHolder">..</div>

          {/* <div className="heightHolder" style={{ height: `${Math.floor(containerHeight / 2)}px` }}>..</div> */}
        </section>
      </div>);
  }
}

Chatbox.propTypes = {
  getScrollTop: PropTypes.func,
  getBoxHeight: PropTypes.func,
  getContainerHeight: PropTypes.func,
  onContainerScroll: PropTypes.func,
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

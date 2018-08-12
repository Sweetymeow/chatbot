import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chatbox.css';
import { CBUB } from '../redux/constants';
// import { scrollToEle } from "../redux/scroll";

//Bubble Comps
import ImgBubble from './ImgBubble';
import TextBubble from './TextBubble';
import BtnAnimeBubble from './BtnAnimeBubble';
// import BtnAnimeContainer from '../container/BtnAnimeContainer';
import PWInput from './PWInput';
import CardsBubble from './CardsBubble';
//Image
import Gopher from '../res/Gopher.png';

const innerBoxId = "chatbox-inner";

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: null
    };
    this.getTextArr = this.getTextArr.bind(this);
    this.scrollAnime = this.scrollAnime.bind(this);
  }

  componentWillMount() {
    this.props.onInit();
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    // this.scrollAnime(startTime, 3000, "linear");
  }

  componentDidUpdate() {
    const { scrollTop } = this.props;
    const { container } = this.state;
    // console.log("Ele State - TOP: ", this.state.element.getBoundingClientRect().top);
    // const animeTimer = setTimeout(() => {
    //   console.log(`@@@UPDATE SCROLLTOP @@@ ${container.scrollTop} -> ${scrollTop}`);
    //   container.scrollTop = scrollTop;
    // }, 500);
    if ( scrollTop - container.scrollTop ) {
      console.log(`${container.scrollTop} -> Scroll to -> ${scrollTop}`);
      this.scrollAnime(container, container.scrollTop, scrollTop, 10);
    }

    const innerBox = document.getElementById(innerBoxId);
    // console.log("Chartbox innerBox.offsetHeight - ", innerBox.offsetHeight);
    this.props.getBoxHeight(innerBox.offsetHeight);
  }

  getTextArr(text) {
    return text.split("$$");
  }

  scrollAnime(container, currentST, targetST, step) {
    // 计算需要移动的距离
    const stepPX = step || 10;
    const needScrollTop = targetST - currentST;
    let _currentST = currentST;

    setTimeout(() => { // 一次调用滑动帧数，每次调用会不一样
      const dist = Math.ceil(needScrollTop / stepPX);
      _currentST += dist;
      container.scrollTop = _currentST;
      // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
      if (needScrollTop > stepPX || needScrollTop < -stepPX) {
        this.scrollAnime(container, _currentST, targetST, step);
      } else {
        container.scrollTop = targetST;
      }
    }, 10);
  }

  render() {
    const { allBubbles, onBubbleClick, onCheckNextStep, getBoxHeight, getContainerHeight, getScrollTop } = this.props; // containerHeight,
    const { container } = this.state;
    return (
      <section className="chatbox-container" ref={ele => {
        getContainerHeight(ele ? ele.offsetHeight : 0);
        if (!container && ele) {
          this.setState({
            container: ele
          });
        }
      }} id="chatbox-outer">
        <div id={innerBoxId}>
        {/* <CardsBubble bubInfo={bubInfo[0].options} /> */}
        {allBubbles.map((bub) => {
          if (bub.bubType === CBUB.TEXT_BUBBLE) {
            return (
              <TextBubble id={`bubble-${bub.stepId}`}
                key={bub.stepId}
                delayTimer={bub.delayTimer || 600}
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
            // parentRect={element ? element.getBoundingClientRect() : null}
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
              label={bub.label}
            />);
          }
          if (bub.bubType === CBUB.INPUTPW_BUBBLE) {
            // console.log("INPUTPW_BUBBLE - ", bub);
            return (<PWInput key={bub.stepId}
                id={`bubble-${bub.stepId}`}
                delayTimer={bub.delayTimer || 600}
                onLogin={onBubbleClick}
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
        {/*<div className="heightHolder" style={{ height: `${Math.floor(containerHeight / 2)}px` }}>..</div>*/}
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

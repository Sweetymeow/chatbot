import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Transition, Image } from 'semantic-ui-react';
import imgDownload from '../res/DownloadCV.svg';
import cvFile from '../file/cv.pdf';
import '../styles/Chatbox.css';

// const labelFadeTimer = 400; // ms
const fadeTimer = 400; // ms
const moveRightVal = [{ transform: "translate(calc((75vw - 2.4rem) * .5))" }, { transform: "translate(calc((75vw - 2.4rem) * .15))" }, { transform: "translate(calc((75vw - 2.4rem) * -.4))" }];

class BtnAnimeBubble extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.btnToTextBub = this.btnToTextBub.bind(this);
    this.state = {
      showBtnGroup: false,
      activeIndex: [],
      // showLabel: true,
      showAnswerBub: false,
      answerText: ""
    };
  }

  componentDidMount() {
    const { delayTimer, isGoNextStep, nextStepId, checkNextStep } = this.props;
    const colLength = this.props.options.length;
    const newActiveIdx = [];
    for (let i = 0; i < colLength; i++) {
      newActiveIdx.push(i);
    }
    this.setState({
      activeIndex: newActiveIdx,
      animeStyle: {}
    });
    setTimeout(() => {
      this.setState({
        showBtnGroup: true
      });
    }, delayTimer);

    checkNextStep(isGoNextStep, nextStepId);
  }

  btnToTextBub(idx) {
    // const { options } = this.props;

    setTimeout(() => {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex.filter(index => index === idx),
        showAnswerBub: true
      }));
    }, fadeTimer);
  }

  render() {
    const { activeIndex, animeStyle, showBtnGroup, showAnswerBub, answerText } = this.state;
    const { id, options, onBtnClick, label, checkNextStep, containerHeight, getScrollTop, scrollTop } = this.props;
    const btnColLength = options.length;
    let eleRect = {};
    const innerBox = document.getElementById("chatbox-inner");
    return (
      <div className="btn-container clearfix" id={id}
        ref={ele => {
          eleRect = ele || null;
        }}>
         {/* <Transition visible={showLabel} animation="fade up" duration={labelFadeTimer}> */}
         <Transition visible={showBtnGroup} animation="fade down" duration={fadeTimer}>
           <div>
             <p className="btn-group-label">{label}</p>
             <Grid stackable className="btn-group">
                <Grid.Row centered columns={btnColLength} stretched>
                  {options.map((item, idx) => (
                      <Grid.Column width={6}
                        largeScreen={5}
                        className={activeIndex.indexOf(idx) !== -1 ? "" : "hiddenAnime"} id={`btn-column-${item.opId}`} key={item.opId} textAlign="center">
                        <Button primary
                          className={item.opLink ? "roundBtn" : null}
                          value={item.opVal}
                          key={item.opId + 2}
                          style={animeStyle}
                          onClick={(e, { value }) => {
                            const moveDist = eleRect.getBoundingClientRect().top - innerBox.getBoundingClientRect().top;

                            // console.log("@@ ELE Rect Top: ", eleRect.getBoundingClientRect().top);
                            console.log("@@ Move Dist: ", moveDist);
                            this.setState({
                              answerText: value,
                              showBtnGroup: false
                            })

                            getScrollTop(moveDist);
                            // const isMoveLeft = item.opLink;
                            onBtnClick(item.nextStepId, null, containerHeight);
                            checkNextStep(item.requestClick, item.nextStepId);
                            this.btnToTextBub(idx);
                          }}>
                          {item.opLink ? (<Image as="a" src={imgDownload} target="_blank" href={item.opLink} download />) : item.opText }
                        </Button>
                      </Grid.Column>))}
                </Grid.Row>
             </Grid>
           </div>
         </Transition>
         <Transition visible={showAnswerBub} animation="fade left" duration={fadeTimer}>
           <p className="text-bubble right-bubble">{answerText}</p>
         </Transition>
      </div>
    );
  }
}

BtnAnimeBubble.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      opId: PropTypes.number,
      opText: PropTypes.string,
      opVal: PropTypes.string
    })
  ),
  scrollTop: PropTypes.number,
  containerHeight: PropTypes.number,
  delayTimer: PropTypes.number,
  onBtnClick: PropTypes.func,
  checkNextStep: PropTypes.func,
  getScrollTop: PropTypes.func,
  isGoNextStep: PropTypes.bool,
  nextStepId: PropTypes.number,
  id: PropTypes.string,
  label: PropTypes.string
};

export default BtnAnimeBubble;

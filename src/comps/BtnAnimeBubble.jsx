import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Transition, Image } from 'semantic-ui-react';
import imgDownload from '../res/DownloadCV.svg';
import '../styles/Chatbox.css';

const labelFadeTimer = 400; // ms
const fadeTimer = 600; // ms
const moveRightVal = [{ transform: "translate(calc((75vw - 2.4rem) * .5))" }, { transform: "translate(calc((75vw - 2.4rem) * .15))" }, { transform: "translate(calc((75vw - 2.4rem) * -.4))" }];

class BtnAnimeBubble extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.btnToTextBub = this.btnToTextBub.bind(this);
    this.state = {
      showBtnGroup: false,
      activeIndex: [],
      showLabel: true
    };
  }

  componentDidMount() {
    const { delayTimer } = this.props;
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
  }

  btnToTextBub(idx, isMoveLeft) {
    // const { options } = this.props;

    setTimeout(() => {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex.filter(index => index === idx),
        showLabel: false
      }));

      setTimeout( () => {
        this.setState({
          animeStyle: isMoveLeft ? moveRightVal[2] : moveRightVal[idx]
        });
      }, fadeTimer);
    }, labelFadeTimer);
  }

  render() {
    const { activeIndex, showLabel, animeStyle, showBtnGroup } = this.state;
    const { id, options, onBtnClick, label, checkNextStep, containerHeight, getScrollTop, scrollTop } = this.props;
    const btnColLength = options.length;
    let eleRect = {};
    const innerBox = document.getElementById("chatbox-inner");
    return (
      <Transition visible={showBtnGroup} animation="fade down" duration={1000}>
        <div className="btn-container" id={id}
          ref={ele => {
            eleRect = ele || null;
          }}>
          {/*<div className="bub-60wid-center">*/}
           <Transition visible={showLabel} animation="fade up" duration={labelFadeTimer}>
             <p className="btn-group-label">{label}</p>
           </Transition>
           <Grid className="btn-group">
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
                        onClick={() => {
                          const moveDist = eleRect.getBoundingClientRect().top - innerBox.getBoundingClientRect().top;

                          console.log("@@ ELE Rect Top: ", eleRect.getBoundingClientRect().top);
                          console.log("@@ Move Dist: ", moveDist);

                          getScrollTop(moveDist);
                          const isMoveLeft = item.opLink;
                          onBtnClick(item.nextStepId, null, containerHeight);
                          checkNextStep(item.requestClick, item.nextStepId);
                          this.btnToTextBub(idx, isMoveLeft);
                        }}>
                        {item.opLink ? (<Image as="a" src={imgDownload} target="_blank" href={item.opLink} download />) : item.opText }
                      </Button>
                    </Grid.Column>))}
              </Grid.Row>
           </Grid>
        </div>
      </Transition>
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
  parentRect: PropTypes.object,
  delayTimer: PropTypes.number,
  onBtnClick: PropTypes.func,
  getScrollTop: PropTypes.func,
  checkNextStep: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string
};

export default BtnAnimeBubble;

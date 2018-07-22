import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Transition, Image } from 'semantic-ui-react';
import imgDownload from '../res/DownloadCV.svg';
import '../styles/Chatbox.css';

const fadeTimer = 500; // ms
const moveRightVal = [
  { transform: "translate(calc((75vw - 2.4rem) * .5))" },
  { transform: "translate(calc((75vw - 2.4rem) * .15))" },
  { transform: "translate(calc((75vw - 2.4rem) * -.4))" }
];

class BtnAnimeBubble extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.btnToTextBub = this.btnToTextBub.bind(this);
    // this.state = {
    //   animeStyle: {}
    // };
  }

  componentDidMount() {
    console.log("Current Bubble Props: ", this.props );
    const { delayTimer, toggleVisible, initCompVisible, options } = this.props;
    initCompVisible(options.length);
    setTimeout(() => {
      toggleVisible(true);
    }, delayTimer);
  }

  // componentDidUpdate() {
  //   console.log("activeIndex: ", this.state.activeIndex);
  // }

  btnToTextBub(idx, isMoveLeft) {
    const { options, activeIndex } = this.props;

    this.setState(prevState => ({
      activeIndex: prevState.activeIndex.filter(index => index === idx)
    }));

    setTimeout( () => {
      options.map(() => {
        // console.log("Button Options -> ", index, option);
        this.setState({
          showLabel: false,
          animeStyle: isMoveLeft ? moveRightVal[2] : moveRightVal[idx]
        });
        return null;
      })
    }, fadeTimer);
  }

  render() {
    // const { animeStyle } = this.state;
    const { options, onBtnClick, label, checkNextStep, activeIndex, showBtnGroup, btnToTextBub, showLabel, toggleVisible } = this.props;
    const btnColLength = options.length;
    return (
      <Transition visible={showBtnGroup} animation="fade down" duration={1000}>
        <div className="btn-container">
          {/*<div className="bub-60wid-center">*/}
           <Transition visible={showLabel} animation="fade" duration={500}>
             <p className="btn-group-label">{label}</p>
           </Transition>
           <Transition visible={showBtnGroup} animation="fade" duration={500}>
             <Grid className="btn-group">
                <Grid.Row centered columns={btnColLength} stretched>
                  {options.map((item, idx) => (
                      <Grid.Column width={6} largeScreen={5}
                        id={`btn-column-${item.opId}`}
                        key={item.opId} textAlign="center">
                        <Button primary
                          className={item.opLink ? "roundBtn" : null}
                          value={item.opVal}
                          key={item.opId + 2}
                          onClick={() => {
                            // const isStayButton = item.opLink;
                            toggleVisible(false);
                            onBtnClick(item.nextStepId);
                            checkNextStep(item.requestClick, item.nextStepId);
                            btnToTextBub(idx);
                          }}>
                          {item.opLink ? (<Image as="a" src={imgDownload} target="_blank" href={item.opLink} download />) : item.opText }
                        </Button>
                      </Grid.Column>))}
                </Grid.Row>
             </Grid>
           </Transition>
           <Transition visible={!showBtnGroup} animation="fade" duration={500}>
             <p className="text-bubble right-bubble">{options[activeIndex[0] || 0].opText}</p>
           </Transition>
        </div>
      </Transition>
    );
  }
}

BtnAnimeBubble.propTypes = {
  currentBubble: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      opId: PropTypes.number,
      opText: PropTypes.string,
      opVal: PropTypes.string
    })
  ),
  activeIndex: PropTypes.array,
  showLabel: PropTypes.bool,
  showBtnGroup: PropTypes.bool,
  delayTimer: PropTypes.number,
  btnToTextBub: PropTypes.func,
  toggleVisible: PropTypes.func,
  initCompVisible: PropTypes.func,
  onBtnClick: PropTypes.func,
  checkNextStep: PropTypes.func,
  label: PropTypes.string
};

export default BtnAnimeBubble;

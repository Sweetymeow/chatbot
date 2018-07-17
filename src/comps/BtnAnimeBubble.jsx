import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from 'semantic-ui-react'; // Image,
import '../styles/Chatbox.css';

const fadeTimer = 500; // ms
const moveRightStyle = "transform: translate(36vw)";

class BtnAnimeBubble extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.btnToTextBub = this.btnToTextBub.bind(this);
    this.hiddenAllOther = this.hiddenAllOther.bind(this);
    this.state = {
      activeIndex: [],
      showLabel: true,
      isMoveRight: false
    };
  }

  componentDidMount() {
    const colLength = this.props.options.length + 2;
    const newActiveIdx = [];
    for (let i = 0; i < colLength; i++) {
      newActiveIdx.push(i);
    }
    this.setState({
      activeIndex: newActiveIdx
    });
  }

  // componentDidUpdate() {
  //   console.log("activeIndex: ", this.state.activeIndex);
  // }

  btnToTextBub(idx, btnColLength) {
    const { options } = this.props;
    console.log("Click btn idx: ", idx);

    this.setState(prevState => ({
      activeIndex: [prevState.activeIndex[0],
        ...prevState.activeIndex.filter(index => index === idx),
        prevState.activeIndex[prevState.activeIndex.length - 1]
      ]
    }));

    setTimeout( () => {
      options.map((option, index) => {
        console.log("Button Options -> ", index, option);
        this.setState({
          showLabel: false,
          isMoveRight: true
        });
        // style={{ transform : "translate(36vw)" }}
      })
    }, fadeTimer);
  }

  hiddenAllOther(idx) {
  }

  render() {
    const { activeIndex, showLabel,isMoveRight } = this.state;
    const { options, onBtnClick, label, checkNextStep } = this.props;
    const btnColLength = options.length + 2;
    return (
      <div className="btn-container">
        {/*<div className="bub-60wid-center">*/}
          {showLabel ? (<p className="btn-group-label">{label}</p>) : null}
          <Grid className="btn-group">
            <Grid.Row centered columns={btnColLength}>
              {/*<Grid.Column className={activeIndex.indexOf(0) !== -1 ? "test" : "hiddenAnime"} width={2} largeScreen={4} mobile={1}>..</Grid.Column>*/}
              {activeIndex.indexOf(0) !== -1 ? <Grid.Column width={2} largeScreen={4} mobile={1}>..</Grid.Column> : null}
              {options.map((item, idx) => (
                  <Grid.Column width={6}
                    largeScreen={4} mobile={7}
                    className={activeIndex.indexOf(idx + 1) !== -1 ? "" : "hiddenAnime"} id={`btn-column-${item.opId}`} key={item.opId} textAlign="center">
                    <Button primary value={item.opVal}
                      key={item.opId + 2}
                      onClick={() => {
                        onBtnClick(item.nextStepId);
                        checkNextStep(item.requestClick, item.nextStepId);
                        this.btnToTextBub(idx + 1, btnColLength);
                      }}>
                      {item.opText}
                    </Button>
                  </Grid.Column>))}
              {/*{options.map((item, idx) => (
                  <Grid.Column width={6}
                    largeScreen={4} mobile={7}
                    className={activeIndex.indexOf(0) !== -1 ? "test" : "hiddenAnime"} id={`btn-column-${item.opId}`} key={item.opId} textAlign="center">
                    <Button primary value={item.opVal}
                      key={item.opId + 2}
                      onClick={() => {
                        onBtnClick(item.nextStepId);
                        checkNextStep(item.requestClick, item.nextStepId);
                        this.btnToTextBub(idx + 1);
                      }}>
                      {item.opText}
                    </Button>
                  </Grid.Column>))}*/}
               {/*<Grid.Column className={(activeIndex.indexOf(options.length + 1) !== -1) > 0 ? "test" : "hiddenAnime"} width={2} largeScreen={4} mobile={1}>..</Grid.Column>*/}
               {activeIndex.indexOf(btnColLength - 1) !== -1 ? <Grid.Column width={2} largeScreen={4} mobile={1}>..</Grid.Column> : null}
            </Grid.Row>
          </Grid>
        <div className="bub-fullwidth init-bubposition">
          <Button className="text-bubble right-bubble">
            {options[0].opText}
          </Button>
        </div>
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
  onBtnClick: PropTypes.func,
  checkNextStep: PropTypes.func,
  label: PropTypes.string
};

export default BtnAnimeBubble;

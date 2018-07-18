import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Transition, Image } from 'semantic-ui-react'; // Image,
import '../styles/Chatbox.css';

const fadeTimer = 500; // ms
const moveRightVal = [{ transform: "translate(196%)" }, { transform: "translate(76%)" }];

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
    const colLength = this.props.options.length;
    const newActiveIdx = [];
    for (let i = 0; i < colLength; i++) {
      newActiveIdx.push(i);
    }
    console.log("newActiveIdx - ", newActiveIdx);
    this.setState({
      activeIndex: newActiveIdx,
      animeStyle: {}
    });
  }

  // componentDidUpdate() {
  //   console.log("activeIndex: ", this.state.activeIndex);
  // }

  btnToTextBub(idx) {
    const { options } = this.props;
    console.log("Click btn idx: ", idx);

    this.setState(prevState => ({
      activeIndex: prevState.activeIndex.filter(index => index === idx)
    }));

    setTimeout( () => {
      options.map((option, index) => {
        console.log("Button Options -> ", index, option);
        this.setState({
          showLabel: false,
          animeStyle: moveRightVal[idx]
        });
        return null;
      })
    }, fadeTimer);
  }

  hiddenAllOther(idx) {
  }

  render() {
    const { activeIndex, showLabel, animeStyle } = this.state;
    const { options, onBtnClick, label, checkNextStep } = this.props;
    const btnColLength = options.length;
    return (
      <div className="btn-container">
        {/*<div className="bub-60wid-center">*/}
         <Transition visible={showLabel} animation="fade" duration={500}>
           <p className="btn-group-label">{label}</p>
         </Transition>
          <Grid className="btn-group">
            <Grid.Row centered columns={btnColLength} stretched>
              {options.map((item, idx) => (
                  <Grid.Column width={6}
                    largeScreen={5}
                    className={activeIndex.indexOf(idx) !== -1 ? "" : "hiddenAnime"} id={`btn-column-${item.opId}`} key={item.opId} textAlign="center">
                    <Button primary value={item.opVal}
                      key={item.opId + 2}
                      style={animeStyle}
                      onClick={() => {
                        onBtnClick(item.nextStepId);
                        checkNextStep(item.requestClick, item.nextStepId);
                        this.btnToTextBub(idx);
                      }}>
                      {item.opText}
                    </Button>
                  </Grid.Column>))}
            </Grid.Row>
          </Grid>
        {/*<div className="bub-fullwidth init-bubposition">
          <Button className="text-bubble right-bubble">
            {options[0].opText}
          </Button>
        </div>*/}
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

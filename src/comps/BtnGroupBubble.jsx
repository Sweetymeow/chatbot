import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from 'semantic-ui-react'; // Image,
import '../styles/Chatbox.css';

class BtnGroupBubble extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

  }

  render() {
    const { options, onBtnClick, label, checkNextStep } = this.props;
    return (
      <div className="btn-container bub-60wid-center">
        {/* <Image className="bot-tail-left" src={BubTail} size="tiny" /> */}
        <p className="btn-group-label">{label}</p>
        <Grid className="btn-group">
          <Grid.Row centered columns={options.length}>
            {options.map(item => (
                <Grid.Column key={item.opId} textAlign="center">
                  <Button primary value={item.opVal}
                    key={item.opId + 2}
                    onClick={() => {
                      onBtnClick(item.nextStepId);
                      checkNextStep(item.requestClick, item.nextStepId);
                    }}>
                    {item.opText}
                  </Button>
                  {/*<Button primary value={item.opVal}
                    key={item.opId + 2}
                    onClick={onBtnClick} >
                    {item.opText}
                  </Button>*/}
                </Grid.Column>))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

BtnGroupBubble.propTypes = {
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

export default BtnGroupBubble;

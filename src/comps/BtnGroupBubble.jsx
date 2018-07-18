import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Image, Icon } from 'semantic-ui-react';
import '../styles/Chatbox.css';
import imgDownload from '../res/DownloadCV.svg';

class BtnGroupBubble extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

  }

  render() {
    const { options, onBtnClick, label, checkNextStep } = this.props;
    console.log("BUTTON OPTIONS", options);
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
                    <Icon name='download' /> Facebook
                    {item.opText}
                  </Button>
                  <Image as="a" src={imgDownload} href={item.opLink} />
                  {item.opLink ? <Image as="a" src={imgDownload} href={item.opLink} /> : null}
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

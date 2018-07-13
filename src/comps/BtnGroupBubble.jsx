import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from 'semantic-ui-react'; // Image,
import '../styles/Chatbox.css';

const BtnGroupBubble = (props) => {
  const { options, label } = props; // btnWidth
  return (
    <div className="btn-container bub-60wid-center">
      {/* <Image className="bot-tail-left" src={BubTail} size="tiny" /> */}
      <p className="btn-group-label">{label}</p>
      <Grid className="btn-group">
        <Grid.Row centered columns={options.length}>
          {options.map(item => (
              <Grid.Column key={item.opId} textAlign='center'>
                <Button primary value={item.opVal}>{item.opText}</Button>
              </Grid.Column>))}
           {/* <Grid.Column>
             <Button secondary>Secondary</Button>
           </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </div>
  );
};

BtnGroupBubble.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      opId: PropTypes.number,
      opText: PropTypes.string,
      opVal: PropTypes.string
    })
  ),
  label: PropTypes.string
};

export default BtnGroupBubble;

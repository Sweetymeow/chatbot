import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const CardsBubble = (props) => {
  const { bubInfo } = props;
  return (
    <div className="imgbub-container bub-fullwidth">
       {/*<Image className="left-bubble" src={imgSrc} size="tiny" avatar={} />*/}
    </div>
  );
}

CardsBubble.propTypes = {
  bubInfo: PropTypes.array.isRequired
  // imgName: PropTypes.string
};

export default CardsBubble;

import React from 'react'
import PropTypes from 'prop-types';
// import { Image } from 'semantic-ui-react';
import '../styles/Chatbox.css';

class TextBubble extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { checkNextStep } = this.props;
    // checkNextStep(item.requestClick, item.nextStepId);
    console.log(checkNextStep);
  }

  render() {
    const { text, html, bubWidth, type } = this.props;
    return (
      <div className="bub-fullwidth">
        { type !== "user" ? (
          <div className="text-bubble left-bubble" >
              {text.map((item, i) => <p key={i}>{item}</p>)}
              {/* <Image className="bot-tail-left" src={BubTail} /> */}
          </div>) : (
          <div className="text-bubble right-bubble" >
            {text.map((item, i) => <p key={i}>{item}</p>)}
          </div>)
        }
      </div>
    );
  }
}

TextBubble.propTypes = {
  text: PropTypes.array.isRequired,
  bubWidth: PropTypes.string,
  checkNextStep: PropTypes.func,
  type: PropTypes.string,
  html: PropTypes.string
};

export default TextBubble;

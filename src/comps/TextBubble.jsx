import React from 'react'
import PropTypes from 'prop-types';
import { Transition } from 'semantic-ui-react';
import '../styles/Chatbox.css';

class TextBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowText: false
    }
  }

  componentDidMount() {
    const { checkNextStep } = this.props;

    const { delayTimer } = this.props;
    // checkNextStep(item.requestClick, item.nextStepId);
    console.log("## checkNextStep", checkNextStep);
    setTimeout( () => {
      this.setState({
        isShowText: true
      })
    }, delayTimer);
  }

  render() {
    const { isShowText } = this.state;
    const { text, type } = this.props;
    return (
      <div className="bub-fullwidth">
        { type !== "user" ? (
          <div className="text-bubble left-bubble" >
              {text.map((item, i) => (
                <Transition key={i}
                  visible={isShowText}
                  animation="swing down"
                  duration={1000}>
                  <p>{item}</p>
                </Transition>))}
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
  delayTimer: PropTypes.number
  // html: PropTypes.string
};

export default TextBubble;

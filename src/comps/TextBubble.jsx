import React from 'react'
import PropTypes from 'prop-types';
import { Transition } from 'semantic-ui-react';
import '../styles/Chatbox.css';

const LinkSpan = (props) => {
  return (
    <a href={props.linkHref}>{props.linkText}</a>
  )
};

class TextBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowText: false
    };
  }

  componentDidMount() {
    const { onCheckNextAuto, isGoNextStep, nextStepId } = this.props;
    const { delayTimer } = this.props;

    onCheckNextAuto(isGoNextStep, nextStepId);

    setTimeout(() => {
      this.setState({
        isShowText: true
      });
    }, delayTimer);
  }

  render() {
    const { isShowText } = this.state;
    const { text, type, id } = this.props;
    return (
      <div className="bub-fullwidth" id={id}>
        { type !== "user" ? (
          <div className="text-bubble left-bubble" >
              {text.map((item, i) => (
                <Transition key={i}
                  visible={isShowText}
                  animation="fade down"
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
  isGoNextStep: PropTypes.bool,
  nextStepId: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.string,
  delayTimer: PropTypes.number,
  onCheckNextAuto: PropTypes.func
  // html: PropTypes.string
};

export default TextBubble;

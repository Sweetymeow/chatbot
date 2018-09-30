import React from 'react'
import PropTypes from 'prop-types';
import { Transition } from 'semantic-ui-react';
import '../styles/Chatbox.css';
import CSSLoader from './CSSLoader';

// const sapLink = "http://design.sap.com/";

const Boldspan = (props) => {
  return (
    <strong>{props.text}</strong>
  );
};

const Linkspan = (props) => {
  return (
    <a href={props.linkHref} target="_blank" rel="noreferrer noopener">{props.linkText}</a>
  );
};

class TextBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowText: false
    };
    this.checkBold = this.checkBold.bind(this);
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

  checkBold(text, link) {
    const textArr = text.split("**");
    const newTextArr = textArr.map(item => {
      if (item.indexOf("[[") > 0) {
        const linkArr = item.split("[[");
        return (
          <span>
            {linkArr[0]}
            <Linkspan linkText={` ${linkArr[1]} `} linkHref={link} /> {linkArr[2]}
          </span>);
      }
      return item
    });
    return newTextArr; //textArr;
  }

  render() {
    const { isShowText } = this.state;
    const { text, id, link } = this.props; // type
    return (
      <div className="bub-fullwidth" id={id}>
        { isShowText ? (
          <div className="text-bubble left-bubble" >
            { text.map((item, i) => {
              const textArr = this.checkBold(item, link);
              return (
                  <Transition key={i}
                    visible={isShowText}
                    animation="fade down"
                    duration={1000}>
                    <p>
                      {textArr[0]}
                      {<Boldspan text={textArr[1]} />}
                      {textArr[2]}
                    </p>
                    {/*<p>{item}</p>*/}
                  </Transition>);
            })
          }
          </div>) : (
          <div className="text-bubble left-bubble loader-container" >
            <CSSLoader />
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
  link: PropTypes.string,
  id: PropTypes.string,
  delayTimer: PropTypes.number,
  onCheckNextAuto: PropTypes.func
};

export default TextBubble;

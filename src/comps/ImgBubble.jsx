import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import { updateScrollTop } from '../redux/actions';

class ImgBubble extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  componentDidMount() {
    const { getScrollTopHeight, isScroll } = this.props;
    if (isScroll) {
      const eleRect = document.getElementById("scrollToImg").getBoundingClientRect();
      const innerBox = document.getElementById("chatbox-inner");
      // console.log(eleRect);
      const newScrollTop = eleRect.top - innerBox.getBoundingClientRect().top;
      getScrollTopHeight(newScrollTop);
    }
  }

  render() {
    const { imgSrc, imgSize, imgName } = this.props;
    return (
      <div className="imgbub-container bub-fullwidth" id="scrollToImg">
         <Image className="left-bubble" src={imgSrc} size={imgSize} avatar={imgName} />
      </div>
    );
  }
}

// const ImgBubble = (props) => {
//   const { imgSrc, imgName, imgSize } = props;
//   return (
//     <div className="imgbub-container bub-fullwidth">
//        <Image className="left-bubble" src={imgSrc} size={imgSize} avatar={imgName} />
//     </div>
//   );
// };

const mapDispatchToProps = (dispatch) => ({
  getScrollTopHeight: (height) => {
    dispatch(updateScrollTop(height));
  }
});

ImgBubble.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  getScrollTopHeight: PropTypes.func,
  imgName: PropTypes.string,
  imgSize: PropTypes.string,
  isScroll: PropTypes.bool
};

export default connect(null, mapDispatchToProps)(ImgBubble);
// export default ImgBubble;

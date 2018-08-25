import React from 'react'
import PropTypes from 'prop-types'
import "../styles/Loader.css";

// https://loading.io/css/
const CSSLoader = () => (
<div className="lds-ellipsis">
  <span>
    <div /><div /><div /><div />
  </span>
</div>);
// class CSSLoader extends React.Component {
//   render () {
//     return (<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>);
//   }
// }

export default CSSLoader;

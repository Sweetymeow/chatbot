import React from 'react'
import PropTypes from 'prop-types'
import "../styles/Loader.css";

// https://loading.io/css/
class CSSLoader extends React.Component {
  render () {
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  }
}

export default CSSLoader;

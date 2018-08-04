import React from 'react';
import "../styles/AnimeBackground.css";
// import PropTypes from 'prop-types';
import { bgc1, bgc2, bgc3, bgc4, bgc5, bgc6, bgc7, bgc8, bgc9, bgc10, bgs0, bgs1, bgs2, bgs3, bgs4 } from '../res/imgBundle';

const AnimeBackground = () => ( // props
    <section className="bg-container">
      <div className="animeBg-narrow">
        <img src={bgs1} alt="background column 1" id="flyinleft" />
        <img src={bgs2} alt="background column 2" id="flyinleft" />
         <img className="space-hodler" src={bgs0} alt="background column 2" />
        <img src={bgs3} alt="background column 3" id="flyinright" />
        <img src={bgs4} alt="background column 4" id="flyinright" />
      </div>
      <div className="animeBg">
        <img src={bgc1} alt="background column 1" id="flyup" />
        <img src={bgc2} alt="background column 2" id="flydown"/>
        <img src={bgc3} alt="background column 3" id="flyup" />
        <img src={bgc4} alt="background column 4" id="flydown"/>
        <img src={bgc5} alt="background column 5" id="flyup"/>
        <img src={bgc6} alt="background column 6" id="flydown"/>
        <img src={bgc7} alt="background column 7" id="flyup"/>
        <img src={bgc8} alt="background column 8" id="flydown"/>
        <img src={bgc9} alt="background column 9" id="flyup"/>
        <img src={bgc10} alt="background column 10" id="flydown"/>
      </div>
    </section>
);

export default AnimeBackground;

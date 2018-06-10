import React from 'react';
import jaden from '../img/jaden-cutout.png';
import PropTypes from 'prop-types';

const Jaden = ({ text, warning }) => {
  const warningStyle = {
    color: 'red',
    fontWeight: 'bold',
    display:'block'
  }
  return (
    <div className="jaden">
      <p className="text-center">
        <img src={jaden} alt="jaden smith" className="img-fluid img-thumbnail clearbg" />
      </p>
      <p id="output" className="box1 sb6">
        {text}
        <span style={warningStyle}>{warning}</span>
      </p>
    </div>
  )
}

Jaden.propTypes = {
  text: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired
};

export default Jaden;

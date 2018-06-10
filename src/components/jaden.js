import React from 'react';
import jaden from '../img/jaden-cutout.png';

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



export default Jaden;

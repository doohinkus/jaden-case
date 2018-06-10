import React from 'react';

const Button = ({ text, action }) => {
  return (<button className="btn btn-primary btn-block" target="_blank"  onClick={action}>{text}</button>)
}

export default Button;

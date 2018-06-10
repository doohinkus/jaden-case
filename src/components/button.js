import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, action }) => {
  return (<button className="btn btn-primary btn-block" target="_blank"  onClick={action}>{text}</button>)
}
Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
export default Button;

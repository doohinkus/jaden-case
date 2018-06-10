import React from 'react';
import PropTypes from 'prop-types';

const Header = ( { text } ) => {
  return (
    <header>
      <h1 className="text-center">{text}</h1>
    </header>
  )
}
Header.propTypes = {
  textt: PropTypes.string.isRequired
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Displayer = (props) => {
  const {
    data: { joke },
  } = props;

  return <div className="displayer">{joke}</div>;
};

Displayer.propTypes = {
  data: PropTypes.shape({
    joke: PropTypes.string,
  }).isRequired,
};

export default Displayer;

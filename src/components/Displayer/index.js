import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Displayer = ({ data }) => <div>{data}</div>;

Displayer.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Displayer;

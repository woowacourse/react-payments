import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './index.styled';

const Label = ({ id, description }) => {
  return <styled.Container htmlFor={id}>{description}</styled.Container>;
};

Label.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
};

export default Label;

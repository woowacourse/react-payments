import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './index.styled';

const Button = ({ children, ...rest }) => {
  return <styled.Container {...rest}>{children}</styled.Container>;
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const Button = (props) => {
  const { text, onClickButton } = props;

  return <Style.Root onClick={onClickButton}>{text}</Style.Root>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickButton: PropTypes.func,
};

export default Button;

import React from 'react';
import * as Style from './style';

const Button = (props) => {
  const { onClickButton } = props;

  return <Style.Root onClick={onClickButton}>{props.text}</Style.Root>;
};

export default Button;

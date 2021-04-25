import React from 'react';
import * as Style from './style';

const Button = (props) => {
  return <Style.Root>{props.text}</Style.Root>;
};

export default Button;

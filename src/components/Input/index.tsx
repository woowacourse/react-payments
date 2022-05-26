import React from 'react';
import * as Styled from './index.styled';

interface Props {
  scale: 'large' | 'medium' | 'small';
}

const Input = ({ scale, ...rest }: Props) => {
  return <Styled.Container scale={scale} {...rest} />;
};

export default Input;

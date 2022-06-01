import React, { memo } from 'react';
import * as Styled from './index.styled';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  description: string;
}

const Label = ({ id, description }: Props) => {
  return <Styled.Container htmlFor={id}>{description}</Styled.Container>;
};

export default memo(Label);

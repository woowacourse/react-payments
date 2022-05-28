import React from 'react';
import { TColor } from '../../../types';
import * as Styled from './index.styled';

interface Props {
  color: TColor;
  name: string;
  onClick: () => void;
}

const ColorPicker = ({ color, name, onClick }: Props) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.OptionContainer color={color} />
      <Styled.DescriptionContainer>{name}</Styled.DescriptionContainer>
    </Styled.Container>
  );
};

export default ColorPicker;

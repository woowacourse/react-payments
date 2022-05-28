import React from 'react';
import * as Styled from './index.styled';

interface Props {
  color: string;
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

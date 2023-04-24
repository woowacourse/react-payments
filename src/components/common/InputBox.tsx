import React from 'react';
import styled from 'styled-components';

type Align = 'left' | 'center';

interface Props {
  children: React.ReactNode;
  separator?: string;
  isFullWidth?: boolean;
  align?: Align;
}

const InputBox = ({ children, separator, isFullWidth, align }: Props) => {
  return (
    <InputsBoxWrapper isFullWidth={isFullWidth} align={align}>
      {React.Children.toArray(children).map((input, index) => (
        <>
          {index > 0 && <Separator>{separator}</Separator>}
          {input}
        </>
      ))}
    </InputsBoxWrapper>
  );
};

export default InputBox;

const InputsBoxWrapper = styled.div<{ isFullWidth?: boolean; align?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
  align-items: center;
  box-sizing: border-box;

  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'min-content')};
  height: 48.75px;
  border: none;
  border-radius: 7px;
  padding: 0 14px;
  background: #ecebf1;

  color: #000000;
  font-size: 20px;
`;

const Separator = styled.span`
  text-align: center;

  font-size: 16px;
`;

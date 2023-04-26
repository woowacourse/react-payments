import React from 'react';
import styled from 'styled-components';
import { TAB_INDEX_INFO } from '../../constant';

interface InformationButtonProps {
  onClick: () => void;
  text?: string;
  tabIndex?: number;
}

export default function InformationButton({
  onClick,
  text = '?',
  tabIndex = TAB_INDEX_INFO.dismiss,
}: InformationButtonProps) {
  return (
    <Wrapper type="button" onClick={onClick} tabIndex={tabIndex}>
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bababa;
  border-radius: 50%;
  color: #969696;
  background-color: transparent;
  width: 27px;
  height: 27px;
  font-size: 20px;
  font-weight: 500;
`;

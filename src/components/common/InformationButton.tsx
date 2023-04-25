import React from 'react';
import styled from 'styled-components';
import { DISMISS_TAB_INDEX } from '../../constant';

interface InformationButtonProps {
  onClick: () => void;
  text?: string;
  tabIndex?: number;
}

export default function InformationButton({
  onClick,
  text = '?',
  tabIndex = DISMISS_TAB_INDEX,
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

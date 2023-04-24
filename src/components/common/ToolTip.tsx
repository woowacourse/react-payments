import React from 'react';
import styled from 'styled-components';
import { DISMISS_TAB_INDEX } from '../../constant';

interface ToolTipProps {
  text: string;
  onClick: () => void;
  tabIndex?: number;
}

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #525252;
  padding: 10px 20px;
  border-radius: 7px;
  width: 200px;
  position: absolute;
  bottom: 35px;
`;

export default function ToolTip({
  text,
  onClick,
  tabIndex = DISMISS_TAB_INDEX,
}: ToolTipProps) {
  return (
    <Wrapper onClick={onClick} tabIndex={tabIndex}>
      {text}
    </Wrapper>
  );
}

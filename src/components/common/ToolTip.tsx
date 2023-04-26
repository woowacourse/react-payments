import React from 'react';
import styled from 'styled-components';
import { TAB_INDEX_INFO } from '../../constant';

interface ToolTipProps {
  text: string;
  onClick: () => void;
  tabIndex?: number;
}

export default function ToolTip({
  text,
  onClick,
  tabIndex = TAB_INDEX_INFO.dismiss,
}: ToolTipProps) {
  return (
    <Wrapper onClick={onClick} tabIndex={tabIndex}>
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #525252;
  padding: 10px 20px;
  border-radius: 7px;
  width: 200px;
  position: relative;
`;

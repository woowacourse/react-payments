import React from 'react';
import styled from 'styled-components';
import { TAB_INDEX_INFO } from '../../../constants/constant';

interface ToolTipProps {
  text: string;
  onClick: () => void;
  tabIndex?: number;
}

export default function ToolTip({
  text,
  onClick,
  tabIndex = TAB_INDEX_INFO.DISMISS,
}: ToolTipProps) {
  return (
    <Wrapper onClick={onClick} tabIndex={tabIndex}>
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.secondText};
  padding: 10px 20px;
  border-radius: 7px;
  width: 200px;
  position: relative;
`;

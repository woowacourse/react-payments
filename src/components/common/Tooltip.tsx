import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TooltipProps = {
  text: string;
};

const Tooltip = ({ text, children }: PropsWithChildren<TooltipProps>) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.div`
  position: relative;
  width: 100%;
  &:hover > div {
    opacity: 1;
  }
`;

const TooltipText = styled.div`
  opacity: 0;
  top: 14px;
  left: 40px;
  width: 100%;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  font-size: 14px;
  transition: opacity 0.8s;
  position: absolute;
`;

export default Tooltip;

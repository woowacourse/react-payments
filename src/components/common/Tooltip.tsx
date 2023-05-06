import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TooltipProps = {
  text: string;
};

const Tooltip = ({ text, children }: PropsWithChildren<TooltipProps>) => {
  return (
    <TooltipWrapper>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipText>{text}</TooltipText>
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.div`
  display: flex;
  margin-left: 10px;
`;

const TooltipTrigger = styled.div`
  margin-right: 12px;
`;

const TooltipText = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 12px;
  transition: opacity 0.8s;

  ${TooltipTrigger}:hover + & {
    opacity: 1;
  }
`;

export default Tooltip;

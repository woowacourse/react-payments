import React from 'react';
import styled from 'styled-components';

interface ToolTipProps {
  children: React.ReactNode;
  tip: string;
}
const StyledToolTip = styled.div`
  position: relative;

  &:hover > .tooltip {
    display: block;
  }

  .icon {
    border: 1px solid #bababa;
    border-radius: 50%;
    color: #969696;
    width: 27px;
    height: 27px;

    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    cursor: pointer;
  }

  .tooltip {
    display: none;
    position: absolute;
    width: 300px;
    top: 50%;
    left: 50%;
    left: 32px;
    background-color: ${(props) => props.theme.WHITE};
    border-radius: 4px;
    box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.028),
      0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 80px rgba(0, 0, 0, 0.07);
    padding: 4px;
  }
`;

const ToolTip = ({ children, tip }: ToolTipProps) => {
  return (
    <StyledToolTip>
      <div className="icon" data-testid="icon">
        {children}
      </div>
      <p className="tooltip">{tip}</p>
    </StyledToolTip>
  );
};

export default ToolTip;

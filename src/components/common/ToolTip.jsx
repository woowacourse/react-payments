import React from 'react';
import styled from 'styled-components';

const StyledToolTip = styled.div`
  position: relative;
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

  .tip {
    visibility: hidden;
    position: absolute;
    width: 300px;
    top: 50%;
    left: 50%;
    left: 32px;

    text-align: justify;
    font-size: 14px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.028),
      0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 80px rgba(0, 0, 0, 0.07);
    padding: 4px;
    z-index: 1;
  }

  &:hover > .tip {
    visibility: visible;
  }
`;

const ToolTip = ({ children, tip }) => {
  return (
    <StyledToolTip>
      {children}
      <p className="tip">{tip}</p>
    </StyledToolTip>
  );
};

export default ToolTip;

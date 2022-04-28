import React, { useState } from 'react';
import styled from 'styled-components';

const StyledToolTip = styled.div`
  position: relative;

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

  .tip {
    position: absolute;
    width: 300px;
    top: 50%;
    left: 50%;
    left: 32px;

    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.028),
      0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 80px rgba(0, 0, 0, 0.07);
    padding: 4px;
  }
`;

const ToolTip = ({ children, tip }) => {
  const [show, setShow] = useState(false);
  return (
    <StyledToolTip>
      <div
        className="icon"
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        {children}
      </div>
      {show && <p className="tip">{tip}</p>}
    </StyledToolTip>
  );
};

export default ToolTip;

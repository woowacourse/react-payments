/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
// import styled from 'styled-components';

// const ToolTipStyle

const ToolTip = ({ children, type, tip }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="tooltip"
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        {children}
      </div>
      {show && <p>{tip}</p>}
    </>
  );
};

export default ToolTip;

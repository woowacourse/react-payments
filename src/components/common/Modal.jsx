import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  justify-content: center;
`;

const ModalOverlay = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  background-color: #00000080;
  z-index: 999;
`;

const ModalInner = styled.div`
  display: flex;
  justify-content: center;

  box-sizing: border-box;
  position: absolute;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  width: ${props => props.width}px;
  height: 200px;
  top: calc(${props => `${props.height - 200}px`});
  margin: 0 auto;
  padding: 16px;
  z-index: 1000;
  overflow-y: auto;
`;

function Modal({ isOpen, setIsOpen, dimensions: { width, height }, children }) {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay
        onClick={e => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
        isOpen={isOpen}
        width={width}
        height={height}>
        <ModalInner width={width} height={height}>
          {children}
        </ModalInner>
      </ModalOverlay>
    </ModalContainer>
  );
}

export default Modal;

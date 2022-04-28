import React from 'react';
import styled from 'styled-components';

const ToastModalStyled = styled.div`
  position: fixed;
  left: 0;
  bottom: ${({ show }) => (show ? 0 : -100)}%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 220px;
  border-radius: 5px 5px 0 0;
  background: #fff;
  z-index: 10;
  transition: bottom 0.4s linear;
`;

export default function ToastModal({ show }) {
  return <ToastModalStyled show={show}></ToastModalStyled>;
}

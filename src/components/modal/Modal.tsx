import React from 'react';
import styled from '@emotion/styled';

const ModalStyled = styled.div({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0px',
  left: '0px',
  backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
});

function Modal({ children, typeButtonClick }: { children: React.ReactNode; typeButtonClick: any }) {
  return <ModalStyled onClick={typeButtonClick}>{children}</ModalStyled>;
}

export default Modal;

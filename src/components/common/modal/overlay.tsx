import React from 'react';
import styled from 'styled-components';
import { useModalContext } from '.';

const Overlay: React.FC = () => {
  const { isModal, closeModal } = useModalContext();

  window.addEventListener('keyup', () => {
    closeModal();
  });

  return isModal ? <StyledBackDrop onClick={closeModal} /> : <></>;
};

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  background-color: rgb(0, 0, 0, 0.5);
`;

export default Overlay;

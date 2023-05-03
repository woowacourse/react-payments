import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-end;

  width: 100vw;
  height: 100vh;
`;

export const ModalBackground = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: rgba(1, 1, 1, 0.5);
`;

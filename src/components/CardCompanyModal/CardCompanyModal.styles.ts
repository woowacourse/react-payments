import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 220px;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(4, 66px);
  gap: 24px;
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 220px;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: grid;
  grid-template-columns: repeat(4, 60px);
  gap: 24px;
  padding: 32px 32px;
`;

export const ModalBackdrop = styled.div`
  width: 375px;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

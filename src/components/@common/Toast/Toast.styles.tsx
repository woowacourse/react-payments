import styled from 'styled-components';

export const Toast = styled.div<{ isToastOpened: boolean }>`
  width: 50%;
  position: fixed;
  bottom: ${({ isToastOpened }) => (isToastOpened ? '0px' : '-100px')};
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
  font-size: 18px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: bottom 0.2s ease-in-out;
`;

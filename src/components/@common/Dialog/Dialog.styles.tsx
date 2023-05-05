import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 0%, 0.439);
  z-index: 999;
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  min-height: 1vh;
  max-width: 450px;
  max-height: 85vh;

  padding: 25px;

  z-index: 9999;

  @keyframes openContent {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  animation: openContent 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Close = styled.button`
  position: absolute;
  background-color: transparent;
  top: 15px;
  right: 20px;

  border: none;
  outline: none;

  cursor: pointer;
`;

export const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  background-color: white;
  box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.141);
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: hsl(294, 5.5%, 95.3%);
  }
`;

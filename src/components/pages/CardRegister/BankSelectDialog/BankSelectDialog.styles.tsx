import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;

  padding: 40px 50px;

  z-index: 9999;

  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  @keyframes openContent {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: openContent 1050ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Bank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

export const BankLabel = styled.label`
  margin-top: 10px;

  font-size: 12px;
`;

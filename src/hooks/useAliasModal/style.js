import styled, { keyframes, css } from 'styled-components';

const slideUp = keyframes`
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const WrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  padding: 70px 20px 16px;
  background-color: var(--toast-background-color);

  animation-duration: 0.4s;
  animation-timing-function: linear;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${({ disappear }) => disappear && css`
    animation-name: ${slideDown};
  `}
`;

export const TitleStyled = styled.h1`
  margin: 0 0 50px;
  text-align: center;
  font-size: 24px;
  color: var(--card-alias-color);
`;

export const InputStyled = styled.input`
  padding: 6px;
  text-align: center;
  font-size: 18px;
  outline: none;
  color: var(--card-alias-color);
  border: none;
  border-bottom: 1px solid var(--unselected-company);
`;

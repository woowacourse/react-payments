import styled from '@emotion/styled';

interface ButtonProps {
  isFixed?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 480px;
  height: 48px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  ${({ isFixed }) =>
    isFixed &&
    `
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0;
    max-width: 480px;
  `}

  &:hover {
    background-color: #333333;
  }

  &:active {
    background-color: #666666;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

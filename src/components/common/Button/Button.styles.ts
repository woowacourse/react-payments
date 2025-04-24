import styled from '@emotion/styled';

interface ButtonProps {
  isFixed?: boolean;
  variant?: 'primary' | 'black';
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 480px;
  height: 48px;
  background-color: ${({ variant }) => (variant === 'black' ? '#000000' : '#2ac1bc')};
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
    background-color: ${({ variant }) => (variant === 'black' ? '#333333' : '#219a95')};
  }

  &:active {
    background-color: ${({ variant }) => (variant === 'black' ? '#666666' : '#1b7b77')};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

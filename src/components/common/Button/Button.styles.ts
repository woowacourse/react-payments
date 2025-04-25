import styled from '@emotion/styled';

interface ButtonProps {
  isFixed?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 480px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
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
    z-index: 1;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

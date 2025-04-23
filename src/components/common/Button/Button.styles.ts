import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: #2ac1bc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #219a95;
  }

  &:active {
    background-color: #1b7b77;
  }
`;

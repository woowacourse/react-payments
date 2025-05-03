import styled from '@emotion/styled';
import { ButtonProps } from './Button';

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${({ height }) => height};

  background-color: #333333;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #222222;
  }
`;

export { StyledButton };

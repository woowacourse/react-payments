import { ComponentProps } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ComponentProps<'button'> {
  buttonText: string;
  buttonType: 'default';
}

function Button({ buttonText, buttonType, onClick }: ButtonProps) {
  let color = '';
  let background = '';

  if (buttonType === 'default') {
    color = '#fff';
    background = '#333333';
  }
  return (
    <StyledButton $color={color} $background={background} onClick={onClick}>
      {buttonText}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $color: string; $background: string }>`
  width: 100%;
  padding: 10px;

  color: ${(props) => props.$color};
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  background-color: ${(props) => props.$background};
  cursor: pointer;
`;

export default Button;

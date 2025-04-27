import React, { ComponentProps, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ComponentProps<'button'> {
  isFocused?: boolean;
  buttonText: string;
  buttonType: 'default';
}

function Button({ isFocused, buttonText, buttonType, onClick }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  let color = '';
  let background = '';
  let check = '';

  if (buttonType === 'default') {
    color = '#fff';
    background = '#333333';
  }

  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isFocused) buttonRef.current?.click();
  };

  useEffect(() => {
    buttonRef.current?.focus();
  }, [check]);

  return (
    <StyledButton
      ref={buttonRef}
      onKeyDown={keyDownHandler}
      $color={color}
      $background={background}
      onClick={onClick}
    >
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

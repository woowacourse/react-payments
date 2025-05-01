import type { ComponentProps } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ComponentProps<'button'> {
  text: string;
  handleClick?: () => void;
}

const Button = ({ text, handleClick, ...restProps }: ButtonProps) => {
  return (
    <ButtonContainer type={restProps.type} onClick={handleClick} {...restProps}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;
  border: none;
`;

export default Button;

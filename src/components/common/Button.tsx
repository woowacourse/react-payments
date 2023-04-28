import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  disabled?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px;

  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { disabled, children, ...buttonProps } = props;

  return (
    <StyledButton {...buttonProps} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

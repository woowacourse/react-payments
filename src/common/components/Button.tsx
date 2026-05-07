import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

type ButtonPropsType = ComponentPropsWithoutRef<'button'> & {
  value?: string;
};

const StyledButton = styled.button`
  font-size: 12px;
  font-weight: 500;
  color: #0a0d13;
`;

const Button = ({
  value,
  children,
  type = 'button',
  ...rest
}: ButtonPropsType) => {
  return (
    <StyledButton type={type} {...rest}>
      {children ?? value}
    </StyledButton>
  );
};

export default Button;

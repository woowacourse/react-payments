import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

type ButtonPropsType = ComponentPropsWithoutRef<'button'> & {
  value?: string;
};

const StyledButton = styled.button`
  width: 100%;
  min-height: 46px;
  flex-shrink: 0;

  background-color: #333333;

  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
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

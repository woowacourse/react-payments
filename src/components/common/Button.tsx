import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;

  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = (props: ButtonProps) => {
  const { children, ...buttonProps } = props;

  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

import { ComponentProps, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props extends Omit<ComponentProps<'button'>, 'children' | 'disabeld'> {
  children: ReactNode;
}

export default function Button({ children, ...props }: Props) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  color: #fff;
  background-color: #333;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

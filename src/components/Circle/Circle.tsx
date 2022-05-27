import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { CardColor } from 'types/cardInfo';

interface Props {
  size: string;
  color: CardColor;
}

export default function Circle({ children, size, color }: PropsWithChildren<Props>) {
  return (
    <Styled.Circle size={size} color={color}>
      {children}
    </Styled.Circle>
  );
}

const Styled = {
  Circle: styled.div<{ size: string }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 100%;
    background-color: ${({ color }) => color};
  `,
};

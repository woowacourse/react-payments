import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  onClick(): void;
  colorType: string;
}

export default function RectangleButton({
  children,
  onClick,
  colorType,
}: PropsWithChildren<Props>) {
  return (
    <Styled.Box onClick={onClick}>
      <Styled.Span colorType={colorType}>{children}</Styled.Span>
    </Styled.Box>
  );
}

const Styled = {
  Box: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 170px;
    height: 50px;
    border: 1px solid #d3d3d3;
    margin: 10px;
    border-radius: 5px;
    &:hover {
      background-color: #ecebf1;
    }
  `,

  Span: styled.span<{ colorType: string }>`
    font-size: 18px;
    color: ${({ colorType }) => colorType === 'delete' && 'red'};
  `,
};

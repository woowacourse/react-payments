import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
}

export default function InputContainer({ children, width }: PropsWithChildren<Props>) {
  return <Styled.InputContainer width={width}>{children}</Styled.InputContainer>;
}

const Styled = {
  InputContainer: styled.div<{ width: string }>`
    display: flex;
    width: ${({ width }) => width || '100%'};
    background-color: #ecebf1;
    border-radius: 0.25rem;
  `,
};

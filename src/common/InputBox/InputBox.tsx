import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export default function InputBox({ children }: Props) {
  return <Styled.InputBox>{children}</Styled.InputBox>;
}

const Styled = {
  InputBox: styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.375rem;
    color: #d3d3d3;
  `,
};

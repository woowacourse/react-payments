import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const Styled = {
  Container: styled.div`
    height: 100%;
    width: 400px;
    padding: 16px 24px;
    margin: 30px 0;
    background-color: #fff;
    border-radius: 5px;
  `,
};

import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export default function FlexColumnBox({ children }: Props) {
  return <Styled.FlexColumnBox>{children}</Styled.FlexColumnBox>;
}

const Styled = {
  FlexColumnBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

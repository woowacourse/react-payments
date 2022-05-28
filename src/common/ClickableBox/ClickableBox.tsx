import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

export default function ClickableBox({ children, onClick }: PropsWithChildren<Props>) {
  return <Styled.PointerBox onClick={onClick}>{children}</Styled.PointerBox>;
}

const Styled = {
  PointerBox: styled.div`
    cursor: pointer;
    text-align: center;
    margin: 10px 0;
  `,
};

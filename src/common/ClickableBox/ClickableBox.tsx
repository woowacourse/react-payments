import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => null;
}

export default function ClickableBox({ children, onClick }: PropsWithChildren<Props>) {
  return <Styled.PointerBox onClick={onClick}>{children}</Styled.PointerBox>;
}

const Styled = {
  PointerBox: styled.span`
    cursor: pointer;
    max-width: 208px;
  `,
};

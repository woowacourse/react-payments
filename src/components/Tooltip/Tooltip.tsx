import styled from 'styled-components';
import { PropsWithChildren } from 'react';

interface Props {
  onClick(): void;
}
export default function Tooltip({ onClick, children }: PropsWithChildren<Props>) {
  return <Styled.Tooltip onClick={onClick}>{children}</Styled.Tooltip>;
}

const Styled = {
  Tooltip: styled.div`
    width: 27px;
    height: 27px;
    margin-left: 15px;
    background: #ffffff;
    border: 1px solid #bababa;
    border-radius: 100%;
    box-sizing: border-box;
    text-align: center;
    line-height: 27px;
    color: #969696;
    font-size: 20px;
    cursor: pointer;
  `,
};

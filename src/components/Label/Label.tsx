import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  htmlFor: string;
  marginBottom: string;
}

export default function Label({ children, htmlFor, marginBottom }: PropsWithChildren<Props>) {
  return (
    <Styled.Label htmlFor={htmlFor} marginBottom={marginBottom}>
      {children}
    </Styled.Label>
  );
}

const Styled = {
  Label: styled.label<{ marginBottom: string }>`
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.085em;
    margin-bottom: ${({ marginBottom }) => marginBottom || '4px'};
    color: #525252;
  `,
};

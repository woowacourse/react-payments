import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const FieldBodyStyled = styled.div(css`
  display: flex;
`);

const FieldHeadStyled = styled.div(css`
  display: flex;
`);

const FieldSetStyled = styled.div(css`
  display: flex;
  flex-direction: column;
`);

export function FieldSet({
  children,
  isLast,
}: {
  children: Array<React.ReactNode>;
  isLast?: string;
}) {
  return (
    <FieldSetStyled
      css={css`
        margin-bottom: ${isLast ? '0px' : '19px'};
      `}
    >
      {children}
    </FieldSetStyled>
  );
}

export function FieldHead({ children, style }: { children: React.ReactNode; style?: any }) {
  return <FieldHeadStyled style={style}>{children}</FieldHeadStyled>;
}

export function FieldBody({ children, style }: { children: React.ReactNode; style?: any }) {
  return <FieldBodyStyled style={style}>{children}</FieldBodyStyled>;
}

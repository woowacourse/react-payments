import React from 'react';
import { css } from '@emotion/react';

export function FieldSet({
  children,
  isLast,
}: {
  children: Array<React.ReactNode>;
  isLast?: string;
}) {
  return (
    <div
      css={css`
        margin-bottom: ${isLast ? '0px' : '19px'};
      `}
    >
      {children}
    </div>
  );
}

export function FieldHead({ children, style }: { children: React.ReactNode; style?: any }) {
  return <div css={style}>{children}</div>;
}

export function FieldBody({ children, stlye }: { children: React.ReactNode; stlye?: any }) {
  return <div css={stlye}>{children}</div>;
}

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

export function FieldHead({
  children,
  marginBottom,
}: {
  children: React.ReactNode;
  marginBottom?: string;
}) {
  return (
    <div
      css={css`
        margin-bottom: ${marginBottom ? marginBottom : '3px'};
      `}
    >
      {children}
    </div>
  );
}

export function FieldBody({ children }: { children: React.ReactNode }) {
  return <div className="content">{children}</div>;
}

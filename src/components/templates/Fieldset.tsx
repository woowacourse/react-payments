import React from 'react';
import { css } from '@emotion/react';

export function Fieldset({
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

export function Head({
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

export function Body({ children }: { children: React.ReactNode }) {
  return <div className="content">{children}</div>;
}

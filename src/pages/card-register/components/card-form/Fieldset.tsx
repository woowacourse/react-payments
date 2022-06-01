import React from 'react';
import { css } from '@emotion/react';

function FieldsetHead({ children, marginBottom }: { children: React.ReactNode; marginBottom?: string }) {
  return (
    <div
      css={css`
        margin-bottom: ${marginBottom || '3px'};
      `}
    >
      {children}
    </div>
  );
}

function FieldsetContent({ children }: { children: React.ReactNode }) {
  return <div className="content">{children}</div>;
}

function Fieldset({ children, isLast }: { children: Array<React.ReactNode>; isLast?: string }) {
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

export default Object.assign(Fieldset, {
  Head: FieldsetHead,
  Content: FieldsetContent,
});

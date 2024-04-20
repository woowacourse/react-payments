/** @jsxImportSource @emotion/react */

import { ReactNode } from 'react';
import { css } from '@emotion/react';

const errorColor = '#ff3d3d';

const styledTextError = {
  color: errorColor,
  fontSize: '9.5px',
  lineHeight: '13.76px',
  fontWeight: 400,
  marginTop: '5px',
  height: '10px',
};

const wrappedStyledLabel = css({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '12px',
  fontWeight: 500,
  marginTop: '10px',
  gap: '5px',
});

interface FormItemProps {
  labelText: string;
  errorMessage?: string;
  children: ReactNode;
}

export default function FormItem({
  labelText,
  errorMessage = '',
  children,
}: FormItemProps) {
  return (
    <div>
      <label css={wrappedStyledLabel}>
        {labelText}
        <div> {children}</div>
      </label>
      <p css={css(styledTextError)}>{errorMessage}</p>
    </div>
  );
}

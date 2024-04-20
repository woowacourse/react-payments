/** @jsxImportSource @emotion/react */

import { COLOR } from '../styles/color';
import { css } from '@emotion/react';

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  'border-color'?: 'normal' | 'error';
}

const styleA = {
  width: '40px',
  border: '1px solid',
  borderRadius: '2px',
  padding: '8px',
  outline: 'none',

  '&::placeholder': {
    color: COLOR.gray1,
  },
  '&:focus': {
    border: `1px solid ${COLOR.black}`,
  },
};

const borderColors = { normal: COLOR.gray1, error: COLOR.error };

export default function TextInput(inputProps: TextInputProps) {
  const borderColor = inputProps['border-color'] ?? 'normal';

  const borderStyle = {
    borderColor: borderColors[borderColor] + ' !important',
  };

  return (
    <input
      {...inputProps}
      css={css(styleA, inputProps['border-color'] ? borderStyle : undefined)}
    />
  );
}

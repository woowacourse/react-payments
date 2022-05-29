import { css } from '@emotion/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

function ConfirmButton({ children, disabled }: Props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="submit" css={style} disabled={!!disabled}>
      {children}
    </button>
  );
}

const style = css({
  position: 'absolute',
  right: '25px',
  bottom: '16px',
  backgroundColor: 'inherit',
  border: 'none',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
});

export default ConfirmButton;

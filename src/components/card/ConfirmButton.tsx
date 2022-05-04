import React from 'react';
import { css } from '@emotion/react';

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

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  children: React.ReactNode;
};

function ConfirmButton({ type, onClick, disabled, children }: Props) {
  return (
    <button type={type} css={style} onClick={onClick} {...(disabled ? { disabled: true } : '')}>
      {children}
    </button>
  );
}

export default ConfirmButton;

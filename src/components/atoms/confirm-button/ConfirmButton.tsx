import { css } from '@emotion/react';
import React from 'react';

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
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

function ConfirmButton({ children, onClick, disabled }: Props) {
  return (
    <button css={style} onClick={onClick} {...(disabled ? { disabled: true } : {})}>
      {children}
    </button>
  );
}

export default ConfirmButton;

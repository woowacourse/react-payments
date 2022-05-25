import React from 'react';
import { css } from '@emotion/react';

const style = css({
  marginLeft: '300px',
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

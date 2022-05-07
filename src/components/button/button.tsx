import React from 'react';
import { css } from '@emotion/react';

const style = css({
  width: '20px',
  height: '20px',
  cursor: 'pointer',
});

type Props = {
  id: string;
  onClick: any;
  buttonType: string;
};

function Button({ id, onClick, buttonType }: Props) {
  return (
    <img
      id={id}
      onClick={onClick}
      src={`/img/${buttonType}-icon.png`}
      css={style}
      alt={`${buttonType}-icon`}
    />
  );
}

export default Button;

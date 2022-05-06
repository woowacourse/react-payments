import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const style = css({
  width: '16px',
  height: '16px',
  marginRight: '18px',
});

function BackButton() {
  return (
    <Link to="/">
      <img css={style} src={'/img/left-icon.png'} alt="left-icon" />
    </Link>
  );
}

export default BackButton;

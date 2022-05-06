import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const style = css({
  width: '208px',
  height: '122px',
  backgroundColor: '#E5E5E5',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const plusIconstyle = css({
  width: '28px',
  height: '28px',
});

function AddCard() {
  return (
    <Link to="/card/add">
      <div css={style}>
        <img src={'/img/plus-icon.png'} css={plusIconstyle} alt="plus-icon" />
      </div>
    </Link>
  );
}

export default AddCard;

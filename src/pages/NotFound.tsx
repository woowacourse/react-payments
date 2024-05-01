import { css } from '@emotion/react';
import { NOT_FOUND } from '../assets';

const notFoundContainerStyle = css({
  padding: '10%',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const notFoundTextStyle = css({
  fontSize: '40px',
  fontWeight: 'bold',
  margin: '10%',
});

function NotFound() {
  return (
    <div css={notFoundContainerStyle}>
      <h1 css={notFoundTextStyle}>Not Found 404</h1>
      <img src={NOT_FOUND} />
    </div>
  );
}

export default NotFound;

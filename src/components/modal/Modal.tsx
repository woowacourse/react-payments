import React from 'react';
import { css } from '@emotion/react';

const style = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0px',
  left: '0px',
  backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
});

function Modal({ children, typeButtonClick }: { children: React.ReactNode; typeButtonClick: any }) {
  return (
    <>
      <div onClick={typeButtonClick} css={style}>
        {children}
      </div>
    </>
  );
}

export default Modal;

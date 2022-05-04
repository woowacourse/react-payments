import React from 'react';
import { css } from '@emotion/react';
import { useAppState } from 'hooks/hooks';
import TypeButtonModal from 'containers/modal/TypeButtonModalContainer';

const style = css({
  width: '375px',
  margin: '0 auto',
  padding: '22px 28px 16px 28px',
  position: 'relative',
  backgroundColor: '#ffffff',
});

function AddCardPage({ children }: { children: React.ReactNode }) {
  const { chageCardType } = useAppState();

  return (
    <div css={style}>
      {chageCardType ? <TypeButtonModal /> : <></>} {children}
    </div>
  );
}

export default AddCardPage;

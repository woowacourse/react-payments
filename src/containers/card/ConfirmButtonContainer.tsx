import ConfirmButton from 'components/card/ConfirmButton';
import { useAppState } from 'hooks/hooks';
import React from 'react';

function ConfirmButtonContainer() {
  const { cardAlias } = useAppState();
  const handleConfirmCard = () => {
    window.location.pathname = '/';
  };

  let _disabled = true;
  if (cardAlias !== '') {
    _disabled = false;
  }

  return (
    <ConfirmButton type="button" onClick={handleConfirmCard} disabled={_disabled}>
      확인
    </ConfirmButton>
  );
}

export default ConfirmButtonContainer;

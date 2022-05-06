import React, { useContext } from 'react';
import ToastModal from 'components/ToastModal';
import cvcImage from 'assets/jpg/cvc.jpg';
import { CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';

export default function TipModal() {
  const { tipModalFlag } = useContext(CardStateContext);

  return (
    <ToastModal type={TYPES.SET_TIP_MODAL_FLAG} show={tipModalFlag}>
      <img alt="cvc 설명 이미지" src={cvcImage} />
    </ToastModal>
  );
}

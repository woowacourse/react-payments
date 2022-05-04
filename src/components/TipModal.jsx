import React, { useContext } from 'react';
import ToastModal from './ToastModal';
import cvcImage from '../img/cvc.jpg';
import { TYPES, CardStateContext } from '../context/CardContext';

export default function TipModal() {
  const { tipModalFlag } = useContext(CardStateContext);

  return (
    <ToastModal type={TYPES.SET_TIP_MODAL_FLAG} show={tipModalFlag}>
      <img alt="cvc 설명 이미지" src={cvcImage} />
    </ToastModal>
  );
}

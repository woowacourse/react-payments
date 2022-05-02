import React, { useContext } from 'react';
import ToastModal from './ToastModal';
import CardContext from '../CardContext';
import TYPES from '../reducers/card.actions';
import cvcImage from '../img/cvc.jpg';

export default function TipModal() {
  const { tipModalFlag } = useContext(CardContext);

  return (
    <ToastModal type={TYPES.SET_TIP_MODAL_FLAG} show={tipModalFlag}>
      <img alt="cvc 설명 이미지" src={cvcImage} />
    </ToastModal>
  );
}

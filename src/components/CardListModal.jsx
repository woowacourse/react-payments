import React, { useCallback, useContext } from 'react';
import CardCompany from './CardCompany';
import Dimmer from './Dimmer';
import ToastModal from './ToastModal';
import CARD_COMPANIES from '../constants/index';
import CardContext from '../CardContext';

export default function CardListModal() {
  const { modalFlag, dispatch } = useContext(CardContext);

  const onClickDimmer = useCallback(() => {
    dispatch({ type: 'SET_MODAL_FLAG', flag: false });
  }, []);

  return (
    <>
      <Dimmer show={modalFlag} />
      <ToastModal onClick={onClickDimmer} show={modalFlag}>
        {CARD_COMPANIES.map(({ COLOR, NAME }) => (
          <CardCompany key={NAME} color={COLOR}>
            {NAME}
          </CardCompany>
        ))}
      </ToastModal>
    </>
  );
}

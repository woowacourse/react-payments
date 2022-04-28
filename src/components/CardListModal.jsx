import React, { useCallback, useContext } from 'react';
import CardCompany from './CardCompany';
import Dimmer from './Dimmer';
import ToastModal from './ToastModal';
import CARD_COMPANIES from '../constants/index';
import CardContext from '../CardContext';

export default function CardListModal() {
  const { cardCompanyIndex, modalFlag, dispatch } = useContext(CardContext);

  const onClickDimmer = useCallback(() => {
    dispatch({ type: 'SET_MODAL_FLAG', flag: false });
  }, []);

  const onClickCardCompany = (index) =>
    useCallback(() => {
      dispatch({ type: 'SET_COMPANY_INDEX', index });
      dispatch({ type: 'SET_MODAL_FLAG', flag: false });
    }, []);

  return (
    <>
      <Dimmer show={modalFlag} onClick={onClickDimmer} />
      <ToastModal show={modalFlag}>
        {CARD_COMPANIES.map(({ COLOR, NAME }, index) => (
          <CardCompany
            key={NAME}
            color={COLOR}
            onClick={onClickCardCompany(index)}
            selected={cardCompanyIndex === index}
          >
            {NAME}
          </CardCompany>
        ))}
      </ToastModal>
    </>
  );
}

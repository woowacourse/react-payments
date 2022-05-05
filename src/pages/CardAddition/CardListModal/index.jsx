import React, { useCallback } from 'react';

import useCardState from '../../../hooks/useCardState';
import useCardDispatch from '../../../hooks/useCardDispatch';

import CardCompany from '../../../system/CardCompany';
import Dimmer from '../../../components/Dimmer';
import ToastModal from '../../../components/ToastModal';

import { CARD_COMPANIES } from '../../../constants';

import { HIDE_MODAL, SELECT_CARD_COMPANY } from './action';

const CardListModal = () => {
  const cardCompanyName = useCardState((state) => state.cardCompanyName);
  const modalVisible = useCardState((state) => state.modalVisible);
  const dispatch = useCardDispatch();

  const onClickDimmer = useCallback(() => {
    dispatch({ type: HIDE_MODAL });
  }, []);

  const onClickCardCompany = (name, color) =>
    useCallback(() => {
      dispatch({ type: SELECT_CARD_COMPANY, name, color });
      dispatch({ type: HIDE_MODAL });
    }, []);

  return (
    <>
      <Dimmer show={modalVisible} onClick={onClickDimmer} />
      <ToastModal show={modalVisible}>
        {CARD_COMPANIES.map(({ COLOR, NAME }) => (
          <CardCompany
            key={NAME}
            color={COLOR}
            onClick={onClickCardCompany(NAME, COLOR)}
            selected={cardCompanyName === NAME}
          >
            {NAME}
          </CardCompany>
        ))}
      </ToastModal>
    </>
  );
}

export default CardListModal;

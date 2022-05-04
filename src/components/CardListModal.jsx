import React, { useCallback, useContext } from 'react';
import CardCompany from 'components/CardCompany';
import ToastModal from 'components/ToastModal';
import { CARD_COMPANIES } from 'constants/index';
import { TYPES, CardStateContext, CardDispatchContext } from 'context/CardContext';

export default function CardListModal() {
  const { cardCompanyIndex, listModalFlag } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onClick = (index) =>
    useCallback(() => {
      dispatch({ type: TYPES.SET_COMPANY_INDEX, index });
      dispatch({ type: TYPES.SET_LIST_MODAL_FLAG, flag: false });
    }, []);

  return (
    <ToastModal type={TYPES.SET_LIST_MODAL_FLAG} show={listModalFlag}>
      {CARD_COMPANIES.map(({ COLOR, NAME }, index) => (
        <CardCompany
          key={NAME}
          color={COLOR}
          onClick={onClick(index)}
          selected={cardCompanyIndex === index}
        >
          {NAME}
        </CardCompany>
      ))}
    </ToastModal>
  );
}

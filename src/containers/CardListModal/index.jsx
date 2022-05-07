import { useCallback, useContext } from 'react';
import CardCompany from 'components/CardCompany';
import { CARD_COMPANIES } from 'lib/constants';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import ModalToast from 'common/Modal/ModalToast';

export default function CardListModal({ onCloseModal }) {
  const { cardCompanyIndex } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChooseCompany = (index) =>
    useCallback(() => {
      dispatch({ type: TYPES.SET_COMPANY_INDEX, index });
      onCloseModal();
    }, []);

  return (
    <ModalToast onCloseModal={onCloseModal}>
      {CARD_COMPANIES.map(({ COLOR, NAME }, index) => (
        <CardCompany
          key={NAME}
          color={COLOR}
          onClick={onChooseCompany(index)}
          selected={cardCompanyIndex === index}
        >
          {NAME}
        </CardCompany>
      ))}
    </ModalToast>
  );
}

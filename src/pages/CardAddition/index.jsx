import React, { useCallback, useState } from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';
import useAliasModal from '../../hooks/useAliasModal';

import PageTitle from '../../system/PageTitle';
import Card from '../../system/Card';
import ErrorMessage from '../../system/ErrorMessage';

import CardAddForm from './CardAddForm';
import CardListModal from './CardListModal';

import { SHOW_MODAL } from './CardListModal/action';

import CardAdditionStyled from './style';

import { checkCardCompany } from '../../lib/validation';

import { CARD_SIZE_UNIT } from '../../constants';


const CardAddition = () => {
  const cardCompanyName = useCardState((state) => state.cardCompanyName);
  const [cardCompanyError, setCardCompanyError] = useState('');
  const cardCompanyNameValidation = useCallback(() =>
    checkCardCompany(cardCompanyName),
    [cardCompanyName],
  );

  const [Modal, onModal, offModal] = useAliasModal(>);

  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);
  const cardNumber = useCardState((state) => state.cardNumber);
  const cardOwner = useCardState((state) => state.cardOwner);
  const cardExpiration = useCardState((state) => state.cardExpiration);
  const dispatch = useCardDispatch();

  const onClickCard = useCallback(() => {
    dispatch({ type: SHOW_MODAL });
  }, []);

  // const onSubmit = useCallback(() => {
  //   setCompleteTyping(true);
  // }, []);

  return (
    <CardAdditionStyled>
      <PageTitle hasPrevButton={true}>카드 추가</PageTitle>
      <Card
        size={CARD_SIZE_UNIT.SMALL}
        onClick={onClickCard}
      >
        {[cardCompanyName, cardNumber, cardOwner, cardExpiration, cardCompanyColor]}
      </Card>
      <ErrorMessage
        setChildren={setCardCompanyError}
        validation={cardCompanyNameValidation}
      >
        {cardCompanyError}
      </ErrorMessage>
      <CardAddForm />
      <CardListModal />
    </CardAdditionStyled>
  );
}

export default CardAddition;

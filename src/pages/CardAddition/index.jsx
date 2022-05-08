import React, { useCallback, useState } from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import PageTitle from '../../system/PageTitle';
import Card from '../../system/Card';
import ErrorMessage from '../../system/ErrorMessage';

import CardAddForm from './CardAddForm';
import CardListModal from './CardListModal';
import CardComplete from '../shared/CardComplete';

import { SHOW_MODAL } from './CardListModal/action';

import CardAdditionStyled from './style';

import { checkCardCompany } from '../../lib/validation';


const CardAddition = () => {
  const cardCompanyName = useCardState((state) => state.cardCompanyName);
  const [cardCompanyError, setCardCompanyError] = useState('');
  const cardCompanyNameValidation = useCallback(() =>
    checkCardCompany(cardCompanyName),
    [cardCompanyName],
  );

  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);
  const cardNumber = useCardState((state) => state.cardNumber);
  const cardOwner = useCardState((state) => state.cardOwner);
  const cardExpiration = useCardState((state) => state.cardExpiration);
  const dispatch = useCardDispatch();

  // const [completeTyping, setCompleteTyping] = useState(false);

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
        color={cardCompanyColor}
        onClick={onClickCard}
      >
        {[cardCompanyName, cardNumber, cardOwner, cardExpiration]}
      </Card>
      <ErrorMessage
        setChildren={setCardCompanyError}
        validation={cardCompanyNameValidation}
      >
        {cardCompanyError}
      </ErrorMessage>
      <CardAddForm />
      <CardListModal />
      <CardComplete />
    </CardAdditionStyled>
  );
}

export default CardAddition;

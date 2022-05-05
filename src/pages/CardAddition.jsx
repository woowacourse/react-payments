import React, { useContext, useState } from 'react';
import * as S from 'styles.js';
import { CardDispatchContext, CardStateContext, TYPES } from 'context/CardContext';
import validator from 'validations/validator';
import { CARD_COMPANIES } from 'constants/index';

import Card from 'components/Card';
import PageTitle from 'components/PageTitle';
import CardNumber from 'components/CardNumber';
import CardExpiration from 'components/CardExpiration';
import CardOwner from 'components/CardOwner';
import CardCvc from 'components/CardCvc';
import CardPassword from 'components/CardPassword';
import NextButton from 'components/NextButton';
import CardListModal from 'components/CardListModal';
import TipModal from 'components/TipModal';
import CardConfirmModal from 'components/CardConfirmModal';
import ErrorMessage from 'components/ErrorMessage';
import ClickCardBox from 'components/ClickCardBox';

function CardAddition() {
  const {
    cardNumber,
    cardExpiration,
    cardOwner,
    cardCvc,
    cardPassword,
    cardCompanyIndex,
    cardCompanyErrorMessage,
  } = useContext(CardStateContext);

  const dispatch = useContext(CardDispatchContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cardData, setCardData] = useState();

  const isAllInputValidated = () => {
    try {
      validator.checkCardCompany(cardCompanyIndex);
      validator.checkCardNumber(cardNumber);
      validator.checkCardExpiration(cardExpiration);
      validator.checkCardOwner(cardOwner);
      validator.checkCardCvc(cardCvc);
      validator.checkCardPassword(cardPassword);

      return true;
    } catch (error) {
      return false;
    }
  };

  const onSubmitCard = () => {
    const newCardData = {
      cardName: CARD_COMPANIES[cardCompanyIndex].NAME,
      cardColor: CARD_COMPANIES[cardCompanyIndex].COLOR,
      cardNumber,
      cardExpiration,
      cardOwner,
      cardCvc,
      cardPassword,
    };
    setCardData(newCardData);
    setIsSubmitted(true);
  };

  const onConfirmCard = (cardNickname) => {
    const newCardData = {
      ...cardData,
      cardNickname: cardNickname,
    };
    dispatch({ type: TYPES.SUBMIT_CARD, newCardData });
    setIsSubmitted(false);
  };

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;

  const cardName = cardCompanyIndex === -1 ? '' : CARD_COMPANIES[cardCompanyIndex].NAME;

  return (
    <S.Container>
      <PageTitle hasPrevButton={true} title="카드 추가" />
      <ClickCardBox>
        <Card
          cardNumber={cardNumber}
          cardExpiration={cardExpiration}
          cardOwner={cardOwner}
          cardName={cardName}
          cardColor={cardColor}
          isSmall={true}
        />
      </ClickCardBox>
      <ErrorMessage
        value={cardCompanyIndex}
        validate={validator.checkCardCompany}
        type={TYPES.SET_COMPANY_ERROR_MESSAGE}
      >
        {cardCompanyErrorMessage}
      </ErrorMessage>
      <CardNumber color={cardColor} />
      <CardExpiration color={cardColor} />
      <CardOwner color={cardColor} />
      <CardCvc color={cardColor} />
      <CardPassword color={cardColor} />
      <NextButton onClick={onSubmitCard} disabled={!isAllInputValidated()} color={cardColor}>
        다음
      </NextButton>
      <CardListModal />
      <TipModal />
      {isSubmitted && <CardConfirmModal cardData={cardData} onConfirm={onConfirmCard} />}
    </S.Container>
  );
}

export default CardAddition;

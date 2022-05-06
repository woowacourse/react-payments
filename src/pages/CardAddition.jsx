import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import * as S from 'styles.js';
import validator from 'validations/validator';
import { CARD_COMPANIES } from 'constants/cardDomain';

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
import CardConfirmModal from 'pages/CardConfirmModal';
import ErrorMessage from 'components/ErrorMessage';
import ClickCardBox from 'components/ClickCardBox';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';

function CardAddition() {
  const navigate = useNavigate();

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

  const [IsClickedNextButton, setIsClickedNextButton] = useState(false);
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

  const onClickNextButton = () => {
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
    setIsClickedNextButton(true);
  };

  const onConfirmCard = (event, nickname) => {
    event.preventDefault();
    const newCardData = {
      ...cardData,
      cardNickname: nickname,
      id: uuidv4(),
    };
    dispatch({ type: TYPES.SUBMIT_CARD, newCardData });

    navigate('/card-list');
  };

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;

  const cardName = cardCompanyIndex === -1 ? '' : CARD_COMPANIES[cardCompanyIndex].NAME;

  const onClickPrev = () => {
    navigate('/card-list');
  };

  const onCloseModal = () => {
    setIsClickedNextButton(false);
  };

  return (
    <S.Container>
      <PageTitle hasPrevButton={true} onClickPrev={onClickPrev}>
        카드 추가
      </PageTitle>
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
      <NextButton onClick={onClickNextButton} disabled={!isAllInputValidated()} color={cardColor}>
        다음
      </NextButton>
      <CardListModal />
      <TipModal />
      {IsClickedNextButton && (
        <S.Container>
          <CardConfirmModal
            cardData={cardData}
            onConfirmCard={onConfirmCard}
            onCloseModal={onCloseModal}
          />
        </S.Container>
      )}
    </S.Container>
  );
}

export default CardAddition;

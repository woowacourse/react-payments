import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useNavigate } from 'react-router-dom';
import validator from 'lib/validations';
import { CARD_COMPANIES } from 'lib/constants';
import Card from 'components/Card/Card';
import PageTitle from 'components/PageTitle/PageTitle';
import CardNumber from 'containers/CardNumberInput/CardNumber';
import CardExpiration from 'containers/CardExpirationInput/CardExpiration';
import CardOwner from 'containers/CardOwnerInput/CardOwner';
import CardCvc from 'containers/CardCvcInput/CardCvc';
import CardPassword from 'containers/CardPasswordInput/CardPassword';
import NextButton from 'components/NextButton/NextButton';
import CardListModal from 'containers/CardListModal/CardListModal';
import TipModal from 'containers/TipModal/TipModal';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import { CardStateContext, CardDispatchContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import Container from 'common/Container/Container';
import CardConfirmModal from 'containers/CardConfirmModal/CardConfirmModal';
import ClickableBox from 'common/ClickableBox/ClickableBox';

function AddCard() {
  const {
    cardNumber,
    cardExpiration,
    cardOwner,
    cardCvc,
    cardPassword,
    cardCompanyIndex,
    cardCompanyErrorMessage,
  } = useContext(CardStateContext);

  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);
  const [cardData, setCardData] = useState();

  const navigate = useNavigate();
  const onClickPrev = () => {
    navigate('/card-list');
  };

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;
  const cardName = cardCompanyIndex === -1 ? '' : CARD_COMPANIES[cardCompanyIndex].NAME;

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

  const dispatch = useContext(CardDispatchContext);

  const onClickCard = () => {
    setIsListModalOpen(true);
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
    setIsConfirmModalOpen(true);
  };

  const onCloseModal = () => {
    setIsConfirmModalOpen(false);
  };

  const onSubmitForm = (cardData) => (event, nickname) => {
    event.preventDefault();
    const newCardData = {
      ...cardData,
      cardNickname: nickname,
      id: uuidv4(),
    };
    dispatch({ type: TYPES.ADD_CARD, newCardData });

    onCloseModal();
    navigate('/card-list');
  };

  return (
    <Container>
      <PageTitle hasPrevButton={true} onClickPrev={onClickPrev}>
        카드 추가
      </PageTitle>

      <ClickableBox onClick={onClickCard}>
        <Card
          cardNumber={cardNumber}
          cardExpiration={cardExpiration}
          cardOwner={cardOwner}
          cardName={cardName}
          cardColor={cardColor}
          isSmall={true}
        />
      </ClickableBox>

      <ErrorMessage
        value={cardCompanyIndex}
        validate={validator.checkCardCompany}
        type={TYPES.SET_COMPANY_ERROR_MESSAGE}
      >
        {cardCompanyErrorMessage}
      </ErrorMessage>

      <CardNumber color={cardColor} setIsListModalOpen={setIsListModalOpen} />
      <CardExpiration color={cardColor} />
      <CardOwner color={cardColor} />
      <CardCvc color={cardColor} onClickTooltip={() => setIsTipModalOpen(true)} />
      <CardPassword color={cardColor} />

      <NextButton onClick={onClickNextButton} disabled={!isAllInputValidated()} color={cardColor}>
        다음
      </NextButton>

      {isListModalOpen && <CardListModal onCloseModal={() => setIsListModalOpen(false)} />}

      {isConfirmModalOpen && (
        <CardConfirmModal
          cardData={cardData}
          onCloseModal={onCloseModal}
          onSubmitForm={onSubmitForm}
        />
      )}

      {isTipModalOpen && <TipModal onCloseModal={() => setIsTipModalOpen(false)} />}
    </Container>
  );
}

export default AddCard;

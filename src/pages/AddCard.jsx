import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import validator from 'lib/validations';
import { CARD_COMPANIES } from 'lib/constants';
import Card from 'components/Card';
import PageTitle from 'components/PageTitle';
import CardNumber from 'containers/CardNumberInput/CardNumber';
import CardExpiration from 'containers/CardExpirationInput/CardExpiration';
import CardOwner from 'containers/CardOwnerInput/CardOwner';
import CardCvc from 'containers/CardCvcInput/CardCvc';
import CardPassword from 'containers/CardPasswordInput/CardPassword';
import NextButton from 'components/NextButton';
import CardListModal from 'containers/CardListModal';
import TipModal from 'containers/TipModal';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import ClickCardBox from 'common/ClickCardBox';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import Container from 'components/Container';
import CardConfirmModal from 'containers/CardConfirmModal';

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

  const dispatch = useContext(CardDispatchContext);

  const [IsClickedNextButton, setIsClickedNextButton] = useState(false);
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

  const onCloseModal = () => {
    setIsClickedNextButton(false);
  };

  return (
    <Container>
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
        <Container>
          <CardConfirmModal
            cardData={cardData}
            onConfirmCard={onConfirmCard}
            onCloseModal={onCloseModal}
          />
        </Container>
      )}
    </Container>
  );
}

export default AddCard;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import InputPageLayout from '../components/layout/InputPageLayout';
import Caption from '../components/common/Caption';
import Title from '../components/common/Title';
import Dropdown from '../components/common/Dropdown';
import CardPreview from '../components/CardPreview/CardPreview';
import CardSubmitButton from '../components/CardSubmitButton';
import CardNumberInput from '../components/CardNumberInput';

import { CARD_COMPANIES, CARD_META_INFO, URL } from '../constants/card-app';

import useCardNumberInput from '../hooks/useCardNumberInput';
import useExpirationDateInput from '../hooks/useExpirationDateInput';
import useCardOwnerNameInput from '../hooks/useCardOwnerNameInput';
import useCardCVCNumberInput from '../hooks/useCardCVCNumberInput';
import useCardPasswordInput from '../hooks/useCardPasswordInput';

import ExpirationDateInput from '../components/ExpirationDateInput';
import CardOwnerNameInput from '../components/CardOwnerNameInput';
import CardCVCNumberInput from '../components/CardCVCNumberInput';
import CardPasswordInput from '../components/CardPasswordInput';

const NewCardInputPage = () => {
  const navigate = useNavigate();

  const { cardNumberState, handleCardNumberChange } = useCardNumberInput();
  const { expirationDateState, handleExpirationDateChange } = useExpirationDateInput();
  const { cardOwnerNameState, handleCardOwnerNameChange, updateValue } = useCardOwnerNameInput();
  const [cardCompany, setCardCompany] = useState('');
  const { cardCVCNumberState, handleCardCVCNumberChange } = useCardCVCNumberInput();
  const { cardPasswordState, handleCardPasswordChange } = useCardPasswordInput();

  const [isCardFront, setIsCardFront] = useState<boolean>(true);

  const isFormComplete =
    cardNumberState.isComplete &&
    cardCompany !== '' &&
    expirationDateState.isComplete &&
    cardOwnerNameState.isComplete &&
    cardCVCNumberState.isComplete &&
    cardPasswordState.isComplete;

  const handleInputFormSubmit = () => {
    navigate(URL.submitPage, {
      replace: true,
      state: {
        startNumber: cardNumberState.value[0],
        cardCompany: cardCompany,
      },
    });
  };

  return (
    <InputPageLayout>
      <CardContainer>
        <CardPreview
          cardInfo={{
            cardNumbers: cardNumberState.value,
            expirationDate: expirationDateState.value,
            cardOwnerName: cardOwnerNameState.value,
            cardCompany,
            cardCVCNumber: cardCVCNumberState.value,
            cardPassword: cardPasswordState.value,
          }}
          isCardFront={isCardFront}
        />
      </CardContainer>

      <InputContainer>
        {cardCVCNumberState.isNextVisible && (
          <>
            <Title content={CARD_META_INFO.cardPassword.query} />
            <Caption text={CARD_META_INFO.cardPassword.caption} type='input' />
            <CardPasswordInput
              cardPassword={cardPasswordState.value}
              cardPasswordError={cardPasswordState.error}
              onCardPasswordChange={handleCardPasswordChange}
            />
          </>
        )}

        {cardOwnerNameState.isNextVisible && (
          <>
            <Title content={CARD_META_INFO.cardCVCNumber.query} />
            <CardCVCNumberInput
              cardCVCNumber={cardCVCNumberState.value}
              cardCVCNumberError={cardCVCNumberState.error}
              onCardCVCNumberChange={handleCardCVCNumberChange}
              onFocusChange={() => setIsCardFront((prev) => !prev)}
            />
          </>
        )}

        {expirationDateState.isNextVisible && (
          <>
            <Title content={CARD_META_INFO.cardOwnerName.query} />
            <CardOwnerNameInput
              cardOwnerName={cardOwnerNameState.value}
              cardOwnerNameError={cardOwnerNameState.error}
              onCardOwnerNameChange={updateValue}
              onPressEnter={handleCardOwnerNameChange}
            />
          </>
        )}

        {cardCompany !== '' && (
          <>
            <Title content={CARD_META_INFO.expirationDate.query} />
            <Caption text={CARD_META_INFO.expirationDate.caption} type='input' />
            <ExpirationDateInput
              expirationDate={expirationDateState.value}
              expirationDateErrors={expirationDateState.error}
              onExpirationDateChange={handleExpirationDateChange}
            />
          </>
        )}

        {cardNumberState.isNextVisible && (
          <>
            <Title content={CARD_META_INFO.cardCompany.query} />
            <Caption text={CARD_META_INFO.cardCompany.caption} type='input' />
            <Dropdown value={cardCompany} options={CARD_COMPANIES} onSelect={(e) => setCardCompany(e)} />
          </>
        )}

        <Title content={CARD_META_INFO.cardNumbers.query} />
        <Caption text={CARD_META_INFO.cardNumbers.caption} type='input' />
        <CardNumberInput
          cardNumbers={cardNumberState.value}
          cardNumberErrors={cardNumberState.error}
          onCardNumberChange={handleCardNumberChange}
        />
      </InputContainer>
      <CardSubmitButton isDisplay={isFormComplete} onInputFormSubmit={handleInputFormSubmit} />
    </InputPageLayout>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 315px;
  height: 240px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 315px;
  height: 460px;

  overflow-y: scroll;
`;

export default NewCardInputPage;

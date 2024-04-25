import { useState } from 'react';

import InputPageLayout from '../components/layout/InputPageLayout';

import Caption from '../components/common/Caption';
import Title from '../components/common/Title';

import CardPreview from '../components/CardPreview/CardPreview';
import CardNumberInput from '../components/CardNumberInput';
import ExpirationDateInput from '../components/ExpirationDateInput';
import CardOwnerNameInput from '../components/CardOwnerNameInput';

import { CARD_COMPANIES, CARD_META_INFO } from '../constants/card-app';

import { CardFormValidity, CardInfo } from '../types/card';
import Dropdown from '../components/common/Dropdown';
import CardCVCNumberInput from '../components/CardCVCNumberInput';
import CardPasswordInput from '../components/CardPasswordInput';
import { styled } from 'styled-components';
import CardSubmitButton from '../components/CardSubmitButton';
import { useNavigate } from 'react-router-dom';
import { URL } from './../constants/card-app';

const NewCardInputPage = () => {
  const [newCardInfo, setNewCardInfo] = useState<CardInfo>({
    cardNumbers: ['', '', '', ''],
    expirationDate: ['', ''],
    cardOwnerName: '',
    cardCompany: '',
    cardCVCNumber: '',
    cardPassword: '',
  });

  const [isSectionValid, setIsSectionValid] = useState<CardFormValidity>({
    cardNumbers: false,
    expirationDate: false,
    cardOwnerName: false,
    cardCompany: false,
    cardCVCNumber: false,
    cardPassword: false,
  });

  const isFormValid = Object.values(isSectionValid).every((section) => section === true);

  const handleCardNumberChange = (index: number, value: string) => {
    const updatedCardNumbers = [...newCardInfo.cardNumbers];
    updatedCardNumbers[index] = value;

    setNewCardInfo((prev) => {
      return {
        ...prev,
        cardNumbers: updatedCardNumbers,
      };
    });
  };

  const handleExpirationDateChange = (index: number, value: string) => {
    const updatedExpirationDate = [...newCardInfo.expirationDate];
    updatedExpirationDate[index] = value;

    setNewCardInfo((prev) => {
      return {
        ...prev,
        expirationDate: updatedExpirationDate,
      };
    });
  };

  const handleCardOwnerNameChange = (value: string) => {
    setNewCardInfo((prev) => {
      return {
        ...prev,
        cardOwnerName: value,
      };
    });
  };

  const handleCardCompanyChange = (value: string) => {
    setNewCardInfo((prev) => {
      return {
        ...prev,
        cardCompany: value,
      };
    });
  };

  const handleCardCVCNumberChange = (value: string) => {
    setNewCardInfo((prev) => {
      return {
        ...prev,
        cardCVCNumber: value,
      };
    });
  };

  const handleCardPasswordChange = (value: string) => {
    setNewCardInfo((prev) => {
      return {
        ...prev,
        cardPassword: value,
      };
    });
  };

  const navigate = useNavigate();

  const handleInputFormSubmit = () => {
    navigate(URL.submitPage, {
      replace: true,
      state: {
        startNumber: newCardInfo.cardNumbers[0],
        cardCompany: newCardInfo.cardCompany,
      },
    });
  };

  return (
    <InputPageLayout>
      <CardContainer>
        <CardPreview cardInfo={newCardInfo} isCardFront={true} />
      </CardContainer>

      <InputContainer>
        <Title content={CARD_META_INFO.cardNumbers.query} />
        <Caption text={CARD_META_INFO.cardNumbers.caption} type='input' />
        <CardNumberInput
          cardNumbers={newCardInfo.cardNumbers}
          errorCaption={(errorText: string) => <Caption text={errorText} type='error' />}
          onCardNumberChange={handleCardNumberChange}
        />

        <Title content={CARD_META_INFO.expirationDate.query} />
        <Caption text={CARD_META_INFO.expirationDate.caption} type='input' />
        <ExpirationDateInput
          expirationDate={newCardInfo.expirationDate}
          errorCaption={(errorText: string) => <Caption text={errorText} type='error' />}
          onExpirationDateChange={handleExpirationDateChange}
        />

        <Title content={CARD_META_INFO.cardOwnerName.query} />
        <CardOwnerNameInput
          ownerName={newCardInfo.cardOwnerName}
          errorCaption={(errorText: string) => <Caption text={errorText} type='error' />}
          onCardOwnerNameChange={handleCardOwnerNameChange}
        />

        <Title content={CARD_META_INFO.cardCompany.query} />
        <Caption text={CARD_META_INFO.cardCompany.caption} type='input' />
        <Dropdown value={newCardInfo.cardCompany} options={CARD_COMPANIES} onSelect={handleCardCompanyChange} />

        <Title content={CARD_META_INFO.cardCVCNumber.query} />
        <CardCVCNumberInput
          cardCVCNumber={newCardInfo.cardCVCNumber}
          errorCaption={(errorText: string) => <Caption text={errorText} type='error' />}
          onCardCVCNumberChange={handleCardCVCNumberChange}
        />

        <Title content={CARD_META_INFO.cardPassword.query} />
        <Caption text={CARD_META_INFO.cardPassword.caption} type='input' />
        <CardPasswordInput
          cardPassword={newCardInfo.cardPassword}
          errorCaption={(errorText: string) => <Caption text={errorText} type='error' />}
          onCardPasswordChange={handleCardPasswordChange}
        />
      </InputContainer>
      <CardSubmitButton isDisplay={isFormValid} onInputFormSubmit={handleInputFormSubmit} />
    </InputPageLayout>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 315px;
  height: 280px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 315px;

  overflow-y: scroll;
`;

export default NewCardInputPage;

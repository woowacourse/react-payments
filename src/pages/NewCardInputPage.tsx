import { useState } from 'react';

import InputPageLayout from '../components/layout/InputPageLayout';

import Caption from '../components/common/Caption';
import Title from '../components/common/Title';

import CardPreview from '../components/CardPreview/CardPreview';
import CardNumberInput from '../components/CardNumberInput';
import ExpirationDateInput from '../components/ExpirationDateInput';
import CardOwnerNameInput from '../components/CardOwnerNameInput';

import { CARD_META_INFO } from '../constants/card-app';

import { CardInfo } from '../types/card';

const NewCardInputPage = () => {
  const [newCardInfo, setNewCardInfo] = useState<CardInfo>({
    cardNumbers: ['', '', '', ''],
    expirationDate: ['', ''],
    cardOwnerName: '',
  });

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

  return (
    <InputPageLayout>
      <CardPreview cardInfo={newCardInfo} />

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
    </InputPageLayout>
  );
};

export default NewCardInputPage;

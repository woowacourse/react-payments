import { useState } from 'react';
import { CARD_BRANDS, INITIAL_CARD_NUMBER } from '../constants';
import { CardNumberType } from '../types';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);

  const handleCardNumberChange = (field: keyof CardNumberType, value: string) => {
    const isError = !Number.isInteger(+value);

    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, isError }
    }));

    if (field !== 'first') {
      return;
    }
    setCardLogo(getCardBrand(value));
  };

  const getCardBrand = (value: string) => {
    const brand = Object.values(CARD_BRANDS).find(({ match }) => match(value));
    return brand?.name ?? null;
  };

  const getCardNumberErrorMessage = (cardNumbers: CardNumberType) => {
    const hasError = Object.values(cardNumbers).some(({ isError }) => isError);
    return hasError ? '숫자만 입력 가능합니다.' : '';
  };
};

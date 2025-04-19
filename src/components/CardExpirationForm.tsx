import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../utils/isExactLength';
import NumberInput from './NumberInput';
import { ERROR_MESSAGE } from '../constants/guide';
import { NumberInputForm, Label, NumberInputContainer, ErrorText } from '../styles/CardForm.styles';

interface CardExpirationFormProps {
  cardInfo: {
    month: string;
    year: string;
  };
  handleCardInfo: (key: keyof CardExpirationFormProps['cardInfo'], value: string) => void;
  maxLength: number;
}

function CardExpirationForm({ cardInfo, handleCardInfo, maxLength }: CardExpirationFormProps) {
  const [errorText, setErrorText] = useState('');

  const isValidMonth = Number(cardInfo.month) >= 1 && Number(cardInfo.month) <= 12;
  const isValidYear = Number(cardInfo.year) >= 25 && Number(cardInfo.year) <= 99;

  useEffect(() => {
    const isExactDigits = [cardInfo.month, cardInfo.year].some((number) => {
      if (isZeroOrExactLength(number, maxLength)) return false;
      return true;
    });

    if (isExactDigits) {
      setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
      return;
    }
    if (cardInfo.month !== '' && !isValidMonth) {
      setErrorText(ERROR_MESSAGE.INVALID_MONTH);
      return;
    }
    if (cardInfo.year !== '' && !isValidYear) {
      setErrorText(ERROR_MESSAGE.INVALID_YEAR);
      return;
    }
    setErrorText('');
  }, [cardInfo.month, cardInfo.year]);

  const InputInfo = [
    {
      value: cardInfo.month,
      setValue: (value: string) => handleCardInfo('month', value),
      placeholder: 'MM',
      extraErrorCondition: cardInfo.month !== '' && !isValidMonth,
    },
    {
      value: cardInfo.year,
      setValue: (value: string) => handleCardInfo('year', value),
      placeholder: 'YY',
      extraErrorCondition: cardInfo.year !== '' && !isValidYear,
    },
  ];

  return (
    <NumberInputForm>
      <Label>유효기간</Label>
      <NumberInputContainer>
        {InputInfo.map((inputInfo, index) => (
          <NumberInput
            key={index}
            value={inputInfo.value}
            setValue={inputInfo.setValue}
            maxLength={maxLength}
            placeholder={inputInfo.placeholder}
            extraErrorCondition={inputInfo.extraErrorCondition}
          />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardExpirationForm;

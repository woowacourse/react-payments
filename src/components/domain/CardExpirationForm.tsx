import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../../utils/isExactLength';
import NumberInput from '../common/NumberInput';
import { ERROR_MESSAGE } from '../../constants/guide';
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from '../../styles/CardForm.styles';

interface CardExpirationFormProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) => void;
  maxLength: number;
}

function CardExpirationForm({ cardInfo, handleCardInfo, maxLength }: CardExpirationFormProps) {
  const [errorText, setErrorText] = useState('');

  const isValidMonth =
    Number(cardInfo.expiration.month) >= 1 && Number(cardInfo.expiration.month) <= 12;
  const isValidYear =
    Number(cardInfo.expiration.year) >= 25 && Number(cardInfo.expiration.year) <= 99;

  useEffect(() => {
    const isExactDigits = [cardInfo.expiration.month, cardInfo.expiration.year].some((number) => {
      if (isZeroOrExactLength(number, maxLength)) return false;
      return true;
    });

    if (isExactDigits) {
      setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
      return;
    }
    if (cardInfo.expiration.month !== '' && !isValidMonth) {
      setErrorText(ERROR_MESSAGE.INVALID_MONTH);
      return;
    }
    if (cardInfo.expiration.year !== '' && !isValidYear) {
      setErrorText(ERROR_MESSAGE.INVALID_YEAR);
      return;
    }
    setErrorText('');
  }, [cardInfo.expiration.month, cardInfo.expiration.year]);

  const InputInfo = [
    {
      value: cardInfo.expiration.month,
      setValue: (value: string) => handleCardInfo('expiration', value, 'month'),
      placeholder: 'MM',
      extraErrorCondition: cardInfo.expiration.month !== '' && !isValidMonth,
    },
    {
      value: cardInfo.expiration.year,
      setValue: (value: string) => handleCardInfo('expiration', value, 'year'),
      placeholder: 'YY',
      extraErrorCondition: cardInfo.expiration.year !== '' && !isValidYear,
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

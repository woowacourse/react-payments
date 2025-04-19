import NumberInput from './NumberInput';
import { useState, useEffect } from 'react';
import isZeroOrExactLength from '../utils/isExactLength';
import { ERROR_MESSAGE } from '../constants/guide';
import { NumberInputForm, Label, NumberInputContainer, ErrorText } from '../styles/CardForm.styles';

interface CardNumberFormProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) => void;
  maxLength: number;
}

function CardNumberForm({ cardInfo, handleCardInfo, maxLength }: CardNumberFormProps) {
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const condition = [
      cardInfo.number.first,
      cardInfo.number.second,
      cardInfo.number.third,
      cardInfo.number.fourth,
    ].some((number) => {
      if (isZeroOrExactLength(number, maxLength)) return false;
      return true;
    });
    if (condition) setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    else setErrorText('');
  }, [
    cardInfo.number.first,
    cardInfo.number.second,
    cardInfo.number.third,
    cardInfo.number.fourth,
  ]);

  const NumberInputInfo = [
    {
      value: cardInfo.number.first,
      setValue: (value: string) => handleCardInfo('number', value, 'first'),
    },
    {
      value: cardInfo.number.second,
      setValue: (value: string) => handleCardInfo('number', value, 'second'),
    },
    {
      value: cardInfo.number.third,
      setValue: (value: string) => handleCardInfo('number', value, 'third'),
    },
    {
      value: cardInfo.number.fourth,
      setValue: (value: string) => handleCardInfo('number', value, 'fourth'),
    },
  ];

  return (
    <NumberInputForm>
      <Label>카드 번호</Label>
      <NumberInputContainer>
        {NumberInputInfo.map((inputInfo, index) => (
          <NumberInput
            key={index}
            value={inputInfo.value}
            setValue={inputInfo.setValue}
            maxLength={maxLength}
            placeholder="1234"
          />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardNumberForm;

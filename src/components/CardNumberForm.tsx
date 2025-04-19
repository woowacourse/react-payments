import NumberInput from './NumberInput';
import { useState, useEffect } from 'react';
import isZeroOrExactLength from '../utils/isExactLength';
import { ERROR_MESSAGE } from '../constants/guide';
import { NumberInputForm, Label, NumberInputContainer, ErrorText } from '../styles/CardForm.styles';

interface CardNumberFormProps {
  cardInfo: {
    firstNumber: string;
    secondNumber: string;
    thirdNumber: string;
    fourthNumber: string;
  };
  handleCardInfo: (key: keyof CardNumberFormProps['cardInfo'], value: string) => void;
  maxLength: number;
}

function CardNumberForm({ cardInfo, handleCardInfo, maxLength }: CardNumberFormProps) {
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const condition = [
      cardInfo.firstNumber,
      cardInfo.secondNumber,
      cardInfo.thirdNumber,
      cardInfo.fourthNumber,
    ].some((number) => {
      if (isZeroOrExactLength(number, maxLength)) return false;
      return true;
    });
    if (condition) setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    else setErrorText('');
  }, [cardInfo.firstNumber, cardInfo.secondNumber, cardInfo.thirdNumber, cardInfo.fourthNumber]);

  const NumberInputInfo = [
    {
      value: cardInfo.firstNumber,
      setValue: (value: string) => handleCardInfo('firstNumber', value),
    },
    {
      value: cardInfo.secondNumber,
      setValue: (value: string) => handleCardInfo('secondNumber', value),
    },
    {
      value: cardInfo.thirdNumber,
      setValue: (value: string) => handleCardInfo('thirdNumber', value),
    },
    {
      value: cardInfo.fourthNumber,
      setValue: (value: string) => handleCardInfo('fourthNumber', value),
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

import { useEffect, useState } from 'react';
import validate from '../utils/validate';
import useInput from './useInput';
import { ValidationType } from './useValidations';

import MasterCardImage from '../assets/images/mastercard.png';
import VisaCardImage from '../assets/images/visa.png';

// TODO: 상수화
const cardNumbersValidations: ValidationType[] = [
  {
    isError: (value: string) => value !== '' && !validate.isValidDigit(value),
    errorMessage: '숫자만 입력할 수 있습니다.',
  },
];

const exactLengthValidations: ValidationType[] = [
  {
    isError: (state: string) => state !== '' && !validate.isSatisfiedLength(4, state.length),
    errorMessage: '4자리 숫자를 입력해주세요.',
  },
];

const VALID_CARD_NUMBERS_LENGTH = 16;

const useCardNumbers = () => {
  const cardNumbersArray = [
    useInput(cardNumbersValidations, exactLengthValidations),
    useInput(cardNumbersValidations, exactLengthValidations),
    useInput(cardNumbersValidations, exactLengthValidations),
    useInput(cardNumbersValidations, exactLengthValidations),
  ];

  const [cardImageSrc, setCardImageSrc] = useState('');

  useEffect(() => {
    const cardNumbersString = cardNumbersArray.map(({ value }) => value).join('');

    if (cardImageSrc && VALID_CARD_NUMBERS_LENGTH !== cardNumbersString.length) {
      setCardImageSrc('');
    }

    if (VALID_CARD_NUMBERS_LENGTH === cardNumbersString.length) {
      if (validate.isVisa(cardNumbersString)) {
        setCardImageSrc(VisaCardImage);
      }

      if (validate.isMasterCard(cardNumbersString)) {
        setCardImageSrc(MasterCardImage);
      }
    }
  }, [...cardNumbersArray.map(({ value }) => value)]);

  return { cardImageSrc, cardNumbersArray };
};

export default useCardNumbers;

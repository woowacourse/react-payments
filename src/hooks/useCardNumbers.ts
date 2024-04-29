import { useEffect, useState } from 'react';
import validate from '../utils/validate';
import useInput from './useInput';
import { ValidationType } from './useValidations';

import MasterCardImage from '../assets/images/mastercard.png';
import VisaCardImage from '../assets/images/visa.png';
import { MAX_LENGTH } from '../constants/rules';

const inputLimitValidation: ValidationType = {
  isError: (value: string) => value !== '' && !validate.isValidDigit(value),
  errorMessage: '숫자만 입력할 수 있습니다.',
};

const onBlurValidations: ValidationType[] = [
  {
    isError: (value: string) => !validate.isSatisfiedLength(MAX_LENGTH.cardNumbers, value.length),
    errorMessage: `${MAX_LENGTH.cardNumbers}자리 숫자를 입력해주세요.`,
  },
];

const VALID_CARD_NUMBERS_LENGTH = 16;

const useCardNumbers = <T extends HTMLInputElement>() => {
  const cardNumbersArray = [
    useInput<T>(inputLimitValidation, onBlurValidations),
    useInput<T>(inputLimitValidation, onBlurValidations),
    useInput<T>(inputLimitValidation, onBlurValidations),
    useInput<T>(inputLimitValidation, onBlurValidations),
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
  }, [
    cardNumbersArray[0].value,
    cardNumbersArray[1].value,
    cardNumbersArray[2].value,
    cardNumbersArray[3].value,
  ]);

  return { cardImageSrc, cardNumbersArray };
};

export default useCardNumbers;

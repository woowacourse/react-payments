import { isCompleteCardNumber, isCompleteCardNumbers } from '@utils/creditCard/cardNumbers';
import { isContainsNonNumeric } from '@utils/number';
import { useState } from 'react';

const useChangeCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardNumberError, setCardNumberError] = useState({
    errorConditions: [false, false, false, false],
    errorMessage: '',
  });
  const [isCardNumberCompleted, setIsCardNumberCompleted] = useState(false);

  const handleCardNumberChange = (cardIndex: number, value: string) => {
    if (isContainsNonNumeric(value)) {
      setCardNumberError((prevCardNumberError) => {
        const newErrorConditions = [...prevCardNumberError.errorConditions];
        newErrorConditions[cardIndex] = true;

        return {
          errorConditions: newErrorConditions,
          errorMessage: '숫자만 입력 가능합니다.',
        };
      });

      return;
    }

    const newCardNumbers = [...cardNumbers];
    newCardNumbers[cardIndex] = value;

    if (!isCompleteCardNumber(value)) {
      setCardNumbers(newCardNumbers);
      setCardNumberError((prevCardNumberError) => {
        const newErrorConditions = prevCardNumberError.errorConditions;
        newErrorConditions[cardIndex] = true;

        newCardNumbers.forEach((cardNumbers, newCardIndex) => {
          if (cardIndex !== newCardIndex && cardNumbers === '') newErrorConditions[newCardIndex] = false;
        });

        return {
          errorConditions: newErrorConditions,
          errorMessage: '카드 번호 4자리를 입력해주세요.',
        };
      });

      return;
    }

    const errorMessage = isCompleteCardNumbers(newCardNumbers) ? '' : '카드 번호는 16자리 숫자여야 합니다.';

    setCardNumbers(newCardNumbers);
    setCardNumberError({
      errorConditions: isCompleteCardNumbers(newCardNumbers)
        ? [false, false, false, false]
        : newCardNumbers.map((cardNumber) => (isCompleteCardNumber(cardNumber) ? false : true)),
      errorMessage,
    });

    if (isCompleteCardNumbers(newCardNumbers)) setIsCardNumberCompleted(true);
  };

  return { cardNumbers, isCardNumberCompleted, cardNumberError, handleCardNumberChange };
};

export default useChangeCardNumber;

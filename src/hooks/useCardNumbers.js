import { useState, useMemo } from 'react';
import validator from '../validation';
import { numberRegex } from '../constant/regularExpression';
import { CARD_NUMBER_MARK, CARD_NUMBER_SEPARATOR } from '../constant/mark';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);

  const convertedCardNumbers = useMemo(() => {
    return cardNumbers.map((cardNumber, index) =>
      index >= 2 ? CARD_NUMBER_MARK.repeat(cardNumber.length) : cardNumber
    );
  }, [cardNumbers]);

  const isValidCardNumbers = useMemo(
    () => validator.validateCardNumbers(cardNumbers.join(CARD_NUMBER_SEPARATOR)),
    [cardNumbers]
  );

  const handleChangeCardNumbersInput = ({ nativeEvent: { inputType, data }, target }) => {
    if (validator.isInvalidInputData(numberRegex, data, inputType)) {
      return;
    }
    const inputIndex = Number(target.name);

    const updatedCardNumbers = cardNumbers.map((cardNumber, index) => {
      return inputIndex === index ? target.value : cardNumber;
    });

    setCardNumbers(updatedCardNumbers);
  };

  return {
    cardNumbers,
    convertedCardNumbers,
    isValidCardNumbers,
    handleChangeCardNumbersInput,
  };
};

export default useCardNumbers;

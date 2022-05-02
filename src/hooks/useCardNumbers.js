import { useState, useMemo } from 'react';
import validator from '../validation';
import { cardNumberInputRegex } from '../constant/regularExpression';
import { CARD_NUMBER_MARK, CARD_NUMBER_SEPARATOR } from '../constant/mark';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState([]);

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
    if (validator.isInvalidInputData(cardNumberInputRegex, data, inputType)) {
      return;
    }

    const inputCardNumbers = target.value.split(CARD_NUMBER_SEPARATOR);
    const targetIndex = convertedCardNumbers.findIndex(
      (numbers, index) => numbers !== inputCardNumbers[index]
    );

    if (isEnterBackKey(inputCardNumbers, convertedCardNumbers)) {
      const newCardNumbers = cardNumbers.filter((_, index) => index !== targetIndex);
      setCardNumbers(newCardNumbers);
      return;
    }

    if (isFirstEnterOrDashEnter(targetIndex)) {
      setCardNumbers(cardNumbers.concat([inputCardNumbers[inputCardNumbers.length - 1]]));
      return;
    }

    if (isFirstPartOrSecondPart(targetIndex)) {
      setCardNumbers(inputCardNumbers);
      return;
    }

    const numberIndex = inputCardNumbers[targetIndex]
      .split('')
      .findIndex(char => isNumberCharacter(char));

    if (isNotNumber(numberIndex)) {
      return;
    }

    const inputNumber = inputCardNumbers[targetIndex][numberIndex];
    const newCardNumbers = cardNumbers.map((number, index) => {
      if (index === targetIndex) {
        return number.length === numberIndex
          ? number + inputNumber
          : number.slice(0, numberIndex) + inputNumber + number.slice(numberIndex);
      }
      return number;
    });
    setCardNumbers(newCardNumbers);
  };

  const isEnterBackKey = (inputCardNumbers, convertedCardNumbers) => {
    return inputCardNumbers.join().length < convertedCardNumbers.join().length;
  };

  const isFirstEnterOrDashEnter = targetIndex => {
    return targetIndex === -1;
  };

  const isFirstPartOrSecondPart = targetIndex => {
    return targetIndex < 2;
  };

  const isNumberCharacter = char => {
    return char === '0' || Number(char);
  };

  const isNotNumber = numberIndex => {
    return numberIndex === -1;
  };

  return {
    cardNumbers,
    convertedCardNumbers,
    isValidCardNumbers,
    handleChangeCardNumbersInput,
  };
};

export default useCardNumbers;

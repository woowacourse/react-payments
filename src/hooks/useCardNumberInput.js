import validator from '../validation';
import useFocus from './useFocus';
import useSomeInput from './useSomeInput';
import { COUNT } from '../constant';
import { CARD_NUMBER_MARK } from '../constant/mark';
import { numberRegex } from '../constant/regularExpression';

function useCardNumberInput(inputNames) {
  const {
    stateObject: numbers,
    setStateObject: setNumbers,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
  } = useSomeInput(inputNames);

  const { focusPrevInput } = useFocus({
    validate: validator.validateCardNumber,
    inputNames: inputNames,
    validations,
    inputRefs,
    currentInputRef,
  });

  const isValid = Object.values(validations).every(valid => valid);

  const cardNumberString = Object.values(numbers).some(number => number)
    ? Object.values(numbers)
        .map((cardNumber, index) =>
          index < COUNT.CARD_NUMBER_HIDE_COUNT
            ? cardNumber
            : CARD_NUMBER_MARK.repeat(cardNumber.length)
        )
        .join(' ')
    : '';

  const handleNumberChange = ({ target, nativeEvent: { data, inputType } }) => {
    if (
      (numberRegex.test(data) || !data) &&
      target.value.length <= COUNT.CARD_NUMBER_MAX_COUNT
    ) {
      const order = target.name;
      const newNumber = target.value;

      updateNumbers(order, newNumber);
      updateValidations(order, validator.validateCardNumber(newNumber));
      focusPrevInput(order, newNumber, inputType);
      currentInputRef.current = order;
    }
  };

  const updateNumbers = (order, newNumber) => {
    setNumbers(prevNumbers => ({ ...prevNumbers, [order]: newNumber }));
  };

  const updateValidations = (order, isValid) => {
    setValidations(prevValidation => ({ ...prevValidation, [order]: isValid }));
  };

  return {
    numbers,
    cardNumberString,
    validations,
    isValid,
    inputRefs,
    handleNumberChange,
  };
}

export default useCardNumberInput;

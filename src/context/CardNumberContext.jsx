import { createContext } from 'react';
import validator from '../../src/validation';
import { numberRegex } from '../constant/regularExpression';
import useFocus from '../hooks/useFocus';
import useSomeInput from '../hooks/useSomeInput';
import { CARD_NUMBER_MARK } from '../constant/mark';
import { CARD_NUMBER_INPUT_NAMES } from '../constant/inputNames';

const CardNumberContext = createContext();

function CardNumberContextProvider({ children }) {
  const {
    stateObject: numbers,
    setStateObject: setNumbers,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
  } = useSomeInput(CARD_NUMBER_INPUT_NAMES);

  const { focusPrevInput } = useFocus({
    validate: validator.validateCardNumber,
    inputNames: CARD_NUMBER_INPUT_NAMES,
    validations,
    inputRefs,
    currentInputRef,
  });

  const isValid = Object.values(validations).every(valid => valid);

  const cardNumberString = Object.values(numbers).some(number => number)
    ? Object.values(numbers)
        .map((cardNumber, index) =>
          index < 2 ? cardNumber : CARD_NUMBER_MARK.repeat(cardNumber.length)
        )
        .join(' ')
    : '';

  const handleNumberChange = ({ target, nativeEvent: { data, inputType } }) => {
    if ((numberRegex.test(data) || !data) && target.value.length <= 4) {
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

  return (
    <CardNumberContext.Provider
      value={{
        numbers,
        cardNumberString,
        validations,
        isValid,
        inputRefs,
        handleNumberChange,
      }}
    >
      {children}
    </CardNumberContext.Provider>
  );
}

export { CardNumberContext, CardNumberContextProvider };

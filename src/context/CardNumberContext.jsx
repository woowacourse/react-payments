import { createContext, useRef } from 'react';
import validator from '../../src/validation';
import { numberRegex } from '../constant/regularExpression';
import useFocus from '../hooks/useFocus';
import useSomeInput from '../hooks/useSomeInput';

const CardNumberContext = createContext();

function CardNumberContextProvider({ children }) {
  const orders = ['first', 'second', 'third', 'four'];
  const {
    stateObject: numbers,
    setStateObject: setNumbers,
    validations,
    setValidations,
    refs,
  } = useSomeInput(orders);

  const currentOrderRef = useRef();
  const isValid = Object.values(validations).every(valid => valid);

  const cardNumberString = Object.values(numbers).some(number => number)
    ? Object.values(numbers)
        .map((cardNumber, index) =>
          index < 2 ? cardNumber : '●'.repeat(cardNumber.length)
        )
        .join(' ')
    : '';

  const { focusPrevOrder } = useFocus({
    validate: validator.validateCardNumber,
    orders,
    validations,
    refs,
    currentOrderRef,
  });

  const handleNumberChange = ({ target, nativeEvent: { data, inputType } }) => {
    if ((numberRegex.test(data) || !data) && target.value.length <= 4) {
      const order = target.name;
      const newNumber = target.value;

      updateNumbers(order, newNumber);
      updateValidations(order, validator.validateCardNumber(newNumber));
      focusPrevOrder(order, newNumber, inputType);
      currentOrderRef.current = order;
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
        orders,
        numbers,
        cardNumberString,
        validations,
        isValid,
        refs,
        currentOrderRef,
        handleNumberChange,
      }}
    >
      {children}
    </CardNumberContext.Provider>
  );
}

export { CardNumberContext, CardNumberContextProvider };

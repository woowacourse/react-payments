import validator from 'validation';
import { useContext, useEffect } from 'react';
import useFocus from 'hooks/Input/useFocus';
import useSomeInput from 'hooks/Input/useSomeInput';
import { COUNT } from 'constant';
import { numberRegex } from 'constant/regularExpression';
import { CardContext } from 'context/CardContext';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';

function useCardNumberInput(inputNames) {
  const { inputtedInfoDispatch } = useContext(CardContext);

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

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.CARD_NUMBER,
      value: numbers,
      valid: isValid,
    });
  }, [numbers, isValid]);

  return {
    numbers,
    validations,
    isValid,
    inputRefs,
    handleNumberChange,
  };
}

export default useCardNumberInput;

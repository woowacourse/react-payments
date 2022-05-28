import { ChangeEvent, useContext, useEffect } from 'react';
import CardNumberInput from 'components/Modules/CardNumberInput';
import { CardContext, CardContextValue } from 'context/CardContext';
import { CARD_NUMBER_INPUT_NAMES } from 'constant/inputNames';
import validator from 'validation';
import useSomeInput from 'hooks/useSomeInput';
import { COUNT } from 'constant';
import { numberRegex } from 'constant/regularExpression';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';

function CardNumberInputContainer() {
  const { inputtedInfoDispatch } = useContext(CardContext) as CardContextValue;

  const {
    stateObject: numbers,
    setStateObject: setNumbers,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
    focusPrevInput,
  } = useSomeInput(CARD_NUMBER_INPUT_NAMES, validator.validateCardNumber);

  const isValid = Object.values(validations).every(valid => valid);

  const handleNumberChange = ({ target, nativeEvent: { data, inputType } }: any) => {
    if ((numberRegex.test(data) || !data) && target.value.length <= COUNT.CARD_NUMBER_MAX_COUNT) {
      const order = target.name;
      const newNumber = target.value;

      updateNumbers(order, newNumber);
      updateValidations(order, validator.validateCardNumber(newNumber));
      focusPrevInput(order, newNumber, inputType);
      currentInputRef.current = order;
    }
  };

  const updateNumbers = (order: string, newNumber: string) => {
    setNumbers(prevNumbers => ({ ...prevNumbers, [order]: newNumber }));
  };

  const updateValidations = (order: string, isValid: boolean) => {
    setValidations(prevValidation => ({ ...prevValidation, [order]: isValid }));
  };

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.CARD_NUMBER,
      value: numbers,
      valid: isValid,
    });
  }, [numbers, isValid]);

  return (
    <CardNumberInput
      numbers={numbers}
      validations={validations}
      inputRefs={inputRefs}
      handleNumberChange={handleNumberChange}
    />
  );
}

export default CardNumberInputContainer;

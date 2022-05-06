import { numberRegex } from '../constant/regularExpression';
import validator from '../validation';
import useFocus from './useFocus';
import useSomeInput from './useSomeInput';

function usePasswordInput(inputNames) {
  const {
    stateObject: password,
    setStateObject: setPassword,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
  } = useSomeInput(inputNames);

  const { focusPrevInput } = useFocus({
    validate: validator.validatePassword,
    inputNames: inputNames,
    validations,
    inputRefs,
    currentInputRef,
  });

  const isValid = Object.values(validations).every(valid => valid);

  const onPasswordChange = ({ target, nativeEvent: { data, inputType } }) => {
    if (numberRegex.test(data) || !data) {
      const order = target.name;
      const newNumber = target.value;

      updatePassword(order, newNumber);
      updateValidations(order, newNumber);
      focusPrevInput(order, newNumber, inputType);
      currentInputRef.current = order;
    }
  };

  const updatePassword = (order, number) => {
    setPassword(prevPassword => ({ ...prevPassword, [order]: number }));
  };

  const updateValidations = (order, number) => {
    setValidations(prevValidations => ({
      ...prevValidations,
      [order]: validator.validatePassword(number),
    }));
  };

  return {
    password,
    validations,
    isValid,
    inputRefs,
    onPasswordChange,
  };
}

export default usePasswordInput;

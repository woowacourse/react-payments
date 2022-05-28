import { useContext, useEffect } from 'react';
import PasswordInput from 'components/Modules/PasswordInput';
import { CardContext, CardContextValue } from 'context/CardContext';
import { PASSWORD_INPUT_NAMES } from 'constant/inputNames';
import useSomeInput from 'hooks/useSomeInput';
import validator from 'validation';
import { numberRegex } from 'constant/regularExpression';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';

function PasswordInputContainer() {
  const { inputtedInfoDispatch } = useContext(CardContext) as CardContextValue;

  const {
    stateObject: password,
    setStateObject: setPassword,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
    focusPrevInput,
  } = useSomeInput(PASSWORD_INPUT_NAMES, validator.validatePassword);

  const isValid = Object.values(validations).every(valid => valid);

  const onPasswordChange = ({ target, nativeEvent: { data, inputType } }: any) => {
    if (numberRegex.test(data) || !data) {
      const order = target.name;
      const newNumber = target.value;

      updatePassword(order, newNumber);
      updateValidations(order, newNumber);
      focusPrevInput(order, newNumber, inputType);
      currentInputRef.current = order;
    }
  };

  const updatePassword = (order: string, number: string) => {
    setPassword(prevPassword => ({ ...prevPassword, [order]: number }));
  };

  const updateValidations = (order: string, number: string) => {
    setValidations(prevValidations => ({
      ...prevValidations,
      [order]: validator.validatePassword(number),
    }));
  };

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.PASSWORD,
      value: password,
      valid: isValid,
    });
  }, [password, isValid]);

  return (
    <PasswordInput
      password={password}
      validations={validations}
      inputRefs={inputRefs}
      onPasswordChange={onPasswordChange}
    />
  );
}

export default PasswordInputContainer;

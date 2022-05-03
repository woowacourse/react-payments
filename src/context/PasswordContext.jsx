import { createContext } from 'react';
import validator from '../../src/validation';
import { numberRegex } from '../constant/regularExpression';
import useFocus from '../hooks/useFocus';
import useSomeInput from '../hooks/useSomeInput';

const PasswordContext = createContext();

function PasswordContextProvider({ children }) {
  const orders = ['first', 'second'];
  const {
    stateObject: password,
    setStateObject: setPassword,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
  } = useSomeInput(orders);

  const { focusPrevInput } = useFocus({
    validate: validator.validatePassword,
    inputNames: orders,
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

  return (
    <PasswordContext.Provider
      value={{
        password,
        validations,
        isValid,
        inputRefs,
        onPasswordChange,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
}

export { PasswordContext, PasswordContextProvider };

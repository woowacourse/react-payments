import { createContext, useRef } from 'react';
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
    refs,
  } = useSomeInput(orders);

  const currentOrderRef = useRef();
  const isValid = Object.values(validations).every(valid => valid);

  const { focusPrevOrder } = useFocus({
    validate: validator.validatePassword,
    orders,
    validations,
    refs,
    currentOrderRef,
  });

  const onPasswordChange = ({ target, nativeEvent: { data, inputType } }) => {
    if (numberRegex.test(data) || !data) {
      const order = target.name;
      const newNumber = target.value;

      updatePassword(order, newNumber);
      updateValidations(order, newNumber);
      focusPrevOrder(order, newNumber, inputType);
      currentOrderRef.current = order;
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
        orders,
        password,
        validations,
        isValid,
        refs,
        currentOrderRef,
        onPasswordChange,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
}

export { PasswordContext, PasswordContextProvider };

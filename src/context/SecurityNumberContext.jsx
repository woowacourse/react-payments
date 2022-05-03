import { createContext, useState } from 'react';
import validator from '../../src/validation';
import { numberRegex } from '../constant/regularExpression';

const SecurityNumberContext = createContext();

function SecurityNumberContextProvider({ children }) {
  const [number, setNumber] = useState('');
  const [validation, setValidation] = useState(false);

  const onNumberChange = ({ target, nativeEvent: { data } }) => {
    if (numberRegex.test(data) || !data) {
      setNumber(target.value);
      updateValidation(target.value);
    }
  };

  const updateValidation = number => {
    setValidation(validator.validateSecurityNumber(number));
  };

  return (
    <SecurityNumberContext.Provider
      value={{
        number,
        validation,
        isValid: validation,
        onNumberChange,
      }}
    >
      {children}
    </SecurityNumberContext.Provider>
  );
}

export { SecurityNumberContext, SecurityNumberContextProvider };

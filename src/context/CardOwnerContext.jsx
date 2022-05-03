import { createContext, useState } from 'react';
import { PLACEHOLDER } from '../constant';
import validator from '../../src/validation';
import { englishRegex } from '../constant/regularExpression';

const CardOwnerContext = createContext();

function CardOwnerContextProvider({ children }) {
  const [name, setName] = useState('');
  const [validation, setValidation] = useState(false);
  const ownerNameString = name || PLACEHOLDER.NAME;

  const onNameChange = ({ target, nativeEvent: { data } }) => {
    if (englishRegex.test(data) || !data) {
      const name = target.value.toUpperCase();

      setName(name);
      updateValidation(name);
    }
  };

  const updateValidation = name => {
    setValidation(validator.validateOwnerName(name));
  };

  return (
    <CardOwnerContext.Provider
      value={{
        name,
        ownerNameString,
        validation,
        isValid: validation,
        onNameChange,
      }}
    >
      {children}
    </CardOwnerContext.Provider>
  );
}

export { CardOwnerContext, CardOwnerContextProvider };

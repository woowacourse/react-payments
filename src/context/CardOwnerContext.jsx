import { createContext, useState } from 'react';
import { PLACEHOLDER } from '../constant';

const CardOwnerContext = createContext();

function CardOwnerContextProvider({ children }) {
  const [name, setName] = useState('');
  const [validation, setValidation] = useState(false);

  const ownerNameString = name || PLACEHOLDER.NAME;

  return (
    <CardOwnerContext.Provider
      value={{
        name,
        ownerNameString,
        validation,
        isValid: validation,
        setName,
        setValidation,
      }}
    >
      {children}
    </CardOwnerContext.Provider>
  );
}

export { CardOwnerContext, CardOwnerContextProvider };

import { createContext, useState } from 'react';

const CardOwnerContext = createContext();

function CardOwnerContextProvider({ children }) {
  const [name, setName] = useState('');
  const [validation, setValidation] = useState(false);

  return (
    <CardOwnerContext.Provider
      value={{ name, validation, setName, setValidation }}
    >
      {children}
    </CardOwnerContext.Provider>
  );
}

export { CardOwnerContext, CardOwnerContextProvider };

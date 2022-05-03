import { createContext, useState } from 'react';

const SecurityNumberContext = createContext();

function SecurityNumberContextProvider({ children }) {
  const [number, setNumber] = useState('');
  const [validation, setValidation] = useState(false);

  return (
    <SecurityNumberContext.Provider
      value={{ number, validation, setNumber, setValidation }}
    >
      {children}
    </SecurityNumberContext.Provider>
  );
}

export { SecurityNumberContext, SecurityNumberContextProvider };

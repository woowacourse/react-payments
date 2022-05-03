import { createContext, useState, useRef } from 'react';

const PasswordContext = createContext();

function PasswordContextProvider({ children }) {
  const orders = ['first', 'second'];
  const [password, setPassword] = useState(
    Object.fromEntries(orders.map(order => [order, '']))
  );
  const [validations, setValidations] = useState(
    Object.fromEntries(orders.map(order => [order, false]))
  );
  const refs = Object.fromEntries(orders.map(order => [order, useRef()]));
  const currentOrderRef = useRef();

  const isValid = Object.values(validations).every(valid => valid);

  return (
    <PasswordContext.Provider
      value={{
        orders,
        password,
        validations,
        isValid,
        refs,
        currentOrderRef,
        setPassword,
        setValidations,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
}

export { PasswordContext, PasswordContextProvider };

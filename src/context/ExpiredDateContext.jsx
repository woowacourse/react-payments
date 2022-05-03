import { createContext, useState, useRef } from 'react';

const ExpiredDateContext = createContext();

function ExpiredDateContextProvider({ children }) {
  const datePlaceholder = { month: 'MM', year: 'YY' };
  const units = ['month', 'year'];
  const [expiredDate, setExpiredDate] = useState(
    Object.fromEntries(units.map(unit => [unit, '']))
  );
  const [validations, setValidation] = useState(
    Object.fromEntries(units.map(unit => [unit, false]))
  );
  const refs = Object.fromEntries(units.map(unit => [unit, useRef()]));
  const currentUnitRef = useRef();

  const isValid = Object.values(validations).every(valid => valid);

  return (
    <ExpiredDateContext.Provider
      value={{
        datePlaceholder,
        units,
        expiredDate,
        validations,
        isValid,
        refs,
        currentUnitRef,
        setExpiredDate,
        setValidation,
      }}
    >
      {children}
    </ExpiredDateContext.Provider>
  );
}

export { ExpiredDateContext, ExpiredDateContextProvider };

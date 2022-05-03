import { createContext, useState, useRef } from 'react';

const CardNumberContext = createContext();

function CardNumberContextProvider({ children }) {
  const orders = ['first', 'second', 'third', 'four'];
  const [numbers, setNumbers] = useState(
    Object.fromEntries(orders.map(order => [order, '']))
  );
  const [validations, setValidations] = useState(
    Object.fromEntries(orders.map(order => [order, false]))
  );
  const refs = Object.fromEntries(orders.map(order => [order, useRef()]));
  const currentOrderRef = useRef();

  const isValid = Object.values(validations).every(valid => valid);

  const cardNumberString = Object.values(numbers).some(number => number)
    ? Object.values(numbers)
        .map((cardNumber, index) =>
          index < 2 ? cardNumber : '●'.repeat(cardNumber.length)
        )
        .join(' ')
    : '';

  return (
    <CardNumberContext.Provider
      value={{
        orders,
        numbers,
        cardNumberString,
        validations,
        isValid,
        refs,
        currentOrderRef,
        setNumbers,
        setValidations,
      }}
    >
      {children}
    </CardNumberContext.Provider>
  );
}

export { CardNumberContext, CardNumberContextProvider };

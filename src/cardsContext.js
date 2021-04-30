import { createContext } from 'react';

const cards = [
  {
    id: 0,
    userName: 'POCO',
    cardCompany: 'POCO',
    cardNumber: '1234123412341234',
    expirationDate: '1212',
    securityCode: '123',
    password: { first: '1', second: '2' },
    cardNickName: 'POCO',
  },
];

const CardsContext = createContext();

export function CardsProvider({ children }) {
  return <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>;
}

export function CardsConsumer({ children }) {
  return <CardsContext.Consumer>{children}</CardsContext.Consumer>;
}

import { createContext } from 'react';

const cards = [
  {
    id: 0,
    userName: 'POCO',
    company: 'POCO',
    number: '1234123412341234',
    expirationDate: '12/30',
    securityCode: '123',
    password: { first: '1', second: '2' },
    nickName: 'POCO',
  },
];

export const CardsContext = createContext();

export function CardsProvider({ children }) {
  return <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>;
}

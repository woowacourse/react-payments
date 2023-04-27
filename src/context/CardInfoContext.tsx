import { PropsWithChildren, createContext, useState } from 'react';

type CardInfoContextType = {
  cardNumber: string;
  setCardNumber: (cardNumber: string) => void;
  expirationDate: string;
  setExpirationDate: (expirationDate: string) => void;
  cardOwnerName: string;
  setCardOwnerName: (cardOwnerName: string) => void;
  securityCode: string;
  setSecurityCode: (securityCode: string) => void;
  firstDigit: string;
  setFirstDigit: (firstDigit: string) => void;
  secondDigit: string;
  setSecondDigit: (secondDigit: string) => void;
  selectedCard: string;
  setSelectedCard: (selectedCard: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  cardNickName: string;
  setCardNickName: (cardNickName: string) => void;
};

export const CardInfoContext = createContext<CardInfoContextType>({
  cardNumber: '',
  setCardNumber: () => {},
  expirationDate: '',
  setExpirationDate: () => {},
  cardOwnerName: '',
  setCardOwnerName: () => {},
  securityCode: '',
  setSecurityCode: () => {},
  firstDigit: '',
  setFirstDigit: () => {},
  secondDigit: '',
  setSecondDigit: () => {},
  selectedCard: '',
  setSelectedCard: () => {},
  isModalOpen: true,
  setIsModalOpen: () => {},
  cardNickName: '',
  setCardNickName: () => {},
});

export const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardOwnerName, setCardOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [cardNickName, setCardNickName] = useState('');

  return (
    <CardInfoContext.Provider
      value={{
        cardNumber,
        setCardNumber,
        expirationDate,
        setExpirationDate,
        cardOwnerName,
        setCardOwnerName,
        securityCode,
        setSecurityCode,
        firstDigit,
        setFirstDigit,
        secondDigit,
        setSecondDigit,
        selectedCard,
        setSelectedCard,
        isModalOpen,
        setIsModalOpen,
        cardNickName,
        setCardNickName,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

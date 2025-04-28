import { createContext, useState, useContext, ReactNode } from 'react';
import { CardInfoProps, ErrorProps } from '../../../shared/model/types';
import { NO_ERROR } from '../../../shared/constants/errorConstants';
import {
  handleCardCVCChange,
  handleCardExpirationDateChange,
  handleCardIssuerChange,
  handleCardNumberChange,
  handleCardPasswordChange,
} from './cardInfoHandlers';

const CardInfoContext = createContext<CardInfoProps | null>(null);

export const CardInfoProvider = ({ children }: { children: ReactNode }) => {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [cardExpirationDate, setCardExpirationDate] = useState<{ month: string; year: string }>({
    month: '',
    year: '',
  });
  const [cardCVC, setCardCVC] = useState<string>('');
  const [cardIssuer, setCardIssuer] = useState<string>('');
  const [cardPassword, setCardPassword] = useState<string>('');
  const [error, setError] = useState<ErrorProps>({
    cardNumberError: { errorIndex: NO_ERROR, errorMessage: '' },
    cardExpirationDateError: { errorIndex: NO_ERROR, errorMessage: '' },
    cardCVCError: { errorIndex: NO_ERROR, errorMessage: '' },
    cardIssuerError: { errorIndex: NO_ERROR, errorMessage: '' },
    cardPasswordError: { errorIndex: NO_ERROR, errorMessage: '' },
  });

  const updateCardInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('cardNumber')) {
      handleCardNumberChange(name, value, setCardNumber, setError);
    } else if (name.startsWith('cardExpirationDate')) {
      handleCardExpirationDateChange(name, value, setCardExpirationDate, setError);
    } else if (name.startsWith('cardCVC')) {
      handleCardCVCChange(value, setCardCVC, setError);
    } else if (name.startsWith('cardIssuer')) {
      handleCardIssuerChange(value, setCardIssuer, setError);
    } else if (name.startsWith('cardPassword')) {
      handleCardPasswordChange(value, setCardPassword, setError);
    }
  };

  const resetCardInfo = () => {
    setCardNumber(['', '', '', '']);
    setCardExpirationDate({ month: '', year: '' });
    setCardCVC('');
    setCardIssuer('');
    setCardPassword('');
  };

  const cardInfo = {
    cardNumber,
    cardExpirationDate,
    cardCVC,
    cardIssuer,
    cardPassword,
  };

  return (
    <CardInfoContext.Provider value={{ cardInfo, updateCardInfo, resetCardInfo, error }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export const useCardInfoContext = () => {
  const context = useContext(CardInfoContext);
  if (!context) {
    throw new Error('useCardInfoContext must be used within a CardInfoProvider');
  }
  return context;
};

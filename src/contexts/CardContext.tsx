import { createContext, ReactNode } from 'react';
import { CardCompany, CardExpiration, CardNumber } from '../types/card';
import { useCardNumberInput } from '../hooks/useCardNumberInput';
import { useCardCompanySelect } from '../hooks/useCardCompanySelect';
import { useCardExpirationInput } from '../hooks/useCardExpirationInput';
import { useCvcInput } from '../hooks/useCvcInput';
import { useCardPasswordInput } from '../hooks/useCardPasswordInput';

type CardContextType = {
  cardNumbers: CardNumber;
  handleCardNumberChange: (key: keyof CardNumber, value: string) => void;
  cardNumberError: string;

  cardCompany: CardCompany | '';
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  cardExpiration: CardExpiration;
  handleCardExpirationChange: (key: keyof CardExpiration, value: string) => void;
  cardExpirationError: Record<keyof CardExpiration, string>;

  cvc: string;
  handleCvcChange: (key: string, value: string) => void;
  cvcError: string;

  cardPassword: string;
  handleCardPasswordChange: (_: string, value: string) => void;
  cardPasswordError: string;

  resetAllCardData: () => void;
};

export const CardContext = createContext<CardContextType>({} as CardContextType);

type CardProviderProps = {
  children: ReactNode;
};

export function CardProvider({ children }: CardProviderProps) {
  const { cardNumbers, handleCardNumberChange, cardNumberError, resetCardNumbers } = useCardNumberInput();
  const { cardCompany, handleSelectChange, resetCardCompany } = useCardCompanySelect();
  const { cardExpiration, handleCardExpirationChange, cardExpirationError, resetCardExpiration } =
    useCardExpirationInput();
  const { cvc, handleCvcChange, cvcError, resetCvc } = useCvcInput();
  const { cardPassword, handleCardPasswordChange, cardPasswordError, resetCardPassword } = useCardPasswordInput();

  const resetAllCardData = () => {
    resetCardNumbers();
    resetCardCompany();
    resetCardExpiration();
    resetCvc();
    resetCardPassword();
  };

  const contextValue: CardContextType = {
    cardNumbers,
    handleCardNumberChange,
    cardNumberError,
    cardCompany,
    handleSelectChange,
    cardExpiration,
    handleCardExpirationChange,
    cardExpirationError,
    cvc,
    handleCvcChange,
    cvcError,
    cardPassword,
    handleCardPasswordChange,
    cardPasswordError,
    resetAllCardData
  };

  return <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>;
}

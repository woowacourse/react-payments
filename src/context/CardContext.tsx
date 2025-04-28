import {
  createContext,
  useContext,
  ReactNode,
  useState,
  ChangeEvent,
} from 'react';
import {
  useCardNumber,
  useCardExpiration,
  useCardCVC,
  useCardPassword,
} from '../hooks';
import theme from '../styles/theme';
import {
  CardNumber,
  CardNumberError,
  CardExpirationDate,
  CardExpirationDateError,
  CardCVC,
} from '../../types/types';

export type CardBrand =
  | 'bc'
  | 'shinhan'
  | 'kakao'
  | 'hyundai'
  | 'woori'
  | 'lotte'
  | 'hana'
  | 'kb';

const cardBrandNames: Record<CardBrand, string> = {
  bc: 'BC카드',
  shinhan: '신한카드',
  kakao: '카카오카드',
  hyundai: '현대카드',
  woori: '우리카드',
  lotte: '롯데카드',
  hana: '하나카드',
  kb: '국민카드',
};

interface CardNumberContext {
  value: CardNumber;
  error: CardNumberError;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  getErrorMessage: () => string | null;
  isValid: () => boolean;
}

interface CardExpirationContext {
  value: CardExpirationDate;
  error: CardExpirationDateError;
  onChange: {
    month: (value: string) => void;
    year: (value: string) => void;
  };
  getMonthErrorMessage: () => string | null | undefined;
  getYearErrorMessage: () => string | null | undefined;
  isValid: () => boolean;
}

interface CardCVCContext {
  value: CardCVC;
  error: boolean;
  onChange: (value: string) => void;
  getErrorMessage: () => string | null;
  isValid: () => boolean;
}

interface CardPasswordContext {
  value: string;
  error: boolean;
  onChange: (value: string) => void;
  getErrorMessage: () => string | null;
  isValid: () => boolean;
}

interface CardBrandContext {
  selected: CardBrand | null;
  setSelected: (brand: CardBrand) => void;
  color: string;
}

interface CardContextType {
  cardNumber: CardNumberContext;
  cardExpiration: CardExpirationContext;
  cardCVC: CardCVCContext;
  cardPassword: CardPasswordContext;
  cardBrand: CardBrandContext;
}

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const {
    cardNumber,
    cardNumberError,
    handleCardNumberChange,
    getCardNumberErrorMessage,
    isCardNumberValid,
  } = useCardNumber();

  const {
    cardExpirationDate,
    cardExpirationDateError,
    handleCardExpirationChange,
    getMonthErrorMessage,
    getYearErrorMessage,
    isCardExpirationValid,
  } = useCardExpiration();

  const {
    cardCVC,
    cardCVCError,
    handleCardCVCChange,
    getCardCVCErrorMessage,
    isCardCVCValid,
  } = useCardCVC();

  const {
    cardPassword,
    cardPasswordError,
    handleCardPasswordChange,
    getCardPasswordErrorMessage,
    isCardPasswordValid,
  } = useCardPassword();

  const [selectedCardBrand, setSelectedCardBrand] = useState<CardBrand | null>(
    null
  );

  const cardBrandColor = selectedCardBrand
    ? theme.color[
        cardBrandNames[selectedCardBrand] as keyof typeof theme.color
      ] || theme.color.cardBlack
    : theme.color.cardBlack;

  const value: CardContextType = {
    cardNumber: {
      value: cardNumber,
      error: cardNumberError,
      onChange: handleCardNumberChange,
      getErrorMessage: getCardNumberErrorMessage,
      isValid: isCardNumberValid,
    },
    cardExpiration: {
      value: cardExpirationDate,
      error: cardExpirationDateError,
      onChange: handleCardExpirationChange,
      getMonthErrorMessage,
      getYearErrorMessage,
      isValid: isCardExpirationValid,
    },
    cardCVC: {
      value: cardCVC,
      error: cardCVCError,
      onChange: handleCardCVCChange,
      getErrorMessage: getCardCVCErrorMessage,
      isValid: isCardCVCValid,
    },
    cardPassword: {
      value: cardPassword,
      error: cardPasswordError,
      onChange: handleCardPasswordChange,
      getErrorMessage: getCardPasswordErrorMessage,
      isValid: isCardPasswordValid,
    },
    cardBrand: {
      selected: selectedCardBrand,
      setSelected: setSelectedCardBrand,
      color: cardBrandColor,
    },
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export const useCard = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }

  return context;
};

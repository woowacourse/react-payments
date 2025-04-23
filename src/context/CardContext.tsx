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
  kakao: '카카오뱅크',
  hyundai: '현대카드',
  woori: '우리카드',
  lotte: '롯데카드',
  hana: '하나카드',
  kb: '국민카드',
};

interface CardContextType {
  cardNumber: CardNumber;
  cardNumberError: CardNumberError;
  handleCardNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  getCardNumberErrorMessage: () => string | null;
  isCardNumberValid: () => boolean;

  cardExpirationDate: CardExpirationDate;
  cardExpirationDateError: CardExpirationDateError;
  handleCardExpirationChange: {
    month: (value: string) => void;
    year: (value: string) => void;
  };
  getMonthErrorMessage: () => string | null | undefined;
  getYearErrorMessage: () => string | null | undefined;
  isCardExpirationValid: () => boolean;

  cardCVC: CardCVC;
  cardCVCError: boolean;
  handleCardCVCChange: (value: string) => void;
  getCardCVCErrorMessage: () => string | null;
  isCardCVCValid: () => boolean;

  cardPassword: string;
  cardPasswordError: boolean;
  handleCardPasswordChange: (value: string) => void;
  getCardPasswordErrorMessage: () => string | null;
  isCardPasswordValid: () => boolean;

  selectedCardBrand: CardBrand | null;
  setSelectedCardBrand: (brand: CardBrand) => void;
  cardBrandColor: string;
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

  const value = {
    cardNumber,
    cardNumberError,
    handleCardNumberChange,
    getCardNumberErrorMessage,
    isCardNumberValid,

    cardExpirationDate,
    cardExpirationDateError,
    handleCardExpirationChange,
    getMonthErrorMessage,
    getYearErrorMessage,
    isCardExpirationValid,

    cardCVC,
    cardCVCError,
    handleCardCVCChange,
    getCardCVCErrorMessage,
    isCardCVCValid,

    cardPassword,
    cardPasswordError,
    handleCardPasswordChange,
    getCardPasswordErrorMessage,
    isCardPasswordValid,

    selectedCardBrand,
    setSelectedCardBrand,
    cardBrandColor,
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

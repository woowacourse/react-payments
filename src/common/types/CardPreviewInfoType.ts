import type { CardBrandId } from './CardPreview';

export type CardPreviewInfoType = {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
  cardBrandId: string;
};

export type CardFormHandlersType = {
  handleCardNumbersChange: (cardNumbers: string[]) => void;
  handleExpiryMonthChange: (expiryMonth: string) => void;
  handleExpiryYearChange: (expiryYear: string) => void;
  handleCardBrandChange: (cardBrandId: CardBrandId | null) => void;
};

import type { CardCompanyId } from './CardPreview';

export type CardPreviewInfoType = {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
  cardCompanyId: CardCompanyId | null;
};

export type CardFormHandlersType = {
  handleCardNumbersChange: (cardNumbers: string[]) => void;
  handleExpiryMonthChange: (expiryMonth: string) => void;
  handleExpiryYearChange: (expiryYear: string) => void;
  handleCardCompanyChange: (cardCompanyId: CardCompanyId | null) => void;
};

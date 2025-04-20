import CardExpirationDate from './CardExpirationDate';

export type CardExpirationDateKeys = 'month' | 'year';

export type IsError = {
  month: boolean;
  year: boolean;
};

export type CardExpirationDateOptions = {
  cardExpirationDate: CardExpirationDate;
  setCardExpirationDate: (
    target: CardExpirationDateKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardExpirationDateBlur: (target: CardExpirationDateKeys) => void;
  isError: IsError;
  errorMessage: string;
};
